# Movie Streaming & Management React App

A responsive React.js app to browse movies, add them to Favorites or Cart, and manage selections. User choices are saved in localStorage, so the state persists across page refreshes.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Browse a curated list of movies with details: genre, release date, duration, summary.
- Add movies to **Favorites** or **Cart**.
- Persist selections using **localStorage**.
- Conditional button rendering:
  - "Add to Cart" / "Add to Favorites" appear only on Movies page.
  - Buttons show proper state: "In Cart" or "Favorited".
- Responsive, well-aligned movie cards on all pages.
- Smooth navigation with **React Router**.

---

## Technologies Used

- **Frontend:** React.js, CSS
- **Routing:** React Router
- **Icons:** react-icons
- **State Management:** React `useState` + localStorage
- **Styling:** CSS Grid & Flexbox

---

## Project Structure

movie-app/
│
├── public/
│ └── index.html
│
├── src/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Movies.jsx
│ │ ├── Favorites.jsx
│ │ ├── Cart.jsx
│ │ ├── Contact.jsx
│ │ ├── Profile.jsx
│ │ └── Navbar.jsx
│ │
│ ├── components/
│ │ └── Cards.jsx
│ │
│ ├── assets/
│ │ └── images, videos, etc.
│ │
│ ├── App.jsx
│ └── index.js
│
├── package.json
└── README.md

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/movie-app.git
cd movie-app
npm install
npm start

---


## Usage

Go to the Movies page to browse movies.

Click Add to Favorites to save a movie in favorites.

Click Add to Cart to save a movie in your cart.

Access Favorites or Cart pages from the Navbar to view saved items.

Counts and selections persist after page refresh.
