/* ---------------------------- RANDOM FUNCTIONS ---------------------------- */

function truncate(str, n){ // got this function from https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
    return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
}

function kelvinToFerinheight(temp) {
    return Math.round(1.8 * (temp - 273) + 32) 
}

let youtubeAPI = {
    "kind": "youtube#searchListResponse",
    "etag": "gXMiZ7DIq1w-AeLk_PcG2VzN3xE",
    "nextPageToken": "CAoQAA",
    "regionCode": "US",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 10
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "jJYtc5wTJulIknysCIw1EepFW4Q",
            "id": {
                "kind": "youtube#video",
                "videoId": "yO-_MsCBMcU"
            },
            "snippet": {
                "publishedAt": "2022-12-01T17:13:55Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Canada vs. Morocco Highlights | 2022 FIFA World Cup",
                "description": "Canada and Morocco faced off in their third matches of the 2022 FIFA World Cup. Within minutes, Morocco took a 1-0 lead after ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/yO-_MsCBMcU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/yO-_MsCBMcU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/yO-_MsCBMcU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-01T17:13:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "QJ66MRon47VoZ6vUGTbsq1BfS2A",
            "id": {
                "kind": "youtube#video",
                "videoId": "UquOBrpCKhE"
            },
            "snippet": {
                "publishedAt": "2022-11-30T17:28:10Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Tunisia vs. France Highlights | 2022 FIFA World Cup",
                "description": "Tunisia took on France in the final group stage game for both teams in the 2022 FIFA World Cup. France, who has already ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/UquOBrpCKhE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/UquOBrpCKhE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/UquOBrpCKhE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-30T17:28:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cLCx_9aG-SWtY5Qamf-YZFhd_GM",
            "id": {
                "kind": "youtube#video",
                "videoId": "9mCren8Dhjw"
            },
            "snippet": {
                "publishedAt": "2022-11-30T21:12:54Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Poland vs. Argentina Highlight | 2022 FIFA World Cup",
                "description": "Poland and Argentina squared off in the group stage of the 2022 FIFA World Cup. The first half belonged to Wojciech Szczęsny ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9mCren8Dhjw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9mCren8Dhjw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9mCren8Dhjw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-30T21:12:54Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "oKYPWkpKEg4J7dNtGrZeqUUjtAI",
            "id": {
                "kind": "youtube#video",
                "videoId": "TNl7ZcnDB0Q"
            },
            "snippet": {
                "publishedAt": "2022-11-29T21:27:06Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Iran vs. United States Highlights | 2022 FIFA World Cup",
                "description": "The United States and Iran faced off in a must-win situation for the US. The US came out aggressive and got off multiple shots on ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/TNl7ZcnDB0Q/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/TNl7ZcnDB0Q/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/TNl7ZcnDB0Q/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-29T21:27:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "G9ovoxxhX8Pl4n9GUrjJjrDepOE",
            "id": {
                "kind": "youtube#video",
                "videoId": "ufIbJCJUoJU"
            },
            "snippet": {
                "publishedAt": "2022-11-29T21:13:53Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Wales vs. England Highlights | 2022 FIFA World Cup",
                "description": "Wales and England faced off in their third matches of the 2022 FIFA World Cup. In the first half both teams struggled to score.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ufIbJCJUoJU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ufIbJCJUoJU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ufIbJCJUoJU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-29T21:13:53Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "enAk3cBpW4fwAXheQ_avteqmUOQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "rCs5drZaO_g"
            },
            "snippet": {
                "publishedAt": "2022-11-29T17:14:31Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Ecuador vs. Senegal Highlights | 2022 FIFA World Cup",
                "description": "Ecuador and Senegal faced off in their third matches of the 2022 FIFA World Cup group stage. In the first half both teams struggled ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/rCs5drZaO_g/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/rCs5drZaO_g/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/rCs5drZaO_g/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-29T17:14:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "e_2lHcK_CNimzBVCiMB7YtMOTko",
            "id": {
                "kind": "youtube#video",
                "videoId": "EQg5KE8Ui0E"
            },
            "snippet": {
                "publishedAt": "2022-12-01T17:13:41Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Croatia vs. Belgium Highlights | 2022 FIFA World Cup",
                "description": "Croatia and Belgium squared off in the final group stage matchup at the 2022 FIFA World Cup. The first half was a slow one as ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EQg5KE8Ui0E/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EQg5KE8Ui0E/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EQg5KE8Ui0E/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-12-01T17:13:41Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Furlaal--5XZuih05yxRnqvB5xI",
            "id": {
                "kind": "youtube#video",
                "videoId": "hykVIIB7fF8"
            },
            "snippet": {
                "publishedAt": "2022-11-29T17:15:14Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Netherlands vs. Qatar Highlights | 2022 FIFA World Cup",
                "description": "Netherlands took on Qatar in both teams' final group stage matchup. Netherlands was in control early, getting numerous shots off ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hykVIIB7fF8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/hykVIIB7fF8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/hykVIIB7fF8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-29T17:15:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "IP3STiueaL9tISnPir9amlkkgpw",
            "id": {
                "kind": "youtube#video",
                "videoId": "iV1OVKEMlTk"
            },
            "snippet": {
                "publishedAt": "2022-11-28T21:21:19Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Portugal vs. Uruguay Highlights | 2022 FIFA World Cup",
                "description": "Portugal and Uruguay faced off in their second matches of the 2022 FIFA World Cup. In the first half both teams struggled to score.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/iV1OVKEMlTk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/iV1OVKEMlTk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/iV1OVKEMlTk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-28T21:21:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "E60i2ScXiS6vzjcVshFwJVYCTYY",
            "id": {
                "kind": "youtube#video",
                "videoId": "MMaR0dr3QqE"
            },
            "snippet": {
                "publishedAt": "2022-11-28T12:23:00Z",
                "channelId": "UCooTLkxcpnTNx6vfOovfBFA",
                "title": "Cameroon vs. Serbia Highlights | 2022 FIFA World Cup",
                "description": "Cameroon and Serbia faced off in the group stage of the 2022 FIFA World Cup. Cameroon got the scoring started in the 29th ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MMaR0dr3QqE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MMaR0dr3QqE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MMaR0dr3QqE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "FOX Soccer",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-28T12:23:00Z"
            }
        }
    ]
}

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

// function callAPI() {
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=qatar&appid=a98ea5a721efeed5149551b68c67185d")
//         .then(response => response.json())
//         .then(data => {
//             displayData(data)
//             // document.getElementById("Weather").innerHTML = `${data["main"]["temp"]}K<br>${data["main"]["humidity"]}% humidity<br>${data["wind"]["speed"]}wind m/s<br>`
//         })
//     }
//     // Display the data on the page
//     function displayData(data) {
//         // Create a <div> element to hold the data
//         let temperature = data["main"]["temp"]
//         let humidity = data["main"]["humidity"]
//         let wind_speed = data["wind"]["speed"]
        
//         let div = document.getElementById("Weather")

//         // Set the innerHTML of the <div> to the data
//         div.innerHTML =temperature.toString()+"K<br>"+humidity.toString()+"% humidity<br>"+wind_speed.toString()+"wind m/s<br>"
//     }


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

/* ------------------------------ API FUNCTIONS ----------------------------- */

function fetchAPIs() {
    fetchYoutubeAPI()
}

function fetchYoutubeAPI() {
    // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10${pageToken}&q=world%20cup%20highlights&key=AIzaSyACUZ9__Tn71GlPPmLS-DWKbu1bpOit6Dk`)
    // .then((res) => res.json())
    // .then(data => {
    //     console.log(data)
    //     youtubeAPI = data
    // })
    fetch("http://api.openweathermap.org/data/2.5/weather?q=qatar&appid=a98ea5a721efeed5149551b68c67185d")
    .then(response => response.json())
    .then(data => {
        document.getElementById("Weather").innerHTML = `
            <p>TEMPERATURE</br>${kelvinToFerinheight(data["main"]["temp"])}° f</p>
            <div class="weather-api-gap"></div>
            <p>HUMIDITY</br>${data["main"]["humidity"]}%</p>
            <div class="weather-api-gap"></div>
            <p>WIND SPEED</br>${data["wind"]["speed"]}m/s</p>`
    })
    fetch("https://world-cup.codsfli.com/points.php")
    .then(response => response.json())
    .then(data => console.log(data))
}

/* ----------------------------- LOAD HIGHLIGHTS ---------------------------- */

let highlightsIndex = 0
let pageToken = ''
function loadHighlights(container) {
    for (let i = 0; i < 10; i++) {
        const containerEl = document.querySelector(container)
        const contentContainer = document.createElement('a')
        contentContainer.setAttribute('href', `https://www.youtube.com/watch?v=${youtubeAPI['items'][i]['id']['videoId']}`)
        contentContainer.innerHTML = `
            <div class="card-content">
                <img src="${youtubeAPI['items'][i]['snippet']['thumbnails']['medium']['url']}" alt="highlight-video-thumbnail">
                <div class="highlight-video-information">
                    <h3>${truncate(youtubeAPI['items'][i]['snippet']['title'], 40)}</h3>
                    <p>${truncate(youtubeAPI['items'][i]['snippet']['publishTime'], 40)}</p>
                    <p>${truncate(youtubeAPI['items'][i]['snippet']['description'], 40)}</p>
                </div>
            </div>`
        containerEl.append(contentContainer)
    }
    highlightsIndex >= 10 && gsap.set('.card-content', {opacity: 1, scale: 1}) // makes sure intro animation doesnt interfear with loading more
    highlightsIndex += 10
    if (highlightsIndex < 0) {
        pageToken = `&pageToken="${youtubeAPI['items']['nextPageToken']}"`
    }
}

innit()