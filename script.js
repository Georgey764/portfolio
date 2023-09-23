"use: strict";

let headerPosition = 100;
let aboutTop = $(".about-page").offset().top;
let passionTop = $(".passion-page").offset().top;
let experienceTop = $(".experience-page").offset().top;
let projectsTop = $(".projects-page").offset().top;
let contactTop = $(".contact-page").offset().top;

$(window).on("scroll", (e) => {
  let scrolled = window.scrollY;
  if (scrolled > headerPosition) {
    $("header").addClass("sticky");
    $("header").animate({
      backgroundColor: "black",
    });
  } else {
    $("header").removeClass("sticky");
  }

  if (scrolled > aboutTop - 400) {
    $(".about-page")
      .removeClass("hidden")
      .addClass("animate__animated animate__fadeIn");
  }

  if (scrolled > passionTop - 400) {
    $(".cell-one")
      .removeClass("hidden")
      .addClass("animate__animated animate__fadeIn");
    setTimeout(function () {
      $(".cell-two")
        .removeClass("hidden")
        .addClass("animate__animated animate__fadeIn");
    }, 200);
    setTimeout(function () {
      $(".cell-three")
        .removeClass("hidden")
        .addClass("animate__animated animate__fadeIn");
    }, 400);
  }

  if (scrolled > passionTop + 1100) {
    $(".resume-button")
      .removeClass("hidden")
      .addClass("animate__animated animate__bounceIn");
  }

  if (scrolled > experienceTop - 350) {
    $(".experience-page")
      .removeClass("hidden")
      .addClass("animate__animated animate__fadeIn");
  }

  if (scrolled > contactTop - 500) {
    $(".fa-paper-plane")
      .removeClass("hidden")
      .addClass("animate__animated animate__backInDown");
  }

  if (scrolled >= aboutTop - 250 && scrolled < passionTop - 350) {
    $(".li1").css({ background: "gray" });
  } else {
    $(".li1").css({ background: "" });
  }

  if (scrolled >= passionTop - 350 && scrolled < experienceTop - 350) {
    $(".li2").css({ background: "gray" });
  } else {
    $(".li2").css({ background: "" });
  }

  if (scrolled >= experienceTop - 350 && scrolled < projectsTop - 350) {
    $(".li3").css({ background: "gray" });
  } else {
    $(".li3").css({ background: "" });
  }

  if (scrolled >= projectsTop - 350 && scrolled < contactTop - 350) {
    $(".li4").css({ background: "gray" });
  } else {
    $(".li4").css({ background: "" });
  }

  if (scrolled >= contactTop - 500) {
    $(".li5").css({ background: "gray" });
  } else {
    $(".li5").css({ background: "" });
  }
});

$(".experience-pic").addClass("bNw");
$(".experience-pic").on("mouseover", function (e) {
  $("#" + e.target.id).removeClass("bNw");
});

$(".experience-pic").on("mouseout", function (e) {
  $("#" + e.target.id).addClass("bNw");
});

$(".rocket").on("mouseover", function () {
  $(".to-the-top").animate({
    opacity: "1",
  });
});

$(".rocket").on("mouseout", function () {
  $(".to-the-top").animate({ opacity: "0" });
});

$(".passion-icon").on("mouseover", function (e) {
  $("#" + e.target.id).css("animation", "rotation 0.5s ease");
});

$(".passion-icon").on("mouseout", function (e) {
  $("#" + e.target.id).css("animation", "");
});

let navOpen = false;

$(".nav-icon").on("click", function () {
  navOpen = !navOpen;
  if (navOpen == true) {
    $("body").css("overflow", "hidden");
  } else {
    $("body").css("overflow", "");
  }
  toggleOverlayOnly();
});

$(".nav-icon").on("click", function () {
  $(".nav-icon").css("animation", "rotation 0.5s ease");
  setTimeout(function () {
    $(".nav-icon").css("animation", "");
  }, 500);
});

$(".overlay").on("click", function () {
  navOpen = !navOpen;
  toggleOverlayOnly();
  $("body").css("overflow", "");
});

let number = "";
$(".project").on("click", function (e) {
  number = e.target.id;
  toggleModal(number);
  $("body").css("overflow", "hidden");
  $(`.${number}-modal`).addClass(
    "animate__animated animate__slideInDown animate__faster"
  );

  if (
    $(`.modal__img--${number}`).get(0).src !=
    $(`.modal__img--${number}`).get(0).getAttribute("data-src")
  ) {
    const urlModal = $(`.modal__img--${number}`)
      .get(0)
      .getAttribute("data-src");

    $(`.modal__img--${number}`).get(0).src = `${urlModal}`;
  }

  setTimeout(function () {
    $(`.${number}-modal`).removeClass(
      "animate__animated animate__faster animate__slideInDown"
    );
  }, 500);
});

$(".overlay-project").on("click", function (e) {
  toggleModal(number);
  $("body").css("overflow", "");
});

function toggleModal(e) {
  $(".overlay-project").toggleClass("hidden-modal");
  $(`.${e}-modal`).toggleClass("hidden-modal");
}

function toggleOverlayOnly() {
  $(".right-header").toggleClass("hidden-drop-down");
  $(".overlay").toggleClass("hidden-modal");
}

$(".modal-cross").on("click", function () {
  toggleModal(number);
  $("body").css("overflow", "");
});

//Lazy loading
const options = {
  root: null,
  threshold: 0,
  rootMargin: "50px",
};

const callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const newURL = entry.target.getAttribute("data-src");

      if (entry.target.tagName.toLowerCase() == "img") {
        entry.target.src = entry.target.dataset.src;
      }

      if (entry.target.tagName.toLowerCase() == "div") {
        entry.target.style.backgroundImage = `url("${entry.target.getAttribute(
          "data-src"
        )}")`;
      }

      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

$(".lazy-load").each((index, img) => {
  observer.observe(img);
});


