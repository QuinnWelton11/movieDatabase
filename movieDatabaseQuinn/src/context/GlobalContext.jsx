import { useState, useEffect, createContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movieData) {
    if (!favorites.some((movie) => movie.id === movieData.id)) {
      setFavorites([...favorites, movieData]);
    }
  }

  function removeFromFavorites(id) {
    const newFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(newFavorites);
  }

  function isFavorite(id) {
    return favorites.some((movie) => movie.id === id);
  }

  return (
    <GlobalContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
