document.addEventListener('DOMContentLoaded', function () {
  
}, false);

// $(document).ready(function() {
//   TweenMax.set(".project-preview", { width: 0 });

//   var tl = new TimelineLite();

//   $(document)
//     .on("mouseover", ".navigation-item", function(evt) {
//       tl = new TimelineLite();
//       tl.to($(".project-preview"), 1, {
//         width: "600px",
//         ease: Expo.easeInOut
//       });
//     })
//     .on("mouseout", ".navigation-item", function(evt) {
//       tl = new TimelineLite();
//       tl.to($(".project-preview"), 0.5, {
//         width: 0,
//         ease: Expo.easeInOut
//       });
//     });
// });

// $(".navigation-link-1").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-1.jpg)" });
// });

// $(".navigation-link-2").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-2.jpg)" });
// });

// $(".navigation-link-3").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-3.jpg)" });
// });

// $(".navigation-link-4").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-4.jpg)" });
// });

// $(".navigation-link-5").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-5.jpg)" });
// });

// $(".navigation-link-6").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-6.jpg)" });
// });

// $(".navigation-link-7").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-7.jpg)" });
// });

// $(".navigation-link-8").hover(function() {
//   $(".project-preview").css({ "background-image": "url(img-8.jpg)" });
// });

// $(window).scroll(function() {
//   var scroll = $(window).scrollTop(),
//     dh = $(document).height(),
//     wh = $(window).height();
//   scrollPercent = (scroll / (dh - wh)) * 100;
//   $(".progressbar").css("height", scrollPercent + "%");
// });