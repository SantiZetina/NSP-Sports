/* ---------------------------- RANDOM FUNCTIONS ---------------------------- */

function kelvinToFerinheight(temp) {
    return Math.round(1.8 * (temp - 273) + 32) 
}

let youtubeAPI = {}

/* ----------------------------- INNIT FUNCTION ----------------------------- */

async function innit() {
    fetchAPIs()
    loadHighlights('.highlights-content')
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

function introAnimation() { // simple intro animation
    let introAnimation = gsap.timeline()
    introAnimation.fromTo('header', {y: '-70px'}, {duration: 1, ease: 'Power4.out', y: '0'})
    introAnimation.fromTo('.card', {opacity: 0, y: '-25px'}, {duration: 2, ease: 'elastic', stagger: 0.12, opacity: 1, y: '0'}, '<0.3')
    
    gsap.utils.toArray('.card-content-container').forEach(e => {
        let items = e.querySelectorAll('.card-content')
        introAnimation.fromTo(items, {opacity: 0, scale: 0.5}, {delay: 0.12, duration: 2, ease: 'elastic(0.5, 0.3)', stagger: 0.2, opacity: 1, scale: 1}, '<0')
    })
}

/* ------------------------------ API FUNCTIONS ----------------------------- */

function fetchAPIs() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=qatar&appid=a98ea5a721efeed5149551b68c67185d") // home screen nav bar weather api
    .then(response => response.json())
    .then(data => {
        document.getElementById("Weather").innerHTML = `
            <p>TEMPERATURE</br>${kelvinToFerinheight(data["main"]["temp"])}° f</p>
            <div class="weather-api-gap"></div>
            <p>HUMIDITY</br>${data["main"]["humidity"]}%</p>
            <div class="weather-api-gap"></div>
            <p>WIND SPEED</br>${data["wind"]["speed"]}m/s</p>`
    })
    fetch("https://worldcupjson.net/matches") // home screen recent-games column
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const recentGamesContainer = document.getElementById('recent-games-container')
        data.forEach(e => {
            let gameDate = new Date(e.datetime)
            let recentGamesCardContent = document.createElement('div')
            recentGamesCardContent.classList.add('card-content')
            if (e.home_team.goals || e.home_team.goals === 0) {
                recentGamesCardContent.innerHTML = `
                    <div class="flag" data-country="${e.away_team.name}">
                        <img src="https://countryflagsapi.com/png/${e.away_team.name}">  
                    </div>
                    <div class="recent-games-information">
                        <p><b>${e.away_team.goals} - ${e.home_team.goals}</b></p>
                        <p style="opacity: 0.5">${gameDate.toDateString().slice(4)}</p>
                        <p></p>
                    </div>
                    <div class="flag" data-country="${e.home_team.name}">
                        <img src="https://countryflagsapi.com/png/${e.home_team.name}">
                    </div>`
                recentGamesContainer.prepend(recentGamesCardContent)
            } else { // if goals are not reported in the api then replace with coming soon text
                recentGamesCardContent.innerHTML = `
                    <div class="recent-games-information coming-soon">
                        <p>COMING SOON ON</p>
                        <p>${gameDate.toDateString().slice(4)}</p>
                    </div>`
                recentGamesContainer.prepend(recentGamesCardContent)
            }
        })
    })
    fetch("https://worldcupjson.net/teams") //home screen teams column
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let teamsContainer = document.getElementById('teams-container')
        data.groups.forEach(e => {
            let groupDivider = document.createElement('div') // add group divider
            groupDivider.classList.add('group-divider')
            groupDivider.innerHTML = `
                <div class="horizontal-line"></div>
                <p>GROUP - ${e.letter}</p>
                <div class="horizontal-line"></div>`
            teamsContainer.append(groupDivider)
            e.teams.forEach(e => {
                let teamsCardContent = document.createElement('div') // add team information
                teamsCardContent.classList.add('card-content')
                teamsCardContent.innerHTML = `
                    <div class="flag" data-country="${e.name}">
                        <img src="https://countryflagsapi.com/png/${e.name}"></img>
                    </div>
                    <div class="team-information">
                        <div class="team-information-left">
                            <p class="property">WINS:</p><p class="value"><b>${e.wins}</b></p>
                            <p class="property">LOSSES:</p><p class="value"><b>${e.losses}</b></p>
                            <p class="property">DRAWS:</p><p class="value"><b>${e.draws}</b></p>
                        </div>
                        <div class="team-information-right">
                            <p class="property">GOALS:</p><p class="value"><b>${e.goals_for}</b></p>
                            <p class="property">GOALS AGAINST:</p><p class="value"><b>${e.goals_against}</b></p>
                            <p class="property">GAMES PLAYED:</p><p class="value"><b>${e.games_played}</b></p>
                        </div>
                    </div>`
                teamsContainer.append(teamsCardContent)
            })
        })
    })
}

function youtubeAPIFetch() { // has to be a separate function so the load more button works
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10${pageToken}&q=world%20cup%20highlights&key=AIzaSyACUZ9__Tn71GlPPmLS-DWKbu1bpOit6Dk`)
    .then((res) => res.json())
    .then(data => {
        console.log(data)
        youtubeAPI = data
    })
}

/* ----------------------------- LOAD HIGHLIGHTS ---------------------------- */

let highlightsIndex = 0
let pageToken = ''
async function loadHighlights(container) {
    youtubeAPIFetch()
    let Highlightscontainer = document.querySelector('.load-more-button-container')
    Highlightscontainer.classList.add('loading')
    await async(1)
    Highlightscontainer.classList.remove('loading')
    for (let i = 0; i < 10; i++) {
        const containerEl = document.querySelector(container)
        const contentContainer = document.createElement('a')
        contentContainer.setAttribute('href', `https://www.youtube.com/watch?v=${youtubeAPI.items[i].id.videoId}`)
        let publishDate = new Date(youtubeAPI.items[i].snippet.publishTime)
        contentContainer.innerHTML = `
            <div class="card-content">
                <img src="${youtubeAPI.items[i].snippet.thumbnails.medium.url}" alt="highlight-video-thumbnail">
                <div class="highlight-video-information">
                    <h3 class="truncated">${youtubeAPI.items[i].snippet.title}</h3>
                    <p class="truncated">${publishDate.toDateString()}</p>
                    <p class="truncated">${youtubeAPI.items[i].snippet.description}</p>
                </div>
            </div>`
        containerEl.append(contentContainer)
    }
    highlightsIndex >= 10 && gsap.set('.card-content', {opacity: 1, scale: 1}) // makes sure intro animation doesnt interfear with loading more
    highlightsIndex += 10
    if (highlightsIndex > 10) {
        pageToken = `&pageToken=${youtubeAPI.nextPageToken}`
    }
}

innit()