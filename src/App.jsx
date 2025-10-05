import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ErrorLoader from './pages/ErrorLoader';
import Profile from './pages/Profile';
import Navbar from './pages/Navbar';

const App = () => {
  const [cart, setCart] = useState(() => Number(localStorage.getItem("cart")) || 0);
  const [favorites, setFavorites] = useState(() => Number(localStorage.getItem("favorites")) || 0);

  useEffect(() => {
    localStorage.setItem("cart", cart);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", favorites);
  }, [favorites]);

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} favorites={favorites} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies cart={cart} setCart={setCart} favorites={favorites} setFavorites={setFavorites}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<ErrorLoader/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
