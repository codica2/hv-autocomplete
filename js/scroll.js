$(document).ready(function() {
  var posGettingStarted = $("#getting-started").offset().top,
    posAbout = $("#about").offset().top,
    posBasics = $("#basic").offset().top,
    posSearch = $("#search").offset().top,
    posStyling = $("#styling").offset().top,
    posCategories = $("#categories").offset().top,
    posApi = $("#api").offset().top,
    menu = $(".menu-link");

  window.onscroll = function() {
    if (scrollY > posAbout) {
      menu.removeClass("on-page");
      $("#about-link").addClass("on-page");
    }
    if (scrollY > posGettingStarted - 200) {
      menu.removeClass("on-page");
      $("#getting-started-link").addClass("on-page");
    }
    if (scrollY > posBasics - 60) {
      menu.removeClass("on-page");
      $("#basic-link").addClass("on-page");
    }
    if (scrollY > posSearch + 100) {
      menu.removeClass("on-page");
      $("#search-link").addClass("on-page");
    }
    if (scrollY > posStyling + 340) {
      menu.removeClass("on-page");
      $("#styling-link").addClass("on-page");
    }
    if (scrollY > posCategories + 770) {
      menu.removeClass("on-page");
      $("#categories-link").addClass("on-page");
    }
    if (scrollY > posApi + 1020) {
      menu.removeClass("on-page");
      $("#api-link").addClass("on-page");
    }
  };

  $(".logo").on("click", function() {
    $("html").animate({ scrollTop: 0 }, 700);
  });

  $(".menu-link").on("click", function() {
    var position = $(this).attr("id");
    var dest = $("." + position).offset().top - 90;
    $("html").animate({ scrollTop: dest }, 700);
  });
});
