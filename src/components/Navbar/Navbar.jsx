import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Movie Maniac</h1>
        <div className="navbar-links">
          <NavLink to="/">
            Popular <img src={Fire} alt="fire-png" className="navbar-emojis" />
          </NavLink>
          <NavLink to="/upcoming">
            Latest <img src={Party} alt="party-png" className="navbar-emojis" />
          </NavLink>
          <NavLink to="/top_rated">
            Top Rated{" "}
            <img src={Star} alt="star-png" className="navbar-emojis" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
