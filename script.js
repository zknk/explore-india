gsap.to(".nav-bar",{
    backgroundColor:"#141414",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:".header",
        scroller:"body",
        
        start:"top -10%",
        end:"top -11%",
        scrub:1,
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






