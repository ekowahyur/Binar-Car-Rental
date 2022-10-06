window.addEventListener('DOMContentLoaded', (event) => {
  const burgerIcon = document.querySelector('.burger-icon')
  const sidebar = document.querySelector('.sidebar')
  const overlay = document.querySelector('.overlay-bg')
  const closeButton = document.querySelector('.close-button')
  const findCarBorder = document.querySelector('.find-car-border')
  const findCar = document.querySelector('.find-car')
  const overlay2 = document.querySelector('.overlay-bg-2')
  burgerIcon.addEventListener('click', () => {
    sidebar.classList.add('navbar-active')
    overlay.classList.add('navbar-active')
  });
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('navbar-active')
    overlay.classList.remove('navbar-active')
  });
  findCar.addEventListener('click', () => {
    console.log('klik-a')
    findCarBorder.classList.add('findcar-active')
    overlay2.classList.add('findcar-active')
  });
  overlay2.addEventListener('click', () => {
    console.log('klik-b')
    findCarBorder.classList.remove('findcar-active')
    overlay2.classList.remove('findcar-active')
  });
});

$(document).ready(function () {
  // console.log($('.homepage').width() >0)
  if($('.homepage').width() >0){
    $(".owl-carousel").owlCarousel({
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 3000,
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        }
      }
    });
  }
});