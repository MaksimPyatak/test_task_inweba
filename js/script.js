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

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((el) => {
   el.addEventListener('click', function (event) {
      if (event.target.className == "accordion__button" || event.target.className == "accordion__title") {
         changeAccordeon(this);
      }
   })
})

function changeAccordeon(accordion) {
   accordion.classList.toggle("active");

   const text = accordion.querySelector('.accordion__text');
   if (text.style.maxHeight) {
      text.style.maxHeight = null;
      setTimeout(function () {
         text.style.display = 'none'
      }, 500)
   } else {
      text.style.display = 'block';
      text.style.maxHeight = text.scrollHeight + "px";
   }
}