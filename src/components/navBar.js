import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/IronRatsLogo.svg";
import { MANAGER_URL } from "../settings";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
      <Link className="navbar-brand" to="/">
        <p className="h3 mt-1 mb-6">
          <img
            src={Logo}
            width="100"
            height="70"
            alt="Iron Rat Customs Powder Coating logo"
          />
          I R C
        </p>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="btn btn-primary">MENU</span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/">Home </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/reviews">Reviews </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/products">Products</Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/about">About us </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/contact">Contact us </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/careers">Careers </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/appointment">Make an appointment </Link>
            </p>
          </li>
        </ul>
        <p className="navbar-text mr-4 mt-6 mb-3 h6">
          <a href={MANAGER_URL}>Log in </a>
        </p>
      </div>
    </nav>
  );
};
export default NavBar;
