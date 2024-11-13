var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x -200 +"px"
    blur.style.top = dets.y -200 +"px"
})

gsap.to("#nav",{
    backgroundColor :"#000", 
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

// to change bg more darker .

gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:"true",
        start:"top -25%",
        end:"top -70%",
        scrub:2
         
    }

})   

gsap. from("#page3 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:"true",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})