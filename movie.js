function getMovieUtils() {
    let currentMovieList;
    let currentFilter = 1337;
    let url = "https://api.themoviedb.org/3/";
    let api_key = "34c6494d54853100f99d5fdf6bde3dd7";

    let utils = {
        getTopRatedMovies,
        getPopularMovies,
        getComingSoonMovies,
        getNewMovies,
        getCurrentFilter,
        getGenres,
        getMovieById
    };

    function getTopRatedMovies(page_index) {
        return fetch(url + "movie/top_rated?api_key=" + api_key + "&page=" + page_index + "&language=fr")
        .then(response => response.json())
        .then(data => data);
    }

    function getPopularMovies(page_index) {
        return fetch(url + "movie/popular?api_key=" + api_key + "&page=" + page_index + "&language=fr")
        .then(response => response.json())
        .then(data => data);
    }

    function getComingSoonMovies(page_index) {
        return fetch(url + "movie/upcoming?api_key=" + api_key + "&page=" + page_index + "&language=fr")
        .then(response => response.json())
        .then(data => data);
    }

    function getNewMovies(page_index) {
        return fetch(url + "movie/now_playing?api_key=" + api_key + "&page=" + page_index + "&language=fr")
        .then(response => response.json())
        .then(data => data);
    }

    function getCurrentFilter() {
        return localStorage.getItem("currfilter");
    }

    function getGenres() {
		return fetch(url + "genre/movie/list?api_key=" + api_key + "&language=fr")
		.then(response => response.json())
		.then(data => data)
	}

    function getMovieById(id) {
		return fetch(url + "movie/" + id + "?api_key=" + api_key + "&language=fr")
		.then(response => response.json())
		.then(data=>data)
	}

    return utils;
}