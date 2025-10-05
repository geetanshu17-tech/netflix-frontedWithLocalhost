# Netflix-Style Movie Streaming React App

A responsive **React.js** application to browse movies, add them to **Favorites** or **Cart**, and manage selections. User choices are saved in **localStorage**, so the state persists even after refreshing the page.

---

## Table of Contents

- [Features](#features)  
- [Demo](#demo)  
- [Technologies Used](#technologies-used)  
- [Folder Structure](#folder-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Screenshots](#screenshots)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Browse a list of movies with title, genre, summary, and poster.  
- Add movies to **Favorites** or **Cart** with proper button states.  
- Cart and Favorites are persisted in **localStorage**.  
- Prevent duplicate entries in Cart or Favorites.  
- Responsive design for desktop and mobile devices.  
- Separate pages for Home, Movies, Cart, Favorites, Contact, and Profile.  

---

## Technologies Used

- React.js (Functional Components & Hooks)  
- React Router v6  
- LocalStorage for persistence  
- CSS (with custom styling, mobile-friendly layout)  
- React Icons  

---

## Folder Structure

netflix-trial/
├─ public/
├─ src/
│ ├─ assets/ # Images, logos, media assets
│ ├─ pages/ # Pages like Home, Movies, Cart, Favorites, Profile
│ ├─ components/ # Reusable components like Cards
│ ├─ App.jsx
│ ├─ index.jsx
│ └─ index.css
├─ package.json
├─ README.md
└─ .gitignore

---

## Installation

1. **Clone the repository:**
```
git clone https://github.com/geetanshu17-tech/netflix-frontedWithLocalhost.git
```

2. **Navigate to project directory:**
```
cd netflix-trial
Install dependencies:

npm install
```

3. **Start the development server:**
```
npm start
```

## Usage

Visit /movies to browse the movie list.

Click Add to Favorites or Add to Cart to save movies.

Access /favorites or /cart to see saved selections.

Counts of Cart and Favorites are persistent across page refreshes.

Navigate between pages using the Navbar.

