/* ----------------------------- INNIT FUNCTION ----------------------------- */

function innit() {
    introAnimation.play()
}

/* ----------------------------- INTRO ANIMATION ---------------------------- */

let introAnimation = gsap.timeline({paused: true, delay: 1})
introAnimation.fromTo('header', {y: -70}, {duration: 1, ease: 'ease.inOut', y: 0})
introAnimation.fromTo('.card', {opacity: 0, y: -25}, {duration: 2, ease: 'elastic', stagger: 0.12, opacity: 1, y: 0}, '<0.3')

/* ---------------------------- HOVER ANIMATIONS ---------------------------- */