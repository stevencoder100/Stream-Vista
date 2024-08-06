const videocards = [...document.querySelectorAll('.video-card')];

videocards.forEach(item => {
    
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });

});

// api from TMDB
const api = "api_key=0dd1278d2226fdf9d27eb2a0b62222a6";

/* baseurl */
const base_url = "https://api.themoviedb.org/3";

const bannerurl = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w500";



/*All the api request for this project */
const request = {
    top_rated : `${base_url}/movie/now_playing?${api}&language=en-US&page=1&region=IN&with_original_language=hi`,
    newRealease : `${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.lte=2024-04-20&sort_by=primary_release_date.desc&with_original_language=hi`,
    trendingmovies: `${base_url}/trending/movie/week?${api}&language=en-US&with_original_language=hi`,
    popularmovies:  `${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=1&region=IN&release_date.gte=2010-01-01&release_date.lte=2024-04-20&sort_by=popularity.desc&with_original_language=hi`,
    topEarningmovie: `${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=1&region=IN&release_date.gte=2010-01-01&release_date.lte=2024-04-20&sort_by=revenue.desc&with_original_language=hi`,
    popular_tvshows: `${base_url}/discover/tv?${api}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=hi`,
    actionmovies: `${base_url}/discover/movie?${api}&with_genres=28&with_original_language=hi`,
    dramatvshows: `${base_url}/discover/tv?${api}&with_genres=18&with_original_language=hi`,
    popular_kids_tvshows: `${base_url}/discover/tv?${api}&with_genres=16&sort_by=popularity.desc&with_original_language=hi`,
    upcomingmovies : `${base_url}/discover/movie?${api}&region=IN&release_date.gte=2024-04-01&with_original_language=hi`,
    dramamovies : `${base_url}/discover/movie?${api}&with_genres=18&sort_by=popularity.desc&with_original_language=hi`,
    realitytvShows : `${base_url}/discover/tv?${api}&with_genres=10764&with_original_language=hi`,
    war_movies : `${base_url}/discover/movie?${api}&with_genres=10752`,
    sciencetvshows : `${base_url}/discover/tv?${api}&include_adult=false&with_genres=10765&page=1&sort_by=popularity.desc`,
    adventure: `${base_url}/discover/movie?${api}&with_genres=12`,
    triller : `${base_url}/discover/movie?${api}&with_genres=53`,
    horrer: `${base_url}/discover/movie?${api}&with_genres=27`,
    news: `${base_url}/discover/tv?${api}&include_adult=false&with_genres=99&with_original_language=hi`,
    sciencemovies: `${base_url}/discover/movie?${api}&with_genres=878`,
}

/*this function is used to sort the overview of the any movie or tv show */
function sort_description(str, n)
{
    return str?.length <= n ? str : str.substr(0, n - 1) + "...";
}

/* this function is used to sort the title of the any movie or tv show */
function sort_title(string, n)
{
    return string?.length <= n ? string : string.substr(0, n - 1) + "...";
}

// window.onbeforeunload = function () {
//     window.scrollTo(0, 400);
// };

window.addEventListener('scroll', function () {
    // Get the current scroll position
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Get the total height of the document, including the invisible part
    var totalHeight = document.documentElement.scrollHeight;

    // Get the height of the visible part of the document
    var windowHeight = window.innerHeight;

    // Check if the user has reached the bottom of the page
    if (scrollTop + windowHeight >= totalHeight) {
        // Do something when the user reaches the end of the page
        console.log('Reached the end of the page!');
    }
});

/* banner picture */
fetch(request.sciencemovies)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const setmovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        let banner = document.getElementById("banner");
        let banner_title = document.getElementById("banner-title");
        let banner_description = document.getElementById("banner-description");

        if (setmovie.backdrop_path != null) {
            banner.style.backgroundImage = "url(" + bannerurl + setmovie.backdrop_path + ")";
        } else {
            banner.style.backgroundImage = "url(" + bannerurl + setmovie.poster_path + ")";
        }
        banner_title.innerText = setmovie.title;
        banner_description.innerText = sort_description(setmovie.overview, 240);

        /* this event listner is used to redirect the user to movie detail page to show the detail of movie*/
        banner.addEventListener('click', () => {
            localStorage.setItem('id', setmovie.id);
            localStorage.setItem('name', setmovie.overview);
            window.location.href = "movie_detail.html";

        });
    })
    .catch((error) => {
        console.error('Error fetching videos:', error);
    });


    

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

