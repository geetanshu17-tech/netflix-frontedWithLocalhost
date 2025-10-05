import React, { useState, useEffect } from "react";
import "./Cards.css";

const Cards = ({
  title,
  genre,
  summary,
  image,
  cart,
  setCart,
  favorites,
  setFavorites,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFav, setAddedToFav] = useState(false);

  // Check localStorage on mount to see if this card is already added
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("movies")) || [];
    const storedFav = JSON.parse(localStorage.getItem("favoritesList")) || [];

    if (storedCart.some((m) => m.title === title)) setAddedToCart(true);
    if (storedFav.some((m) => m.title === title)) setAddedToFav(true);
  }, [title]);

  const addToCart = () => {
    if (!addedToCart) {
      setCart(cart + 1);
      setAddedToCart(true);

      let moviesList = JSON.parse(localStorage.getItem("movies")) || [];
      if (!moviesList.some((m) => m.title === title)) {
        moviesList.push({ title, genre, summary, image });
        localStorage.setItem("movies", JSON.stringify(moviesList));
      }
    }
  };

  const addToFav = () => {
    if (!addedToFav) {
      setFavorites(favorites + 1);
      setAddedToFav(true);

      let favList = JSON.parse(localStorage.getItem("favoritesList")) || [];
      if (!favList.some((m) => m.title === title)) {
        favList.push({ title, genre, summary, image });
        localStorage.setItem("favoritesList", JSON.stringify(favList));
      }
    }
  };

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-img" />
      <div className="movie-info">
        <h3>{title}</h3>
        <p className="genre">{genre}</p>
        <p className="summary">{summary}</p>

        <button
          className="details-button"
          onClick={addToFav}
          disabled={addedToFav}
        >
          {addedToFav ? "Favorited" : "Add to Favorites"}
        </button>
        <button
          className="details-button"
          onClick={addToCart}
          disabled={addedToCart}
        >
          {addedToCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
