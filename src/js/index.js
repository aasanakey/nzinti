import "css/styles.css";
import $ from "jquery";
// SwipperJS
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

"use strict";

const carousel = new Swiper(".carousel", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  lazy: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


$(".m-navbar-toggler").on("click", (e) => {
    $('.mobile-navbar').toggleClass('hide')
    const icon = $('.m-navbar-toggler > i')
    icon.toggleClass('fa-x')
    icon.toggleClass('fa-bars')
});
