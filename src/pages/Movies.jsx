// Movies.jsx
import React from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import Cards from "./Cards";
import "./Movies.css";

const Movies = ({ cart, setCart, favorites, setFavorites }) => {
  const moviesList = [
    {
      title: "Demon Slayer: Infinity Castle",
      genre: "Action / Adventure",
      summary: "Hashiras are summoned by Muzan into the Infinity Castle.",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTG93s9wVYOLo66pGki-TGZoP4ezYue7ejGN1q7lLdW2kAZqV1gGcgRI_KUbBfAwEBZ7caA"
    },
    {
      title: "The Dark Knight",
      genre: "Action / Drama",
      summary: "Batman faces Joker in a battle for city",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      title: "Interstellar",
      genre: "Adventure / Sci-Fi",
      summary: "A team travels through a wormhole to save humanity.",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
      title: "Attack on Titan",
      genre: "Action / Adventure / Military",
      summary: "The world is in ruins as the human race is consumed by the Titans.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0huc8gb3PEVCExyX_RBl4Y3WrYSkeJTneLYuKgoq6LDi93Rlr6s2znBcqsKTh8LNOz8&usqp=CAU"
    },
    {
      title: "Your Name",
      genre: "Romance / Sci-Fi / Drama",
      summary: "A boy lives a life behind a counter in a department store.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWswzRQsDPeWl-IzAvdPkdW5vrzrqPniuDQ&s"
    },
    {
      title: "Naruto Shippuden",
      genre: "Action / Adventure",
      summary: "Naruto Uzumaki search for his ninja way to become the Hokage.",
      image: "https://img.favpng.com/5/0/24/sasuke-uchiha-naruto-uzumaki-naruto-shippuden-naruto-vs-sasuke-jiraiya-itachi-uchiha-png-favpng-tPzGKaBktxvAzNAiZwm7DcYn8.jpg"
    },
    {
      title: "Re:Zero Starting Life in Another World",
      genre: "Action / Adventure / Isekai / Fantasy",
      summary: "Subaru is a high school student who is transferred to a different world.",
      image: "https://m.media-amazon.com/images/S/pv-target-images/0c22bdae64b7c1b411977eda1e069bfda04f078dd07402b8577a479eb2ab7fac.jpg"
    },
    {
      title: "Game of Thrones",
      genre: "Action / Adventure / Drama",
      summary: "Nine noble families fight for control over the lands of Westeros.",
      image: "https://m.media-amazon.com/images/I/51A7EGmxK-L.jpg"
    },
    {
      title: "One Piece",
      genre: "Action / Adventure / Fantasy / Comedy",
      summary: "The Straw Hat Pirates search for the One Piece.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmMkWttSXqnF1_HRPSqK7uTYzuakK6Pfh_A&s"
    },
    {
      title: "Avengers: Endgame",
      genre: "Action / Adventure / Sci-Fi",
      summary: "The Avengers assemble once more to reverse Thanos' actions.",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
      title: "The Conjuring: Last Rites",
      genre: "Horror / Thriller",
      summary: "A family is terrorized by supernatural forces in their new home.",
      image: "https://cdn.district.in/movies-assets/images/cinema/The-Conjuring_Poster-86ebe5e0-7857-11f0-8de0-9d1c38983d05.jpg"
    },
    {
      title: "Blue Lock",
      genre: "Sports / Drama",
      summary: "A soccer training program to create the best striker in the world.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS2MFEl4PrR6xloS_Fp7GlMzTrTJoxjN0Sg&s"
    },
    {
      title: "Pokemon X and Y",
      genre: "Action / Adventure / Fantasy / Comedy",
      summary: "Ash Ketchum's Adventure throughout the Kalos with dream to be Pokemon master",
      image: "https://m.media-amazon.com/images/I/71tWpr9TCfL._UF350,350_QL50_.jpg"
    },
    {
      title: "Lord of the Rings: The Return of the King",
      genre: "Action / Adventure / Fantasy",
      summary: "Gandalf and Aragorn lead the World of Men against Sauron's army to Middle-earth.",
      image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    }
  ];

  return (
    <>
      <div className="malpage">
        <h1>Attack on Titan</h1>
        <p className="genre1">Action / Adventure / Military</p>
        <p className="release-date1">Release Date: March 4, 2023</p>
        <p className="duration1">Duration: 1h 30m</p>
        <div className="btn-group">
          <button className="play"><FaPlay className="play-icon" />Play</button>
          <button className="mylist"><FaPlus className="plus-icon" />My List</button>
        </div>

        <p className="summary1">
          Attack on Titan: The Last Attack brings the anime’s story to its powerful conclusion...
        </p>
      </div>

      <div className="movies-container">
        {moviesList.map((movie, index) => (
          <Cards
            key={index}
            title={movie.title}
            genre={movie.genre}
            summary={movie.summary}
            image={movie.image}
            cart={cart}
            setCart={setCart}
            favorites={favorites}
            setFavorites={setFavorites}
            showActions={true}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;
