/* ----------------------------- INNIT FUNCTION ----------------------------- */

async function innit() {
    loadHighlights()
    await async(1)
    introAnimation()
}

function async(time) {
    return new Promise((res) => {
        setTimeout(() => {
            res()
        }, time * 1000);
    })
}

/* ----------------------------- INTRO ANIMATION ---------------------------- */

function introAnimation() {
let introAnimation = gsap.timeline()
introAnimation.fromTo('header', {y: '-70px'}, {duration: 1, ease: 'Power4.out', y: '0'})
introAnimation.fromTo('.card', {opacity: 0, y: '-25px'}, {duration: 2, ease: 'elastic', stagger: 0.12, opacity: 1, y: '0'}, '<0.3')

gsap.utils.toArray('.card-content-container').forEach(e => {
    let items = e.querySelectorAll('.card-content')
    introAnimation.fromTo(items, {opacity: 0, scale: 0.5}, {delay: 0.12, duration: 2, ease: 'elastic(0.5, 0.3)', stagger: 0.2, opacity: 1, scale: 1}, '<0')
})
}
/* ---------------------------- HOVER ANIMATIONS ---------------------------- */

/* ----------------------------- LOAD HIGHLIGHTS ---------------------------- */

let index = 0
function loadHighlights() {
    for (let i = 0; i < 10; i++) {
        const highlightsContainer = document.querySelector('.highlights-content')
        const contentContainer = document.createElement('div')
        contentContainer.classList.add('card-content')
        contentContainer.innerHTML = `<img src="https://picsum.photos/200/300?random=${i + index}" alt="highlight-video-thumbnail" class="highlight-thumbnail">`
        highlightsContainer.append(contentContainer)
    }
    index >= 10 && gsap.set('.card-content', {opacity: 1, scale: 1})
    index += 10
}

innit()