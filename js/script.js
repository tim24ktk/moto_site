var swiper = new Swiper(".container", {
  autoplay: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView : 1,
    },

    1024: {
      slidesPerView : 2,
    },
  },  
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 50,
    depth: 350,
  },

});

var swiper_review = new Swiper(".review__wrapper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView : 1,
    },

    1024: {
      slidesPerView : 3,
    },
  },
});