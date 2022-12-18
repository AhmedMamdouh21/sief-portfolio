if ($(".display-time").length) {
  const displayTime = document.querySelector(".display-time");
  // Time
  function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("it-IT", { hour12: false });
    setTimeout(showTime, 1000);
  }

  showTime();
}

if ($(".hero").length) {
  let swiperHero = new Swiper(".hero-swiper", {
    loop: true,
    effect: "fade",
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
  });
}

if ($(".marquee-swiper").length) {
  let swiperMarquee = new Swiper(".marquee-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
}

if ($(".marquee-swiper-bottom").length) {
  let swiperMarquee = new Swiper(".marquee-swiper-bottom", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 8000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
}

if ($(".video-works").length) {
  if (window.outerWidth >= 1200) {
    $(".work-details.video-works").on("mousemove", function (event) {
      // console.log("mousemove");
      $("video", this).get(0).play();
    });
    $(".work-details.video-works").on("mouseout ", function (event) {
      // console.log("mouseout ");
      $("video", this).get(0).pause();
      $("video", this).get(0).load();
    });
  }
}

$(".circle-animation").each(function () {
  var figure1 = this;
  var canim1 = {
    container: this,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/json/circle-animation.json",
  };
  var anim = bodymovin.loadAnimation(canim1);
});

// Scroll To Top
// var Scrollbar = window.Scrollbar;

// Scrollbar.init(document.querySelector(".scrollbar"));

if ($(".backToTop").length) {
  $(".backToTop").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1200
    );

    // const scroller = document.querySelector(".scrollbar");
    // const bodyScrollBar = Scrollbar.init(scroller, {
    //   damping: 0.05,
    //   renderByPixels: true,
    //   continuousScrolling: true,
    //   alwaysShowTracks: true,
    // });
    // bodyScrollBar.scrollTo(0, 0, 1200);
  });
}

if ($("select").length) {
  $("select").selectpicker();
}

if ($(".container-filter").length) {
  var $filterSelect = $("#FilterSelect"),
    // $sortSelect = $("#SortSelect"),
    $container = $(".container-filter");

  $container.mixItUp();

  $filterSelect.on("change", function () {
    $container.mixItUp("filter", this.value);
    $("html, body").animate(
      {
        scrollTop: $(".marquee").offset().top,
      },
      1200
    );
  });
}

if ($(".swiper-see-also").length) {
  let swiperSeeAlso = new Swiper(".swiper-see-also", {
    speed: 800,
    autoplay: {
      disableOnInteraction: false,
      delay: 2000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  });
}
