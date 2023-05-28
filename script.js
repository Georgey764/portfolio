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

  if (scrolled > contactTop - 350) {
    $(".fa-paper-plane")
      .removeClass("hidden")
      .addClass("animate__animated animate__backInDown");
  }

  if (scrolled >= aboutTop - 350 && scrolled < passionTop - 350) {
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

var x = window.matchMedia("(max-width: 768px)");
function responsiveness(x) {
  if (x.matches) {
    $("header").append("<i class='nav-icon fa-solid fa-bars'></i>");
    $(".right-header").addClass("hidden-drop-down");
  }
}
responsiveness(x);

$(".nav-icon").on("click", function () {
  $(".right-header").toggleClass("hidden-drop-down");
});
