
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
      // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer-open").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer-open").fadeToggle();
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

  // mvスワイパー
  const swiper1 = new Swiper(".js-mv-swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

// campaignスワイパー
  const swiper2 = new Swiper(".js-campaign-swiper", {
    // slidesPerView: 1.28,
    spaceBetween: 24,
    loop:true,
    loopAdditionalSlides: 4,
    loopedSlides:3,
    // maxBackfaceHiddenSlides:8,
    width:280,
    speed:1000,
    autoplay : {
      delay: 0,
      disableOnInteraction: false,
    },
    // ,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    breakpoints: {
      768: {
        spaceBetween: 40,
        // slidesPerView: 3.5,

        width: 333,
      }
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// ページトップ
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100pxスクロールしたら発火
      pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
    } else {
      pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
    }
  });
  pageTop.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500 // 500ミリ秒かけてページトップに戻る
    );
    return false;
  });


//イメージアニメーション
// スクロールして表示領域に入ったらclass付与
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

//要素の取得とスピードの設定
var box = $('.colorbox'),
    speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
        $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });





  
});



// フッター手前でストップ
// $(document).ready(function () {
//   $(".js-page-top").hide();
//   $(window).on("scroll", function () {
//     scrollHeight = $(document).height();
//     scrollPosition = $(window).height() + $(window).scrollTop();
//     footHeight = $("footer").innerHeight();
//     if (scrollHeight - scrollPosition <= footHeight) {
//       $(".js-page-top").css({
//         position: "absolute",
//         bottom: footHeight + 0,
//       });
//     } else {
//       $(".js-page-top").css({
//         position: "fixed",
//         bottom: "0",
//       });
//     }
//   });

// });
