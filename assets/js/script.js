if ($(".display-time").length) {
  const displayTime = document.querySelector(".display-time");
  // Time
  function showTime() {
    let time = new Date();
    displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
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
      delay: 2000,
    },
  });
}

if ($(".marquee-swiper").length) {
  let swiperMarquee = new Swiper(".marquee-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 2000,
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
        scrollTop: 0,
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
        spaceBetween: 10,
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

if ($(".inner-works").length) {
  var swiperThumbs = new Swiper(".swiper_thumbs", {
    spaceBetween: 15,
    slidesPerView: 3,
    // freeMode: true,
    // mousewheel: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4,
    // watchSlidesProgress: true,
    direction: "vertical",
    breakpoints: {
      0: {
        direction: "horizontal",
        spaceBetween: 5,
      },
      1200: {
        direction: "vertical",
        spaceBetween: 15,
      },
    },
  });
  var swiperImages = new Swiper(".swiper_images", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    loopedSlides: 4,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    // speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 2000,
    // },
    // thumbs: {
    //   swiper: swiperThumbs,
    // },
  });

  swiperImages.controller.control = swiperThumbs;
  swiperThumbs.controller.control = swiperImages;
}

// Cursor
if ($(".cursor-dot").length) {
  var cursorCustom = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector(".cursor-dot"),
    $outline: document.querySelector(".cursor-dot-outline"),

    init: function () {
      // Set up element sizes
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;

      this.setupEventListeners();
      this.animateDotOutline();
    },

    //     updateCursor: function(e) {
    //         var self = this;

    //         console.log(e)

    //         // Show the cursor
    //         self.cursorVisible = true;
    //         self.toggleCursorVisibility();

    //         // Position the dot
    //         self.endX = e.pageX;
    //         self.endY = e.pageY;
    //         self.$dot.style.top = self.endY + 'px';
    //         self.$dot.style.left = self.endX + 'px';
    //     },

    setupEventListeners: function () {
      var self = this;

      // Anchor hovering
      document.querySelectorAll("a, button, .nav-link").forEach(function (el) {
        el.addEventListener("mouseover", function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        el.addEventListener("mouseout", function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
      });

      // Anchor hovering
      document
        .querySelectorAll(".slider-images .swiper-slide")
        .forEach(function (el) {
          el.addEventListener("mouseover", function () {
            $(".cursor-custom").addClass("filter");
            self.cursorEnlarged = true;
            self.toggleCursorSize();
          });
          el.addEventListener("mouseout", function () {
            $(".cursor-custom").removeClass("filter");
            self.cursorEnlarged = false;
            self.toggleCursorSize();
          });
        });

      // Click events
      document.addEventListener("mousedown", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener("mouseup", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });

      document.addEventListener("mousemove", function (e) {
        // Show the cursor
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        // Position the dot
        self.endX = e.pageX;
        self.endY = e.pageY;
        self.$dot.style.top = self.endY + "px";
        self.$dot.style.left = self.endX + "px";
      });

      // Hide/show cursor
      document.addEventListener("mouseenter", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      });

      document.addEventListener("mouseleave", function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      });
    },

    animateDotOutline: function () {
      var self = this;

      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + "px";
      self.$outline.style.left = self._x + "px";

      requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
      var self = this;

      if (self.cursorEnlarged) {
        self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(2)";
      } else {
        self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
        self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
      }
    },

    toggleCursorVisibility: function () {
      var self = this;

      if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      }
    },
  };
  if (window.outerWidth >= 1200) {
    cursorCustom.init();
  }
}
