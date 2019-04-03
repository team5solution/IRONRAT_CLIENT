import React from "react";
import { Link } from "react-router-dom";
//import Logo from "../images/IronRatsLogo.svg";
import { MANAGER_URL } from "../settings";
const NavBar = props => {
  const { navStyle, btnStyle } = props;
  let navClass = "navbar navbar-expand-lg navbar-primary bg-dark";
  if (navStyle !== null && navStyle.backgroundColor !== "#000") {
    navClass = "navbar navbar-expand-lg navbar-primary";
  }

  return (
    <nav className={navClass} style={navStyle}>
      <Link className="navbar-brand" to="/" style={navStyle}>
        <p className="h3 mt-1 mb-6">
          <img
            src="/dist/images/IronRatsLogo.svg"
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
        style={btnStyle}
      >
        <span className="btn btn-primary">MENU</span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/" style={navStyle}>
                Home
              </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/reviews" style={navStyle}>
                Reviews
              </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/products" style={navStyle}>
                Products
              </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/about" style={navStyle}>
                About us{" "}
              </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/contact" style={navStyle}>
                Contact us{" "}
              </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/careers" style={navStyle}>
                Careers{" "}
              </Link>
            </p>
          </li>
          <li className="nav-item mr-4">
            <p className="h6 mt-6 mb-3">
              <Link to="/appointment" style={navStyle}>
                Make an appointment{" "}
              </Link>
            </p>
          </li>
        </ul>
        <p className="navbar-text mr-4 mt-6 mb-3 h6">
          <a href={MANAGER_URL} style={navStyle}>
            Log in{" "}
          </a>
        </p>
      </div>
    </nav>
  );
};
export default NavBar;
