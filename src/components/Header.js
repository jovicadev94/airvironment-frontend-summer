import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="header-span-opacity">air</span>
        <span className="nav2">vironment</span>
      </div>
      <div className="all_data">all data</div>
      <div className="averages"> averages</div>
    </div>
  );
};

export default Header;
