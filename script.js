gsap.to("#page2 #slider",{
    
    transform: 'translateX(-130%)',
    duration : 1,    
    scrollTrigger:{
    trigger : "#page2",
    scroller : "body", 
    markers : true,
    scrub : true,
    start : 'top 0%',
    pin : true,
    end : 'top -100%'
    }
})  