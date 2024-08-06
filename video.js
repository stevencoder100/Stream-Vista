const id = localStorage.getItem('id');

const api = "api_key=0dd1278d2226fdf9d27eb2a0b62222a6";

const base_url = "https://api.themoviedb.org/3";

const bannerurl = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w500";


// console.log('key:', key);


// Assuming you have the following code to fetch and set the video URL
const videoapi = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0dd1278d2226fdf9d27eb2a0b62222a6&language=en-US`;

fetch(videoapi)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        // Check if there are any videos in the results array
        if (data.results.length > 0) {
            
            const youtubeVideoUrl = `https://www.youtube.com/embed/${data.results[0].key}?autoplay=1&mute=0&controls=0`;

            // Set the src attribute of the video iframe
            document.getElementById("video").src = youtubeVideoUrl;
        } else {
            console.error('No video found for the specified movie ID.');
        }
    })
    .catch((error) => {
        console.error('Error fetching video API:', error);
    });
