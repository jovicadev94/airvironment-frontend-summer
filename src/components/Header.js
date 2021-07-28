import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="home-navigation">
        <Link to="/">
          <span className="header-span-opacity">air</span>
          <span className="nav2">vironment</span>
        </Link>
      </div>
      <div className="navigation">
        <span className="all_data">all data</span>
        <span className="averages"> averages</span>
      </div>
    </div>
  );
};

export default Header;
