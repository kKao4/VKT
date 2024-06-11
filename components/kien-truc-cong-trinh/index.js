function init() {
  /* SECTION: section Các đối tác tuyệt vời của chúng tôi */
  const swiperGreatPartner = new Swiper(".swiper-great-partner", {
    slidesPerView: 8,
    slidesPerGroup: 1,
    speed: 600,
    spaceBetween: (window.innerWidth / 100) * 0.87,
    loop: true,
    navigation: {
      prevEl: ".swiper-great-partner-prev-btn",
      nextEl: ".swiper-great-partner-next-btn",
    },
  });
  /* SECTION: Thể loại công trình được quan tâm nhất */
  const swiperInterestProject = new Swiper(".swiper-interest-project", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    speed: 600,
    spaceBetween: (window.innerWidth / 100) * 1,
    loop: true,
    navigation: {
      prevEl: ".swiper-interest-project-prev-btn",
      nextEl: ".swiper-interest-project-next-btn",
    },
  });
}

window.addEventListener("DOMContentLoaded", init);
