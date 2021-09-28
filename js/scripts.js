//this code work to give it style to menu icon

const menuIcon = document.querySelector(".menu-icon");
const menuOptions = document.querySelector(".menu-options");

menuIcon.addEventListener("click", () => {
    menuOptions.classList.toggle("nav-menu_visible");
});


//this code work to animate loader

window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

//this code work to carousel

/*window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'),{
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 768,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            draggable: true,
            slidesToShow: '2',
            slidesToScroll: '2',

          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            draggable: true,
            slidesToShow: 4,
            slidesToScroll: 4,

          }
        }
      ]
    });
});*/

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,
    //slidesPerGroup: 3,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });