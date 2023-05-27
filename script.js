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

  if (scrolled > experienceTop - 400) {
    $(".experience-page")
      .removeClass("hidden")
      .addClass("animate__animated animate__fadeIn");
  }

  if (scrolled > contactTop - 400) {
    $(".fa-paper-plane")
      .removeClass("hidden")
      .addClass("animate__animated animate__backInDown");
  }

  if (scrolled >= aboutTop && scrolled < passionTop) {
    $(".li1").css({ background: "gray" });
  } else {
    $(".li1").css({ background: "" });
  }

  if (scrolled >= passionTop && scrolled < experienceTop) {
    $(".li2").css({ background: "gray" });
  } else {
    $(".li2").css({ background: "" });
  }

  if (scrolled >= experienceTop && scrolled < projectsTop) {
    $(".li3").css({ background: "gray" });
  } else {
    $(".li3").css({ background: "" });
  }

  if (scrolled >= projectsTop && scrolled < contactTop) {
    $(".li4").css({ background: "gray" });
  } else {
    $(".li4").css({ background: "" });
  }

  if (scrolled >= contactTop) {
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
  $(".to-the-top").removeClass("hidden");
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
