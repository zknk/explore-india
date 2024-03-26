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


