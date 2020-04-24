import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/register" className="mr-4">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default NavBar;
