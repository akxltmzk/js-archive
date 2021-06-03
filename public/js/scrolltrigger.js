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


gsap.to('.square5',{
  x: 700,
  duration: 3,
  scrollTrigger: {
    trigger: '.square5',
    start: 'top 60%',
    end: 'top 40%',
    // onEnter, onLeave, onEnterBack, onLeaveBack
    toggleActions: 'restart pause resume complete',

    // markers:{
    //   startColor: 'purple',
    //   endColor:'fuchsia',
    //   fontSize: '3rem',
    // }
  }
})

gsap.to('.square6',{
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: '.square6',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 4,
    toggleActions: 'restart none none none',

    // markers:{
    //   startColor: 'purple',
    //   endColor:'fuchsia',
    //   fontSize: '3rem',
    // }
  }
})


gsap.to('.square7',{
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: '.square8',
    start: 'top 80%',
    end: 'top 30%',
    scrub: 4,
    pin: '.square7',
    pinSpacing: false,
    toggleActions: 'restart none none none',

    // markers:{
    //   startColor: 'purple',
    //   endColor:'fuchsia',
    //   fontSize: '3rem',
    // }
  }
})


// gsap.to('.box',{x:500, duration: 5})
// gsap.to('.box',{y:500, duration: 3, delay: 2})
// gsap.to('.box',{x:0, duration: 2, delay: 5})

const tl= gsap.timeline({
  scrollTrigger: {
    trigger: '.box',
    markers: true,
    start: 'top 80%',
    end : 'top 30%',
    scrub: 1
  }
})
tl
  .to('.box',{x:500, duration: 5})
  .to('.box',{y:200, duration: 3})
  .to('.box',{x:0, duration: 2})


ScrollTrigger.create({
  trigger:'.box2',
  start: 'top 80%',
  end: 'top 50%',
  markers: true,
  toggleClass: 'box2-red'
})