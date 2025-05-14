import { useContext } from "react";
import "./FavoriteButton.css";
import { GlobalContext } from "../context/GlobalContext";

function FavoriteButton({movieData}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useContext(GlobalContext);

    const isFavorited = isFavorite(movieData.id);

    function handleButtonClick(event) {
        event.preventDefault()
        console.log(handleButtonClick)
        if (isFavorited) {
            removeFromFavorites(movieData.id);
        } else {
            addToFavorites(movieData);
        }
    }

  return (
    <button onClick={handleButtonClick} className="fav-btn">
        {isFavorited ? "💛" : "🖤"}
    </button>
  );
}

export default FavoriteButton;