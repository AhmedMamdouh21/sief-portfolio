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
if ($(".backToTop").length) {
  $(".backToTop").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });
}
