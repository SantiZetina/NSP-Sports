const API_KEY= 'AIzaSyDYIC2U6sULHbZA28b-pUxhpGh7tlaeuys';
const   VIDEO_ID = 'jcgZf2PfIgw';


const loadVideo = (iframe) => {
    const cid = "UCooTLkxcpnTNx6vfOovfBFA";
    const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
    const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

    fetch(reqURL)
        .then(response => response.json())
        .then(result => {
          console.log(result)
            const videoNumber = iframe.getAttribute('vnum')
            const link = result.items[videoNumber].link;
            const id = link.substr(link.indexOf("=") + 1);
            iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
        })
        .catch(error => console.log('error', error));
}

const iframes = document.getElementsByClassName('latestVideoEmbed');
for (let i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);
}



fetch(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=snippet`)
    .then(response => response.json())
    .then(data => {
        
        const title = data.items[0].snippet.title;
        document.getElementById('videoTitle').innerHTML = title;
        document.getElementById('video').src = `https://www.youtube.com/embed/${VIDEO_ID}`;
        

        const description = data.items[0].snippet.description;
        document.getElementById('description').innerHTML = description;
    });


    