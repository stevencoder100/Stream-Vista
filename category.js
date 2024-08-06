const api = "api_key=0dd1278d2226fdf9d27eb2a0b62222a6";

/* baseurl */
const base_url = "https://api.themoviedb.org/3";

const bannerurl = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w500";

function sort_title(string, n)
{
    return string?.length <= n ? string : string.substr(0, n - 1) + "...";
}

const id = localStorage.getItem('id');


if(id == "toprated") 
{
    async function fetchTopRatedMovies() {
    try {
        const response = await fetch(`${base_url}/movie/now_playing?${api}&language=en-US&page=1`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchTopRatedMovies();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchTopRatedMovies() {
    try {
        const response = await fetch(`${base_url}/movie/now_playing?${api}&language=en-US&page=${count}`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchTopRatedMovies();
})
}
else if(id == "latestrelease")
{
    async function fetchNewReleaseMovies() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.lte=2024-04-20&sort_by=primary_release_date.desc`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchNewReleaseMovies();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchNewReleaseMovies() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=${count}&primary_release_date.lte=2024-04-20&sort_by=primary_release_date.desc`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchNewReleaseMovies();
})
}
else if(id == "trending")
{

    async function fetchTrending() {
    try {
        const response = await fetch(`${base_url}/trending/movie/week?${api}&language=en-US&page=1&&sort_by=primary_release_date.desc`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);

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

fetchTrending();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchTrending() {
    try {
        const response = await fetch(`${base_url}/trending/movie/week?${api}&language=en-US&page=${count}&&sort_by=primary_release_date.desc`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchTrending();
})
}
else if(id == "popular")
{

    async function fetchPopular() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=1&region=IN&release_date.gte=2010-01-01&release_date.lte=2024-04-20&sort_by=popularity.desc&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchPopular();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchPopular() {
    try {
        const response = await fetch(`${base_url}/trending/movie/week?${api}&language=en-US&page=${count}&&sort_by=primary_release_date.desc&with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchPopular();
})
}
else if(id == "blockbuster")
{

    async function fetchBlockbuster() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=1&region=IN&release_date.gte=2010-01-01&release_date.lte=2024-04-20&sort_by=revenue.desc&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchBlockbuster();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchBlockbuster() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&include_adult=false&include_video=false&language=en-US&page=${count}&region=IN&release_date.gte=2010-01-01&release_date.lte=2024-04-20&sort_by=revenue.desc&with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchBlockbuster();
})
}
else if(id == "populartv")
{

    async function fetchPopularity() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchPopularity();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchPopularity() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=${count}&sort_by=popularity.desc&with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.name, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchPopularity();
})
}
else if(id == "action")
{

    async function fetchAction() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=28&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchAction();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchAction() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=28&page=${count}`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchAction();
})
}
else if(id == "tvdrama")
{

    async function fetchTvdrama() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&with_genres=18&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchTvdrama();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchTvdrama() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&with_genres=18&page=${count}&with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.name, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchTvdrama();
})
}
else if(id == "war")
{

    async function fetchWar() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=10752with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchWar();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchWar() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=10752&page=${count}`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchWar();
})
}
else if(id == "kids")
{

    async function fetchKids() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&with_genres=16&sort_by=popularity.desc&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchKids();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchKids() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&with_genres=16&sort_by=popularity.desc&page=${count}with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.name, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchKids();
})
}

else if(id == "upcoming")
{

    async function fetchupcoming() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&region=IN&release_date.gte=2024-04-20&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchupcoming();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchupcoming() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&region=IN&release_date.gte=2024-04-20&page=${count}with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchupcoming();
})
}

else if(id == "drama")
{

    async function fetchdrama() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=18&sort_by=popularity.desc&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.title, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchdrama();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchdrama() {
    try {
        const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=18&page=${count}&sort_by=popularity.desc&with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchdrama();
})
}
else if(id == "tvreality")
{

    async function fetchtvreality() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&with_genres=10764&with_original_language=hi`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchtvreality();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchtvreality() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&with_genres=10764&page=${count}&with_original_language=hi`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.name, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchtvreality();
})
}
else if(id == "science")
{
    async function fetchscience() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&include_adult=false&with_genres=10765&page=1&sort_by=popularity.desc`);
        const data = await response.json();
        const page = document.getElementById("page");

        data.results.forEach((movie) => {
            if (movie.poster_path != null) {
               const movie_box = document.createElement("div");
                movie_box.className = "movie_box";
                const poster = document.createElement("img");
                poster.className = "poster";
                poster.src = img_url + movie.poster_path;
                const title = document.createElement("h4");
                title.className = "title";
                title.innerText = sort_title(movie.name, 15);
                movie_box.appendChild(poster);
                movie_box.appendChild(title);
                page.appendChild(movie_box);
            }
        });
    } catch (error) {
        console.error('Error fetching top-rated movies:', error);
    }
}

fetchscience();

let count = 1;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    count++;
        async function fetchscience() {
    try {
        const response = await fetch(`${base_url}/discover/tv?${api}&include_adult=false&with_genres=10765&page=${count}&sort_by=popularity.desc`);
        const data = await response.json();
        console.log(data);
        const page = document.getElementById("page");
        
        btn.style.visibility = "hidden";
        setTimeout(() => {
            btn.style.visibility = "visible";
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.name, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        }, 1000); 
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
}

fetchscience();
})
}

