import React from "react";

import "./Header.css";
import HeaderNavItem from "./HeaderNavItem";

const Header = () => {
  return (
    <div className="header-container">
      <HeaderNavItem label="Episode list" to="/" />
    </div>
  );
};

export default Header;
