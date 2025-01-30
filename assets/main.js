///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$(".hambager").on("click", function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $(".hambager-content").addClass("is-ham-open");
    $(".mega-menu").addClass("is-megamenu-open");
    $("header").addClass("is-megamenu-icon");
    $(".ham-txt").text("Close");
    navFlg = true;
  } else {
    $(".hambager-content").removeClass("is-ham-open");
    $(".mega-menu").removeClass("is-megamenu-open");
    $("header").removeClass("is-megamenu-icon");
    $(".ham-txt").text("Menu");
    navFlg = false;
  }
}

///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: "0px",
  threshold: 0.6,
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}

///////////////////////////////////////////
//サイドバー アコーディオン
///////////////////////////////////////////
$(document).ready(function () {
  $(".side-menu nav").hide();
  $(".side-menu p").on("click", function () {
    $(this).toggleClass("active");
    $(this).next("nav").slideToggle(300);
  });
});

///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function (e) {
  $("dd", this).slideToggle("fast");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

///////////////////////////////////////////
//フレーバー　成分表示 アコーディオン
///////////////////////////////////////////
$(document).ready(function () {
  $(".info .info-content").hide();
  $(".info p").on("click", function () {
    $(this).toggleClass("active");
    $(this).next(".info-content").slideToggle(300);
  });
});

///////////////////////////////////////////
//商品詳細 タブ
///////////////////////////////////////////
const tabMenus = document.querySelectorAll(".tab_menu-item");
console.log(tabMenus);

tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener("click", tabSwitch);
});

function tabSwitch(e) {
  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest(".tab_menu");
  console.log(tabList);
  const tabItems = tabList.querySelectorAll(".tab_menu-item");
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems =
    tabList.nextElementSibling.querySelectorAll(".tab_panel-box");
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove("is-active");
  });
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove("is-show");
  });

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add("is-active");
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel === tabTargetData) {
      tabPanelItem.classList.add("is-show");
    }
  });
}

////////////////////////////////////////////////////////////////////////////////////////
// ヘッダーが画面１番上を離れたら.activeを付与
///////////////////////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);
gsap.to("header", {
  scrollTrigger: {
    start: "top+=1 top", // ビューポートのトップから1pxスクロールした時点でトリガー
    end: "bottom top", // ドキュメントの最下部まで
    toggleClass: { targets: "header", className: "active" }, // headerタグに対してactiveクラスを切り替え
  },
});

