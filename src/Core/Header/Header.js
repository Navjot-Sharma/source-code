import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCode, FaPlusSquare } from "react-icons/fa";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <FaCode />
      </Link>
      <input className="form-control" />
      <div>
        <Link to="/create">
          <FaPlusSquare />
        </Link>
        <FaBars />
      </div>
    </header>
  );
}

export default Header;
