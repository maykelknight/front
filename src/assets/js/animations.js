var slideLeftItems = document.getElementsByClassName('slide-left');


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 100,
    speedAsDuration: true,
    easing: 'Linear'
});

// var slideLeft = TweenMax.from('.slide-left', 1, {
//     xPercent: -10,
//     opacity: 0,
//     ease: Back.easeOut
// });

var slideRight = TweenMax.from('.slide-right', 1, {
    xPercent: 10,
    opacity: 0,
    ease: Back.easeOut
});

var slideTop = TweenMax.from('.title-icon', 2, {
    yPercent: -150,
    opacity: 0,
    ease: Back.easeOut
});

var controller = new ScrollMagic.Controller();

// var scene = new ScrollMagic.Scene({
//     triggerElement: '.slide-left',
//     triggerHook: .9
// }).setTween(slideLeft)
//     .reverse(false)
//     .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.slide-right',
    triggerHook: .9
}).setTween(slideRight)
    .reverse(false)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: '.title-icon',
    triggerHook: .9
}).setTween(slideTop)
    .reverse(false)
    .addTo(controller);


console.log("Asd", slideLeftItems)
Array.prototype.forEach.call(slideLeftItems, function (elem, index, array) {

    console.log('as', elem)
    controller = new ScrollMagic.Controller();

    var tween = TweenMax.from(elem, 0.5,
        {xPercent: -10,
            opacity: 0,
            ease: Back.easeOut}
    );

    new ScrollMagic.Scene({
        duration: 200,
        triggerElement: elem,
        triggerHook: "onCenter",
    })
        .setTween(tween)
        .addTo(controller)
        .addIndicators();
});
