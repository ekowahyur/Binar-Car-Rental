window.addEventListener('DOMContentLoaded', (event) => {
  const burgerIcon = document.querySelector('.burger-icon')
  const sidebar = document.querySelector('.sidebar')
  const overlay = document.querySelector('.overlay-bg')
  const closeButton = document.querySelector('.close-button')
  burgerIcon.addEventListener('click', () => {
    sidebar.classList.add('navbar-active')
    overlay.classList.add('navbar-active')
  });
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('navbar-active')
    overlay.classList.remove('navbar-active')
  });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    loop: true,
    nav: true,
    dots: false,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
      }
  }
  });
});