////////////////////////////////////////////////////////////////////////////////////////
// Swiper
///////////////////////////////////////////////////////////////////////////////////////
//各Swiperイベントの初期化
document.addEventListener("DOMContentLoaded", (event) => {
  //トップMVスライダー
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  //トップ　バナースライダー
  const swiperBanner = new Swiper(".banner-slider", {
    slidesPerView: 1,
    spaceBetween: 20, // 画像間のスペース
    loop: true,
    centeredSlides: true, // アクティブなスライドを中央にする
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    speed: 500, // この値を調整して、スライドのスピードを変更する
    // freeMode: true,
    // freeModeMomentum: false, // フリック後のアニメーションを無効にする
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // スライドの表示枚数：700px以上の場合
      770: {
        spaceBetween: 20, // 画像間のスペース
        slidesPerView: 1.2,
      },
      // スライドの表示枚数：1000px以上の場合
      1000: {
        spaceBetween: 20, // 画像間のスペース
        slidesPerView: 1.2,
      },
      // スライドの表示枚数：1280px以上の場合
      1280: {
        spaceBetween: 40, // 画像間のスペース
        slidesPerView: 1.2,
      },
      // スライドの表示枚数：1900px以上の場合
      1900: {
        spaceBetween: 40, // 画像間のスペース
        slidesPerView: 1.5,
      },
    },
  });

  //トップ フレーバー無限スライダー
  const swiperflavor = new Swiper(".flavor-slider", {
    slidesPerView: 1.3,
    spaceBetween: 10, // 画像間のスペース
    loop: true,
    autoplay: {
      delay: 0, // delayを0にすることで連続的にスライドする
      disableOnInteraction: false,
    },
    speed: 6000, // この値を調整して、スライドのスピードを変更する
    freeMode: true,
    freeModeMomentum: false, // フリック後のアニメーションを無効にする
    freeModeSticky: true, // 無限ループ時にスライドがなめらかに連続して動くようにする
    breakpoints: {
      // スライドの表示枚数：600px以上の場合
      600: {
        spaceBetween: 10, // 画像間のスペース
        slidesPerView: 3,
      },
      // スライドの表示枚数：1000px以上の場合
      1000: {
        spaceBetween: 10, // 画像間のスペース
        slidesPerView: 4,
      },
      // スライドの表示枚数：1280px以上の場合
      1280: {
        spaceBetween: 10, // 画像間のスペース
        slidesPerView: 4,
      },
      // スライドの表示枚数：1900px以上の場合
      1900: {
        spaceBetween: 10, // 画像間のスペース
        slidesPerView: 6,
      },
    },
  });

  //トップ おすすめ商品スライダー
  const swiperpickup = new Swiper(".swiper-pickup", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    slidesPerView: 1.5,
    spaceBetween: 30,
    //スクロールバー表示設定
    scrollbar: {
      el: ".swiper-scrollbar", //要素指定
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 40,
        watchSlidesProgress: true,
      },
    },
  });
});

////////////////////////////////////////////////////////////////////////////////////////
// リモーダル内の空要素
///////////////////////////////////////////////////////////////////////////////////////
const els = document.querySelectorAll(".block_tex");

els.forEach((el) => {
  if (el.innerHTML === null || !el.innerHTML.match(/\S/g)) {
    el.classList.add("empty");
  }
});

////////////////////////////////////////////////////////////////////////////////////////
// リンク移動を遅延させる
///////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // ページが読み込まれた後に現在のURLのハッシュをチェック
  if (window.location.hash) {
    const anchor = document.querySelector(window.location.hash);
    if (anchor) {
      // 少し時間をおいてからスクロール位置を調整
      setTimeout(() => {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // ページの描画が落ち着くのを待つための遅延時間を設定
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
//テキストアニメ01
document.querySelectorAll(".anime-ttl01").forEach(function (elem) {
  gsap.to(elem.querySelectorAll("span"), {
    y: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
    },
  });
});
//テキストアニメ02
document.querySelectorAll(".anime-ttl02").forEach(function (elem) {
  gsap.to(elem.querySelectorAll("h2"), {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
    },
  });
});

//パララックス
const Parallax = document.querySelectorAll(".anime-para");
Parallax.forEach((Parallax) => {
  gsap.fromTo(
    Parallax.querySelector("img"),
    {
      yPercent: -25,
    },
    {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: Parallax,
        start: "top 70%",
        end: "bottom top",
        scrub: 1,
      },
    }
  );
});
const Parallax02 = document.querySelectorAll(".anime-para02");
Parallax02.forEach((Parallax02) => {
  gsap.fromTo(
    Parallax02.querySelector("img"),
    {
      yPercent: -20, //　元々の位置から
    },
    {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: Parallax02,
        start: "top 50%",
        end: "bottom 20%",
        scrub: 1,
      },
    }
  );
});

//トップ固定バナー
const mv = document.querySelector(".mv");
const mvFixLinkImg = mv.querySelector(".mv_fix-linkImg");

ScrollTrigger.create({
  trigger: mv,
  start: "bottom top", // MVセクションの下端が画面のトップに到達した時
  end: "+=100%",
  onEnter: () => {
    mvFixLinkImg.classList.add("bottom-fixed");
  },
  onLeaveBack: () => {
    mvFixLinkImg.classList.remove("bottom-fixed");
  },
});
