const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   spaceBetween: 24,
   breakpoints: {
      576: {
         slidesPerView: 2,
         spaceBetween: 24
      }
   },

   pagination: {
      el: '.swiper-pagination',
   },

   navigation: {
      nextEl: '.testimonials-section__swiper-button-next',
      prevEl: '.testimonials-section__swiper-button-prev',
   },
});