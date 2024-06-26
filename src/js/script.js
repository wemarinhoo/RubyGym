const mobileBtn = document.querySelector('#mobile-btn')
const navbar = document.querySelector('#navbar')
const linksMenu = document.querySelectorAll('.links-menu')
const body = document.querySelector('body')
const menuBars = document.querySelector('#menu-bars')

function toggleMenuBarsIcon() {
  if (navbar.classList.contains('hidden')) {
    menuBars.classList.replace('fa-xmark', 'fa-bars')
  } else {
    menuBars.classList.replace('fa-bars', 'fa-xmark')
  }
}

function toggleMenu() {
  navbar.classList.toggle('hidden')
  body.classList.toggle('overflow-hidden')
}

mobileBtn.addEventListener('click', () => {
  toggleMenu()
  toggleMenuBarsIcon()
})


linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
        toggleMenuBarsIcon();
    })
})

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '48px',
  duration: 1000,
  easing: 'ease-in-out',
  reset: false,
  mobile: false,
})

sr.reveal('.reveal-animation')
window.addEventListener('load', () => {
new Glider(document.querySelector(".carousel-list"), {
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: ".carousel-indicators",
  duration: "3",
  dragVelocity: "1.5",
  draggable: true,
  arrows: {
    prev: ".btn-left",
    next: ".btn-right"
  }
})
})

