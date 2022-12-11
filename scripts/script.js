/* ----------------------------- INNIT FUNCTION ----------------------------- */

function innit() {
    callAPI()
    introAnimation.play()
    
}
function callAPI() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=qatar&appid=a98ea5a721efeed5149551b68c67185d")
        .then(response => response.json())
        .then(data => {
            displayData(data);
            });
    }
    // Display the data on the page
    function displayData(data) {
        // Create a <div> element to hold the data
        let temperature = data["main"]["temp"];
        let humidity = data["main"]["humidity"];
        let wind_speed = data["wind"]["speed"];
        
        let div = document.getElementById("Weather");
        // Set the innerHTML of the <div> to the data
        div.innerHTML =temperature.toString()+"K<br>"+humidity.toString()+"% humidity<br>"+wind_speed.toString()+"wind m/s<br>";
    }
/* ----------------------------- INTRO ANIMATION ---------------------------- */

let introAnimation = gsap.timeline({paused: true, delay: 1})
introAnimation.fromTo('header', {y: -70}, {duration: 1, ease: 'Power4.out', y: 0})
introAnimation.fromTo('.card', {opacity: 0, y: -25}, {duration: 2, ease: 'elastic', stagger: 0.12, opacity: 1, y: 0}, '<0.3')

gsap.utils.toArray('.card-content-container').forEach(e => {
    let items = e.querySelectorAll('.card-content')
    introAnimation.fromTo(items, {opacity: 0, y: -0, scale: 0.5}, {delay: 0.12, duration: 2, ease: 'elastic(0.5, 0.3)', stagger: 0.2, opacity: 1, y: 0, scale: 1}, '<0')
})

/* ---------------------------- HOVER ANIMATIONS ---------------------------- */