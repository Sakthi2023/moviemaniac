import React from "react";
import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>Movie Maniac</h1>
        <div className="navbar-links">
          <a href="">
            Latest <img src={Party} alt="party-png" className="navbar-emojis" />
          </a>
          <a href="">
            Popular <img src={Fire} alt="fire-png" className="navbar-emojis" />
          </a>
          <a href="">
            Top Rated{" "}
            <img src={Star} alt="star-png" className="navbar-emojis" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
