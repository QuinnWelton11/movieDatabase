import { useContext } from "react";
import "./FavoriteButton.css";
import { GlobalContext } from "../context/GlobalContext";
import favorited from "../images/star_favorited.svg";
import unfavorited from "../images/star_unfavorited.svg";

function FavoriteButton({ movieData }) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useContext(GlobalContext);

  const isFavorited = isFavorite(movieData.id);

  function handleButtonClick(event) {
    event.preventDefault();
    console.log(handleButtonClick);
    if (isFavorited) {
      removeFromFavorites(movieData.id);
    } else {
      addToFavorites(movieData);
    }
  }

  return (
    <button onClick={handleButtonClick} className="fav-btn">
      <img
        src={isFavorited ? favorited : unfavorited}
        alt={isFavorited ? "Unfavorite" : "Favorite"}
        className="fav-icon"
      />
    </button>
  );
}

export default FavoriteButton;
