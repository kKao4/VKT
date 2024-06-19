// Author: kKao4

function kKao4AutoScrollElement(className, { duration = 12, delay = 0.8, once = false } = {}) {
  gsap.registerPlugin(ScrollToPlugin);

  const width = window.innerWidth;
  // select element
  const element = document.querySelector(className);

  // detect direction scroll
  let directionScroll = "down";
  let lastScrollTop = element.scrollTop;
  function detectDirection() {
    const scrollTopPosition = element.scrollTop;
    if (scrollTopPosition < lastScrollTop) {
      directionScroll = "up";
    } else if (scrollTopPosition > lastScrollTop) {
      directionScroll = "down";
    }
    lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
  }
  element.addEventListener("scroll", detectDirection);

  // function auto scroll
  const autoScrollElement = ({ progress = 0, directionScroll = "down" } = {}) => {
    const tl = gsap.timeline({});
    tl.to(element, {
      duration: directionScroll === "down" ? duration - duration * progress : duration * progress,
      scrollTo: { y: directionScroll === "down" ? "max" : 0 },
      ease: "none",
      delay,
    });
    tl.to(
      element,
      {
        duration,
        scrollTo: { y: directionScroll === "down" ? 0 : "max" },
        ease: "none",
        repeat: once ? 0 : -1,
        repeatDelay: delay,
        yoyo: true,
      },
      `>+=${delay}`
    );
  };

  // first run autoscroll
  autoScrollElement();

  element.addEventListener(width < 768 ? "touchstart" : "mouseenter", () => {
    gsap.killTweensOf(element);
  });
  element.addEventListener(width < 768 ? "touchend" : "mouseleave", () => {
    const progress = Math.max(Math.min(parseFloat(element.scrollTop) / parseFloat(element.offsetHeight), 1), 0);
    autoScrollElement({ progress, directionScroll });
  });
}
