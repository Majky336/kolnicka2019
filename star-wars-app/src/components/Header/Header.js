import React from "react";

import "./Header.css";
import HeaderNavItem from "./HeaderNavItem";

const Header = () => {
  return (
    <div className="header-container">
      <HeaderNavItem label="List" to="/" />
      <HeaderNavItem label="Detail" to="/detail" />
    </div>
  );
};

export default Header;
