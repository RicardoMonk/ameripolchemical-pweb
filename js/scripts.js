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

const container = document.querySelector(".container");
const cards = document.querySelector(".cards");

/* keep track of user's mouse down and up */
let isPressedDown = false;
/* x horizontal space of cursor from inner container */
let cursorXSpace;

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mouseup", () => {
  container.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

function boundCards() {
  const container_rect = container.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width}px`;
  }
}