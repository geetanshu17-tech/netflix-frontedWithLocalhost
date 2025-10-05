// Favorites.jsx
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Favorites = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("favoritesList"));
      if (Array.isArray(stored)) {
        setFavoritesList(stored);
      } else {
        setFavoritesList([]);
      }
    } catch {
      setFavoritesList([]);
    }
  }, []);

  return (
    <div className="movies-container">
      {favoritesList.length === 0 ? (
        <p className="empty-message">You have no favorite movies yet.</p>
      ) : (
        favoritesList.map((movie, index) => (
          <Cards
            key={index}
            title={movie.title}
            genre={movie.genre}
            summary={movie.summary}
            image={movie.image}
            cart={0}
            setCart={() => {}}
            favorites={0}
            setFavorites={() => {}}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
