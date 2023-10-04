let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
        repeat: Infinity,
        yoyo: true,
    },
});

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo(
        '#Robot',
        {
            y: 2.5,
        },
        {
            y: -2.5,
        }
    )
    .to(
        '#Shadow',
        {
            scale: 0.75,
        },
        '-=.75'
    );

    gsap.to('#Robot', {
        rotation: 10, // Begin met een lichte rotatie naar rechts
        y: 20, // Beweeg de robot naar beneden
        duration: 1,
        yoyo: true, // Laat de animatie heen en weer gaan
        repeat: -1, // Herhaal de animatie continu
        ease: "power1.inOut", // Easing-type (kan worden aangepast)
        stagger: 0.2,
        onComplete: function () {
          
        },
      });