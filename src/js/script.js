jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer-open").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer-open").fadeToggle();
    $("body").toggleClass("active");
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
    spaceBetween: 24,
    loop: true,
    loopAdditionalSlides: 4,
    loopedSlides: 8,
    // maxBackfaceHiddenSlides:8,
    width: 280,
    speed: 3000,

    autoplay: {
      disableOnInteraction: false,
    },

    allowTouchMove: true,

    breakpoints: {
      768: {
        spaceBetween: 40,
        width: 333,
      },
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
    if ($(this).scrollTop() > 100) {
      // 100pxスクロールしたら発火
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

  $(document).ready(function () {
    let scrollHeight, scrollPosition, footHeight;
    $("#page-top").hide();
    $(window).on("scroll", function () {
      scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
      footHeight = $("footer").innerHeight();

      if (scrollHeight - scrollPosition <= footHeight) {
        $("#page-top").css({
          position: "absolute",
          bottom: footHeight + 20,
        });
      } else {
        $("#page-top").css({
          position: "fixed",
          bottom: "20px",
        });
      }
    });

    $("#page-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });
  });

  //イメージアニメーション
  // スクロールして表示領域に入ったらclass付与
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });




//要素の取得とスピードの設定
var box = $(".js-colorbox"),
  speed = 700;

//.js-colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function () {
  $(this).append('<div class="color"></div>');
  var color = $(this).find($(".color")),
    image = $(this).find("img");
  var counter = 0;

  image.css("opacity", "0");
  color.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  color.on("inview", function () {
    if (counter == 0) {
      $(this)
        .delay(200)
        .animate({ width: "100%" }, speed, function () {
          image.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed);
        });
      counter = 1;
    }
  });


});


// タブメニュー
const tabButton = $(".js-tab"),
tabContent = $(".js-content");
tabButton.on("click", function () {
let index = tabButton.index(this);
// console.log(index);
tabButton.removeClass("is-active");
$(this).addClass("is-active");
tabContent.removeClass("is-active");
tabContent.eq(index).addClass("is-active");
});

// アコーディオン
$(".faq-item:first-of-type .js-faq-item__content").css("display", "block");
  $(".faq-item:first-of-type .js-faq-item__title").addClass("open");
  $(".js-faq-item__title").on("click", function () {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open", 200);
    /*クリックしたjs-accordion-title以外のopenクラスを削除*/
    $(".js-faq-item__title").not(this).removeClass("open");
    /*クリックしたjs-accordion-title以外の要素を閉じる*/
    $(".js-faq-item__title").not(this).next().slideUp(200);
    $(".js-faq-item__content").on("click", function () {
        // クリックしたコンテンツを閉じる
        $(this).slideUp(200);
        // 閉じた場合、対応するタイトルのクラスも削除する
    $(".js-faq-item__title").removeClass("open");
   });
  });

  // 画像要素とモーダルを取得
var images = document.querySelectorAll('.gallery__img img');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImg');
var closeBtn = document.querySelector('.close');

// 画像をクリックしたときの処理
images.forEach(function(image) {
  image.addEventListener('click', function() {
    modal.style.display = 'block'; // モーダル表示
    modalImg.src = this.src; // クリックした画像をモーダルに表示
  });
});

// モーダルを閉じる処理
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // モーダル非表示
});

// モーダル外をクリックしても閉じる処理
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none'; // モーダル非表示
  }
});






});
