import '../styles/styles.css'

import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu header-menu">
      <div className="right menu">
        <Link to='/' className="item">
          All Photos
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header