else if (id == "adventure") {

    async function fetchadventure() {
        try {
            const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=12`);
            const data = await response.json();
            const page = document.getElementById("page");

            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                    const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
    }

    fetchadventure();

    let count = 1;
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        count++;
        async function fetchadventure() {
            try {
                const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=12`);
                const data = await response.json();
                console.log(data);
                const page = document.getElementById("page");

                btn.style.visibility = "hidden";
                setTimeout(() => {
                    btn.style.visibility = "visible";
                    data.results.forEach((movie) => {
                        if (movie.poster_path != null) {
                            const movie_box = document.createElement("div");
                            movie_box.className = "movie_box";
                            const poster = document.createElement("img");
                            poster.className = "poster";
                            poster.src = img_url + movie.poster_path;
                            const title = document.createElement("h4");
                            title.className = "title";
                            title.innerText = sort_title(movie.title, 15);
                            movie_box.appendChild(poster);
                            movie_box.appendChild(title);
                            page.appendChild(movie_box);
                        }
                    });
                }, 1000);
            } catch (error) {
                console.error('Error fetching adventure movies:', error);
            }
        }
        fetchadventure();
    })
}

else if (id == "triller") {

    async function fetchtriller() {
        try {
            const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=53`);
            const data = await response.json();
            const page = document.getElementById("page");

            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                    const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        } catch (error) {
            console.error('Error fetching top-rated movies:', error);
        }
    }

    fetchtriller();

    let count = 1;
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        count++;
        async function fetchtriller() {
            try {
                const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=53`);
                const data = await response.json();
                console.log(data);
                const page = document.getElementById("page");

                btn.style.visibility = "hidden";
                setTimeout(() => {
                    btn.style.visibility = "visible";
                    data.results.forEach((movie) => {
                        if (movie.poster_path != null) {
                            const movie_box = document.createElement("div");
                            movie_box.className = "movie_box";
                            const poster = document.createElement("img");
                            poster.className = "poster";
                            poster.src = img_url + movie.poster_path;
                            const title = document.createElement("h4");
                            title.className = "title";
                            title.innerText = sort_title(movie.title, 15);
                            movie_box.appendChild(poster);
                            movie_box.appendChild(title);
                            page.appendChild(movie_box);
                        }
                    });
                }, 1000);
            } catch (error) {
                console.error('Error fetching adventure movies:', error);
            }
        }
        fetchtriller();
    })
}

else if (id == "horrer") {

    async function fetchhorrer() {
        try {
            const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=27`);
            const data = await response.json();
            const page = document.getElementById("page");
            console.log(data);
            data.results.forEach((movie) => {
                if (movie.poster_path != null) {
                    const movie_box = document.createElement("div");
                    movie_box.className = "movie_box";
                    const poster = document.createElement("img");
                    poster.className = "poster";
                    poster.src = img_url + movie.poster_path;
                    const title = document.createElement("h4");
                    title.className = "title";
                    title.innerText = sort_title(movie.title, 15);
                    movie_box.appendChild(poster);
                    movie_box.appendChild(title);
                    page.appendChild(movie_box);
                }
            });
        } catch (error) {
            console.error('Error fetching horror movies:', error);
        }
    }

    fetchhorrer();

    let count = 1;
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        count++;
        async function fetchhorrer() {
            try {
                const response = await fetch(`${base_url}/discover/movie?${api}&with_genres=27`);
                const data = await response.json();
                console.log(data);
                const page = document.getElementById("page");

                btn.style.visibility = "hidden";
                setTimeout(() => {
                    btn.style.visibility = "visible";
                    data.results.forEach((movie) => {
                        if (movie.poster_path != null) {
                            const movie_box = document.createElement("div");
                            movie_box.className = "movie_box";
                            const poster = document.createElement("img");
                            poster.className = "poster";
                            poster.src = img_url + movie.poster_path;
                            const title = document.createElement("h4");
                            title.className = "title";
                            title.innerText = sort_title(movie.title, 15);
                            movie_box.appendChild(poster);
                            movie_box.appendChild(title);
                            page.appendChild(movie_box);
                        }
                    });
                }, 1000);
            } catch (error) {
                console.error('Error fetching adventure movies:', error);
            }
        }
        fetchhorrer();
    })
}