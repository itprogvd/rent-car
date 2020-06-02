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


  var mySwiper = new Swiper('.videos-wrap', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        // 
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        // spaceBetween: 30
      }
    }
  });

  var mySecondSwiper = new Swiper('.about-slider-wrap', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    slidesPerView: 1,
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
    }
  });

  // var next = $('.swiper-button-next');
  // var prev = $('.swiper-button-prev');
  // var bullets = $('.swiper-pagination');

  // next.css('left', prev.width() + 20 + bullets.width() + 20);
  // bullets.css('left', prev.width() + 20);

  new WOW().init();
});