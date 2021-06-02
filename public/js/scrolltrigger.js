gsap.registerPlugin(ScrollTrigger)

gsap.to('.square',{
   x:700,
   duration: 3,
   scrollTrigger: ".square2"
})

gsap.to('.square3',{
  x:700,
  duration: 3,
  scrollTrigger:{
    trigger: '.square3',
    // start: 'top center',
    start: 'top 30%',
    // markers:{
    //   startColor: 'purple',
    //   endColor:'fuchsia',
    //   fontSize: '4rem',
    //   indent: 200
    // }
    // markers: true,

  }
})


gsap.to('.square4',{
  duration: 3,
  scrollTrigger: {
    trigger: '.square4',
    start: 'top 30%',
    // end: 'center 20%',
    end: ()=>`+=${document.querySelector('.square').offsetHeight}`,
    // markers: true,
    toggleClass: 'red'
  }
})