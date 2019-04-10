import React from "react";
import { NavLink } from "react-router-dom";

import "./HeaderNavItem.css";

const HeaderNavItem = props => {
  const { label, to } = props;

  return (
    <NavLink className="header-nav-item" to={to}>
      {label}
    </NavLink>
  );
};

export default HeaderNavItem;
