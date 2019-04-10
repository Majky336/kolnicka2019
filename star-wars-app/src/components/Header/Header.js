import React from "react";

import "./Header.css";
import HeaderNavItem from "./HeaderNavItem";

const Header = () => {
  return (
    <div className="header-container">
      <HeaderNavItem label="Episode list" to="/" />
      <HeaderNavItem label="Episode detail" to="/episode-detail" />
    </div>
  );
};

export default Header;
