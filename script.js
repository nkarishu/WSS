 $(function() {

     //headerアニメーション
     $(window).scroll(function() {
         if ($(window).scrollTop() > 500) {
             $('.gnav__child-nav').addClass('scroll02');
         }
            else {
                $('.gnav__child-nav').removeClass('scroll02');
            }
     });


     $(window).scroll(function() {
         if ($(window).scrollTop() > 500) {
             $('.header').addClass('scroll');
         }
            else {
                $('.header').removeClass('scroll');
            }
     });










     //スクロールアニメーション
     $(window).scroll(function() {
         $('.fadein').each(function() {

             var targetElement = $(this).offset().top;
             var scroll = $(window).scrollTop();
             var windowHeight = $(window).height();
             if (scroll > targetElement - windowHeight + 50) {
                 $(this).addClass('scrollin');
             }
         });
     });

     //スケールアニメーション
     $(window).scroll(function() {
         $('.scale').each(function() {

             var targetElement = $(this).offset().top;
             var scroll = $(window).scrollTop();
             var windowHeight = $(window).height();
             if (scroll > targetElement - windowHeight + 50) {
                 $(this).addClass('scrollin02');
             }
         });
     });








 });