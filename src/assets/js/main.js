import '../scss/main.scss'

var navLinks = document.querySelectorAll(".nav-btn a");
var sections = document.querySelectorAll("section");
var navWrapper = document.getElementsByClassName("nav-wrapper")[0];
var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

window.onload = function() {
    // addClickEventsToNavbarLinks();
    hideNavigationMenuOnLinkClick();
    showNavigationMenuOnHamburgerClicked();
    hideLoader();
};

window.addEventListener("scroll", throttle(function () {
    setNavbarClass();
    markActiveNavbarLink();
}, 100));

function isOnMobile() {
    return screenWidth <= 768;
}

function throttle (callback, limit) {
    var wait = false;                  // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call();           // Execute users function
            wait = true;               // Prevent future invocations
            setTimeout(function () {   // After a period of time
                wait = false;          // And allow future invocations
            }, limit);
        }
    }
}

function setNavbarClass () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navWrapper.classList.add('nav-scrolled');
    } else {
        navWrapper.classList.remove('nav-scrolled');
    }
}

function markActiveNavbarLink (section) {
    let fromTop = window.scrollY;
    navLinks.forEach(function (link) {
        let section = document.querySelector(link.hash);
        if ((section.offsetTop - 100 <= fromTop) && (section.offsetTop - 100 + section.offsetHeight > fromTop) &&  fromTop > 0) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
}

function hideNavigationMenuOnLinkClick () {
    document.querySelectorAll('.nav-btn > a')
        .forEach(function (item) {
            item.addEventListener('click', function () {
                document.querySelector(".nav-btns-wrapper").classList.toggle('active');
                document.querySelector(".hamburger-toggle").classList.toggle('active');
            })
        });
}

function showNavigationMenuOnHamburgerClicked () {
    document.querySelector('.hamburger-toggle').addEventListener('click', function () {
        var btnsWrapper = document.querySelector(".nav-btns-wrapper");
        document.querySelector(".hamburger-toggle").classList.toggle('active');
        btnsWrapper.classList.toggle('active');

        if(!btnsWrapper.classList.contains('active')) {
            var cpy = btnsWrapper.cloneNode(true);
            btnsWrapper.parentNode.replaceChild(cpy, btnsWrapper);
            hideNavigationMenuOnLinkClick();
        }
    })
}

function hideLoader() {
    document.querySelector('.preloader-wrapper').style.display = 'none';
}
