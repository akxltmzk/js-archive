let project_preview = document.querySelector('.project-preview')
let navigation_item_all = document.querySelectorAll('.navigation-item')
let progressbar = document.querySelectorAll('.progressbar')
let navigation_link_1 = document.querySelector('.navigation-link-1')
let navigation_link_2 = document.querySelector('.navigation-link-2')
let navigation_link_3 = document.querySelector('.navigation-link-3')
let navigation_link_4 = document.querySelector('.navigation-link-4')
let navigation_link_5 = document.querySelector('.navigation-link-5')
let navigation_link_6 = document.querySelector('.navigation-link-6')
let navigation_link_7 = document.querySelector('.navigation-link-7')
let navigation_link_8 = document.querySelector('.navigation-link-8')

document.addEventListener('DOMContentLoaded', function () {

  let tl = new TimelineLite()

  TweenMax.set(".project-preview", { width: 0 })

  navigation_item_all.forEach(element => {

    element.addEventListener('mouseover',function(e){
      tl = new TimelineLite()
      tl.to(project_preview, 1, {
        width: "600px",
        ease: Expo.easeInOut
      })
    })

    element.addEventListener('mouseout',function(e){
      tl = new TimelineLite();
      tl.to(project_preview, 0.5, {
        width: 0,
        ease: Expo.easeInOut
      })
    })
  }, false)

}, false)

navigation_link_1.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-1.jpg)'
})

navigation_link_2.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-2.jpg)'
})

navigation_link_3.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-3.jpg)'
})

navigation_link_4.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-4.jpg)'
})

navigation_link_5.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-5.jpg)'
})

navigation_link_6.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-6.jpg)'
})

navigation_link_7.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-7.jpg)'
})

navigation_link_8.addEventListener('mouseover',function(){
  project_preview.style.backgroundImage = 'url(../images/hoverlist/img-8.jpg)'
})


window.addEventListener('scroll',function(){
  console.log(235);
  let body = document.body
  let html = document.documentElement
  let dh = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
  // let scroll =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  // let dh = document.height
  // let wh = window.height
  // let scrollPercent = (scroll / (dh - wh)) * 100
  // progressbar.style.height = scrollPercent +'%'
})

// $(window).scroll(function() {
//   var scroll = $(window).scrollTop(),
//     dh = $(document).height(),
//     wh = $(window).height();
//   scrollPercent = (scroll / (dh - wh)) * 100;
//   $(".progressbar").css("height", scrollPercent + "%");
// });
