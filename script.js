"use: strict";

let headerPosition = 100;

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
});

$(".experience-pic").addClass("bNw");
$(".experience-pic").on("mouseover", function (e) {
  $("#" + e.target.id).removeClass("bNw");
});

$(".experience-pic").on("mouseout", function (e) {
  $("#" + e.target.id).addClass("bNw");
});
