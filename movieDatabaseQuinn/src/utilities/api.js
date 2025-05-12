const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMG_BASE = "https://image.tmdb.org/t/p/";

function getPopularMovies() {
    return fetch(`${API_URL}/popular?api_key=${API_KEY}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network Response Code was not OK")
        }
        return response.json()
    })
    .catch((error) => {
        throw error;
    });
}

function getMovieById(id) {
    return fetch(`${API_URL}/${id}?api_key=${API_KEY}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network Response Code was not OK")
        }
        return response.json()
    })
    .catch((error) => {
        throw error;
    });
}

export { getPopularMovies, getMovieById, IMG_BASE };