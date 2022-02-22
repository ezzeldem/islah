$(document).ready(function() {

  // open menu
  $('.devo-min-header .menu-icon i').click(function() {
      $('.nav-ul').addClass('left-0');
      $('.over-lay').show();
      $('body').addClass('overflow-hide');
  });

  $('.devo-min-header .nav-ul .close-icon i, .over-lay').click(function() {
      $('.nav-ul').removeClass('left-0');
      $('.over-lay').hide();
      $('body').removeClass('overflow-hide');
  });

  // open menu

  // scroll li a

  $('.devo-min-header .nav-ul .devo-nav-ul ul li a').click(function() {
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top
      }, 900);
      $('.nav-ul').removeClass('left-0');
      $('.over-lay').hide();
      $('body').removeClass('overflow-hide');
  });

  // scroll li a

  // show form

  $('.zakatSelect ').on('change', function() {
      $('#' + this.value).toggleClass('show-form hide-form').siblings().addClass('hide-form').removeClass('show-form');
  });
  // show form

  // functio  form

  // money

  $('.moneyCount').click(function() {
      numberCount = $('#money-id').val(),
          percentMoney = 40,
          moneyNumber = numberCount / percentMoney;
      $('.elzakah-count-number-count').text(': ' + moneyNumber + ' ' + 'جنية')
  });
  // money

  // gold

  $('#goldButton').click(function() {

      goldPrice = $('#goldPrice').val();
      goldWeight = $('#goldWeight').val();
      percentMoney = 40;
      goldZakah = goldPrice * goldWeight;
      goldFinalZakah = goldZakah / percentMoney;

      $('.elzakah-count-number-count').text(': ' + goldFinalZakah + ' ' + 'جنية')
  });
  // gold

  // silver

  $('#silverButton').click(function() {

      silverPrice = $('#silverPrice').val();
      silverWeight = $('#silverWeight').val();
      percentMoney = 40;
      solverZakah = silverPrice * silverWeight;
      silverFinalZakah = solverZakah / percentMoney;

      $('.elzakah-count-number-count').text(': ' + silverFinalZakah + ' ' + 'جنية')
  });

  // silver

  // functio  form

  $('.blog-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 1500,
      rtl: true,
      prevArrow: false,
      nextArrow: false,
      responsive: [{
              breakpoint: 772,
              settings: {
                  slidesToShow: 1,
                  centerMode: false,
              }
          },

      ]
  });

  $('.slider-hala').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 1500,
      rtl: true,
      prevArrow: false,
      nextArrow: false,
      responsive: [{
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  centerMode: false,
              }
          }, {
              breakpoint: 772,
              settings: {
                  slidesToShow: 1,
                  centerMode: false,
              }
          },

      ]
  });

});