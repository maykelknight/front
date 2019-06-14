import '../scss/main.scss'
window.onload = function() {
    document.querySelector('.preloader-wrapper').style.display = 'none';
};

var slideLeftItems = document.getElementsByClassName('slide-left');
var slideRightItems = document.getElementsByClassName('slide-right');
var titleIcon = document.getElementsByClassName('title-icon');
var skill = document.getElementsByClassName('skill');

var controller = new ScrollMagic.Controller();

Array.prototype.forEach.call(slideLeftItems, function (elem) {
    var tl = new TimelineMax();
    tl.fromTo(elem, 0.8,
        {x: -100, opacity: 0},
        {x: 0, opacity: 1, ease: Power2.EaseInOut},
        // {x: 0, opacity: 1, ease: Power2.EaseInOut}
    );
    new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.9,
        reverse: false
    })
        .setTween(tl)
        .addTo(controller)
});

Array.prototype.forEach.call(slideRightItems, function (elem) {
    var tl = new TimelineMax();
    tl.fromTo(elem, 0.8,
        {x: 100, opacity: 0},
        {x: 0, opacity: 1, ease: Power2.EaseInOut},
    );
    new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 1,
        reverse: false
    })
        .setTween(tl)
        .addTo(controller)
});

Array.prototype.forEach.call(titleIcon, function (elem) {
    var tl = new TimelineMax();
    tl.fromTo(elem, 1,
        {y: -100, opacity: 1, scale: 0},
        {y: 0, opacity: 1, scale: 1, ease: Power2.EaseInOut},
    );
    new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 1,
        reverse: false
    })
        .setTween(tl)
        .addTo(controller)
});

Array.prototype.forEach.call(skill, function (elem) {

    console.log(elem.childNodes)

    var picture = null;
    var description = null;

    for (var i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].className === "skill__picture") {
            picture = elem.childNodes[i];
            break;
        }
    }

    for (var i = 0; i < elem.childNodes.length; i++) {
        if (elem.childNodes[i].className === "skill__description") {
            description = elem.childNodes[i];
            break;
        }
    }

    var tl = new TimelineMax();
    tl.from(picture, 0.5,
        {opacity: 0},

    );

    tl.from(description, 0.5,
        {y: -100, opacity: 0},

    );

    new ScrollMagic.Scene({
        triggerElement: elem,
        triggerHook: 0.8,
        reverse: false
    })
        .setTween(tl)
        .addTo(controller)
});


var t2 = new TimelineMax();

t2.from('.background-box', 1, {x: -900});
// t2.from('.go-back-wrapper', 0.5 , {y: -200});

t2.from('.description__heading', 0.5 , {y: -40, opacity: 0},"-=0.8");
t2.from('.description__details', 0.5 , {y: 40, opacity: 0}, "-=0.8");

t2.from('.description__link', 0.5 , {opacity: 0}, "-=1");

t2.from('.card', 0.5 , {x: -50, opacity: 0}, "-=0.5");


// var slideLeft = TweenMax.from('.go-back-wrapper', 1, {
//     xPercent: -10,
//     opacity: 0,
//     ease: Back.easeOut
// });
//
// var card = TweenMax.from('.card', 1, {
//     yPercent: -50,
//     opacity: 0,
//     ease: Back.easeOut
// });

// var scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 100,
//     speedAsDuration: true,
//     easing: 'Linear'
// });

// var slideRight = TweenMax.from('.slide-right', 1, {
//     xPercent: 10,
//     opacity: 0,
//     ease: Back.easeOut
// });

// var slideTop = new TimelineMax({paused: true});
//
// var slideTop = TweenMax.from('.title-icon', 5, {
//     yPercent: -150,
//     opacity: 0,
//     ease: Back.easeOut
// });


// var scene = new ScrollMagic.Scene({
//     triggerElement: '.slide-left',
//     triggerHook: .9
// }).setTween(slideLeft)
//     .reverse(false)
//     .addTo(controller);

// var scene2 = new ScrollMagic.Scene({
//     triggerElement: '.slide-right',
//     triggerHook: .9
// }).setTween(slideRight)
//     .reverse(false)
//     .addTo(controller);
//
// var scene2 = new ScrollMagic.Scene({
//     triggerElement: '.title-icon',
//     triggerHook: .9
// }).setTween(slideTop)
//
//     .addTo(controller);

