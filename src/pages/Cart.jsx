// Cart.jsx
import React from "react";
import Cards from "./Cards";
import "./Movies.css"; 

const Cart = () => {
  const moviesList = JSON.parse(localStorage.getItem("movies")) || [];

  return (
    <div className="movies-container">
      {moviesList.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        moviesList.map((movie, index) => (
          <Cards
            key={index}
            title={movie.title}
            genre={movie.genre}
            summary={movie.summary}
            image={movie.image}
            showActions={false} 
          />
        ))
      )}
    </div>
  );
};

export default Cart;
