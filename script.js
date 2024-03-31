gsap.to(".nav-bar",{
    backgroundColor:"#141414",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        // trigger:".header",
        // scroller:"body",
        
        // start:"top -10%",
        // end:"top -11%",
        // scrub:1,
        trigger: "#page2", // Change this to the appropriate trigger element for the second section
      scroller: "body",
      start: "top center", // Adjust start and end positions as needed
      end: "bottom center",
      scrub: true
    }
})

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const myText=new SplitType('#my-text');
gsap.to('.char',{
    y:0,
    stagger:0.05,
    delay:0.2,
    duration:0.1
})



// Assuming that the lenis and SplitType sections are functioning correctly,
// I'll focus on correcting the GSAP scrollTrigger part of the code.

// gsap.to(".nav-bar", {
//   backgroundColor:"#141414",
//   height:"90px",
//   duration:0.5,
//   scrollTrigger: {
//       trigger: ".section-two", // Change this to the appropriate trigger element for the second section
//       scroller: "body",
//       start: "top center", // Adjust start and end positions as needed
//       end: "bottom center",
//       scrub: true
//   }
// });

// const lenis = new Lenis();

// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// const myText = new SplitType('#my-text');

// gsap.to('.char', {
//   y: 0,
//   stagger: 0.05,
//   delay: 0.2,
//   duration: 0.1
// });





// js - carouel***********


document.addEventListener("DOMContentLoaded", function() {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelector('.carousel-slide');
  const slideWidth = document.querySelector('.carousel-content').offsetWidth;
  const numSlides = slides.children.length;
  const carouselWidth = slideWidth * numSlides;

  let counter = 0;

  function slide() {
    if (counter+slideWidth >= carouselWidth) {
      counter = 0;
    }
    carouselWrapper.style.transform = `translateX(${-counter}px)`;
    counter+=slideWidth+40;
  }

  setInterval(slide, 2500); // Adjust the interval as needed (2000ms = 2 seconds)
});
