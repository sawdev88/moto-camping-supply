import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav(params) {
  return (
    <div className="dash-nav">
      <div className="logo mb-2">
        logo
      </div>

      <ul>
        <li><NavLink exact to="/dashboard">Overview</NavLink></li>
        <li><NavLink to="/dashboard/products">Products</NavLink></li>
        <li><NavLink to="/dashboard/articles">Articles</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
