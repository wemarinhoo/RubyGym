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
});
})

