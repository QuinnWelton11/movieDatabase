const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function getPopularMovies() {
    return fetch(`${API_URL}/popular?api_keys=${API_KEY }`)
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

export { getPopularMovies };