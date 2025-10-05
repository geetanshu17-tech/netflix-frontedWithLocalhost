🎬 Movie Streaming & Management React App

A responsive React.js app to browse movies, add them to Favorites or Cart, and manage selections. User choices are saved in localStorage, so the state persists across page refreshes.

📚 Table of Contents

Features

Technologies Used

Project Structure

Installation

Usage

Screenshots

Contributing

License

✨ Features

Browse a curated list of movies with details: genre, release date, duration, and summary.

Add movies to Favorites or Cart.

Persist selections using localStorage.

Conditional button rendering:

"Add to Cart" / "Add to Favorites" appear only on the Movies page.

Buttons update to reflect state: "In Cart" or "Favorited".

Responsive, well-aligned movie cards on all pages.

Smooth navigation using React Router.

🛠️ Technologies Used

Frontend: React.js, CSS

Routing: React Router

Icons: react-icons

State Management: React useState + localStorage

Styling: CSS Grid & Flexbox

📁 Project Structure
movie-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── Favorites.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Profile.jsx
│   │   └── Navbar.jsx
│   │
│   ├── components/
│   │   └── Cards.jsx
│   │
│   ├── assets/
│   │   └── images/, videos/, etc.
│   │
│   ├── App.jsx
│   └── index.js
│
├── package.json
└── README.md

⚙️ Installation

Clone the repository:

git clone https://github.com/your-username/movie-app.git
cd movie-app
npm install
npm start

🚀 Usage

Go to the Movies page to browse available movies.

Click Add to Favorites to save a movie in your favorites list.

Click Add to Cart to save a movie in your cart.

Navigate to Favorites or Cart via the Navbar to view saved items.

All selections are saved using localStorage and persist after page refresh.
