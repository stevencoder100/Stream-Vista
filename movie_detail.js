/* this is used to go on top when page is refresh */
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  }


const id = localStorage.getItem('id');
const overview = localStorage.getItem('name');

// api from TMDB
const api = "api_key=0dd1278d2226fdf9d27eb2a0b62222a6";
/* baseurl */
const base_url = "https://api.themoviedb.org/3";

const bannerurl = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w500";

const bannerapi = `https://api.themoviedb.org/3/movie/${id}/images?${api}&adult='false`;
const actorsapi = `https://api.themoviedb.org/3/movie/${id}/credits?${api}&language=en-US`;
const similarapi = `https://api.themoviedb.org/3/movie/${id}/similar?${api}&language=en-US&page=1`;


function sort_description(str, n)
{
    return str?.length <= n ? str : str.substr(0, n - 1) + "...";
}

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

fetch(bannerapi)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const logo = data.logos;
        const images = data.backdrops;

        //  console.log(images);
        let banner = document.getElementById("banner");
        let banner_title = document.getElementById("banner-title");
        let banner_description = document.getElementById("banner-description");
        if (images.length > 1) {
            banner.style.backgroundImage = "url(" + bannerurl + images[0].file_path + ")";
        } else {
            banner.style.backgroundImage = "url(" + bannerurl + data.posters[0].file_path + ")";
        }
        const pic = document.createElement("img");
        pic.src = img_url + logo[0].file_path;
        pic.className = "logo";
        banner_title.appendChild(pic);
        banner_description.innerText = sort_description(overview, 320);
        
        const play = document.getElementById("play");
		play.addEventListener("click", () => {
            console.log("button clicked");
			localStorage.setItem('id', id);
			window.location.href = "video.html";
		});
    });

fetch(actorsapi)
	.then((res) => res.json())

	.then((data) => {
		const main_div = document.getElementById("actors");
		const casters = data.cast;
		console.log(casters);
		casters.forEach((actor) => {
			if(actor.profile_path != null)
			{
				const box = document.createElement("div")
				box.className = "act";
				const pic = document.createElement("img");
				pic.className = "pic";
				pic.src = img_url + actor.profile_path;
				const name = document.createElement("h2");
				name.className = "actor-name";
				name.innerText = actor.original_name;

				box.appendChild(pic);
				box.appendChild(name);
				main_div.appendChild(box);
			}
		})
	})


fetch(similarapi)
	.then((res) => res.json())

	.then((data) => {
		const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("similarmovie");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const poster = document.createElement("img");
                poster.className = "poster";  // Use class instead of id
                poster.src = img_url + movie.poster_path;
                row.appendChild(poster);
        
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);

                    window.location.href = "movie_detail.html";
                });
            }
        });
	})
