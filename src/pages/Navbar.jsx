import React from "react";
import logo from "../assets/account-circle-line.png"
import "./navbar.css"
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa"; 

const Navbar = ({cart, favorites}) => {  
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" alt="netflix-logo" />
        </div>
        <div className="navigation">
          <ul>                  
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="cart-link">
              <Link to="/cart">
                <FaShoppingCart className="cart-icon" />
                {cart > 0 && <span className="cart-count">{cart}</span>}
              </Link>
            </li>
            <li className="favorites-link">
              <Link to="/favorites">
                <FaHeart className="fav-icon" />
                {favorites > 0 && <span className="fav-count">{favorites}</span>}
              </Link>
            </li>
          </ul>
        </div>
        <div className="profile">
          <Link to="/profile">
          <img src={logo} alt="profile-logo" /></Link>
            
        </div>
      </div>
    </>
  );
};

export default Navbar;
