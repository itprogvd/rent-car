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


  /* Select styles */
  $('.select').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
      class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
          class: 'new-select__item',
          html: $('<span>', {
            text: selectOption.eq(i).text()
          })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value');

          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });

      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
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
  var myThirdSwiper = new Swiper('.contacts-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + totalClass + '"></span>' +
        ' of ' +
        '<span class="' + currentClass + '"></span>';
    },
    slidesPerView: 1
  });

  $(function () {
    $('.header__scroll-up').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  });

  $(function () {
    document.querySelectorAll('.nav__item').forEach((item) => {
      $(item).click(function () {
        let elementClick = $(item).attr("href");
        let destination = $(elementClick).offset().top;
        $('html, body').animate({
          scrollTop: destination
        }, 500);
        return false;
      });
    });
  });

  $('.order__form').validate({
    errorElement: 'div',
    errorClass: 'invalid',
    rules: {
      phone: {
        required: true,
        minlength: 17
      }
    },
    messages: {
      phone: {
        required: "Укажите телефон",
        minlength: "Телефон некорректный"
      }
    }
  });

  $('[type=tel]').on('focus', () => {
    $('[type=tel]').mask('+7(000) 000-00-00', {
      placeholder: "+7 (___) __-__-___"
    });
  });
  $('[type=tel]').on('blur', () => {
    $('[type=tel]').mask('+7(000) 000-00-00', {
      placeholder: "Ваш телефон"
    });
  });

});