async function fetchTopRatedMovies() {
    try {
        const response = await fetch(request.top_rated);
        const data = await response.json();

        //  console.log(data);
        const shuffledResults = shuffleArray(data.results);
        const row = document.getElementById("top-rated");

        shuffledResults.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listener */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

// Call the async function
fetchTopRatedMovies();



/* fetch all new realease movies */
fetch(request.newRealease)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);

        const row = document.getElementById("newrealese");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = movie.title;
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listener */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });

            }
        });
    })

/* fetch all trending movies */
fetch(request.trendingmovies)
    .then((res) => res.json())

    .then((data) => {
        
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("Trending Now");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);

                    window.location.href = "movie_detail.html";
                });
            }
        });
    })


/*  fetch all popular movies */
fetch(request.popularmovies)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("Popular Movies");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all blockbuster movies */
fetch(request.topEarningmovie)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("BlockBuster Movies");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all popular tv shows  */
    fetch(request.popular_tvshows)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("Popular TV Shows-India");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    console.log(movie.id);
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    // window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all action movies  */
    fetch(request.actionmovies)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("Action Movies");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all drama tv shows  */
    fetch(request.dramatvshows)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("TV Shows Drama");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all war movies */
    fetch(request.war_movies)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("War Movies");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all kids tv shows  */
    fetch(request.popular_kids_tvshows)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("For Kids");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all upcoming movies */
    fetch(request.upcomingmovies)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("Upcoming Movies");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all drama movies */
    fetch(request.dramamovies)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("Drama Movies");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                //  event listner
                 poster.addEventListener('click', () => {
                    console.log(movie.id);
                     localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                 });
            }
        });
    })

 /* fetch all reality tv shows  */
    fetch(request.realitytvShows)
    .then((res) => res.json())

    .then((data) => {
        // console.log(data);
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("TV Shows Reality");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

/* fetch all science tv shows  */
    fetch(request.sciencetvshows)
    .then((res) => res.json())

    .then((data) => {
        //   console.log(data);
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("TV Shows Science fictions");
    
        shuffledResults.forEach((movie) => {
            if(movie.poster_path != null)
            {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

fetch(request.adventure)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);

        const row = document.getElementById("adventures");

        shuffledResults.forEach((movie) => {
            if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = movie.title;
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listener */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });

            }
        });
    })

fetch(request.triller)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);

        const row = document.getElementById("trillers");

        shuffledResults.forEach((movie) => {
            if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = movie.title;
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listener */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });

            }
        });
    })

fetch(request.horrer)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);

        const row = document.getElementById("horrers");

        shuffledResults.forEach((movie) => {
            if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = movie.title;
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listener */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });

            }
        });
    })

fetch(request.news)
    .then((res) => res.json())

    .then((data) => {
        // console.log(data);
        const shuffledResults = temp = shuffleArray(data.results);
        const row = document.getElementById("newss");

        shuffledResults.forEach((movie) => {
            if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listner */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });
            }
        });
    })

fetch(request.sciencemovies)
    .then((res) => res.json())

    .then((data) => {
        const shuffledResults = temp = shuffleArray(data.results);

        const row = document.getElementById("science movie");

        shuffledResults.forEach((movie) => {
            if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.setAttribute("loading", "lazy");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = movie.title;
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                row.appendChild(movie_box);

                /* event listener */
                poster.addEventListener('click', () => {
                    localStorage.setItem('id', movie.id);
                    localStorage.setItem('name', movie.overview);
                    window.location.href = "movie_detail.html";
                });

            }
        });
    })

const full_page = document.querySelectorAll(".new-title");

full_page.forEach(full_page => {
    full_page.addEventListener('click', () => {
        localStorage.setItem('id', full_page.id);
        //  console.log(full_page.id);
         window.location.href = "category.html";
    })
})

