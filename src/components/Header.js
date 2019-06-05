import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <NavLink exact to="/">
      Register
    </NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/homepage">Protected</NavLink>
  </div>
);

export default Header;
