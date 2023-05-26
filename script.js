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
