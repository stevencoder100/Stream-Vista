const api = "api_key=0dd1278d2226fdf9d27eb2a0b62222a6";

/* baseurl */
const base_url = "https://api.themoviedb.org/3";

const bannerurl = "https://image.tmdb.org/t/p/original"

const img_url = "https://image.tmdb.org/t/p/w500";

const input = document.getElementById("search-bar");

input.addEventListener('change' || 'beforeunreload', () => {

    const request = {
        movie: `https://api.themoviedb.org/3/search/movie?api_key=0dd1278d2226fdf9d27eb2a0b62222a6&query=${input.value}&include_adult=true&language=en-US&page=1`,
        tv: `https://api.themoviedb.org/3/search/tv?api_key=0dd1278d2226fdf9d27eb2a0b62222a6&query=${input.value}&include_adult=true&language=en-US&page=1`,
    };

    fetch(request.movie)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            const movieResult = document.getElementById("movie-result");

            movieResult.innerHTML = '';

            data.results.forEach((movie) => {
                if(movie.poster_path != null)
                {
                    const result_box = document.createElement("img");
                    result_box.className = "result-box";
                    result_box.src = img_url + movie.poster_path;
                    movieResult.appendChild(result_box);

                    result_box.addEventListener('click', () => {
                        localStorage.setItem('id', movie.id);
        
                        window.location.href = "movie_detail.html";
                    });
                }
            })
        })


        fetch(request.tv)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const tvResult = document.getElementById("tv-result");

            tvResult.innerHTML = '';

            data.results.forEach((tv) => {
                if(tv.poster_path != null)
                {
                    const result_box = document.createElement("img");
                    result_box.className = "result-box";
                    result_box.src = img_url + tv.poster_path;
                    tvResult.appendChild(result_box);

                    result_box.addEventListener('click', () => {
                        localStorage.setItem('id', movie.id);
        
                        window.location.href = "movie_detail.html";
                    });
                }
            })
        })
})