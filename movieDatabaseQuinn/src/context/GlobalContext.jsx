import { useState } from "react";
import { createContext } from "react";



const GlobalContext = createContext();

function GlobalProvider({children}) {
    const [favorites, setFavorites] = useState([]);

    // goals:
    //ad a movie to favorites
    //remove a movie from favorties
    //detect if a movie is already favorited or not

    function addToFavorites(movieData) {
        // make a copy of favorites array and include the new movie data
        setFavorites([...favorites, movieData]);
    }

    function removeFromFavorites(id) {
        const newFavorites = favorites.filter((movie) => {
            return movie.id !== id;
        })
        setFavorites(newFavorites);
    }

    function isFavorite(id) {
        return favorites.some((movie) => movie.id === id);
    }

    return <GlobalContext.Provider value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>{children}</GlobalContext.Provider>
}

export {GlobalContext, GlobalProvider};