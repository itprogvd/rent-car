document.addEventListener('DOMContentLoaded', () => {

  const burger = document.getElementById('burger');
  const nav = document.querySelector('.nav');

  if (document.documentElement.clientWidth < 768) {
    nav.classList.add('nav--hidden');
  } else {
    nav.classList.remove('nav--hidden');
  }

  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
      nav.classList.add('nav--hidden');
    } else {
      nav.classList.remove('nav--hidden');
    }
  });
  burger.addEventListener('click', () => {
    if (burger.classList.contains('burger--active')) {
      burger.classList.remove('burger--active');
      nav.classList.add('nav--hidden');
    } else {
      burger.classList.add('burger--active');
      nav.classList.remove('nav--hidden');
    }
  });

});