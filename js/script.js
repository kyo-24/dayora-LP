$(function() {

// swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    grabCursor: true,
    spaceBetween: 20,//スライド左右の余白
    slidesPerView: 'auto',//１画面に表示するスライド数

    breakpoints: {
      // スライドの表示枚数：768px以上の場合
      768: {
        spaceBetween: 40,//スライド左右の余白
      }
    }
  
  });


// aタグの遷移
  jQuery('a[href^="#"]').on('click', function () {

    let header = jQuery('#header').innerHeight();
    let id = jQuery(this).attr('href');
    let position = 0;
    if (id != "#") {
      position = jQuery(id).offset().top;
    }
    jQuery('html,body').animate({
      scrollTop: position - header
    }, 300)
  });

// to-topボタン px以上スクロールしたら可視化
jQuery(window).on('scroll', function() {
  if (300 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});
jQuery('.to-top').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});



// qaアコーディオン
  jQuery('.qa-box_q').on('click', function() {
    jQuery(this).next().slideToggle();
    jQuery(this).toggleClass('is-open');
  });

// ハンバーガーメニュー
  jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();
  
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
  
    return false;
  });



  // google form
  let $form = $('#js-form');
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp();
          $('#js-success').slideDown();
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $('#js-error').slideDown();
        }
      } 
    });
    return false; 
  }); 



  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on('change', function() {
    if (
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.970450474"]').prop('checked') === true 
    ) {
      // 全て入力された時
      $submit.prop('disabled', false);
      $submit.addClass('-active');
    } else {
      // 入力されていない時
      $submit.prop('disabled', true);
      $submit.removeClass('-active');
    }
  });












});