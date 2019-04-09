import React from "react";

const Footer = props => {
  const { bgStyle, linkStyle } = props;
  let footClass = "bg-dark";
  if (bgStyle !== null && bgStyle.backgroundColor !== "#000") {
    footClass = "";
  }
  return (
    <div id="footer" className={footClass} style={bgStyle}>
      <div className="text-center">
        <p className="display-4">
          <a href="https://d.facebook.com/ironratcustoms/" style={linkStyle}>
            <i className="fab fa-facebook-square" />
          </a>
          <a
            href="https://www.instagram.com/iron_rat_customs/"
            style={linkStyle}
          >
            <i className="fab fa-instagram" />
          </a>
          <a href="mailto:ironratcustom@gmail.com" style={linkStyle}>
            <i className="fas fa-envelope" />
          </a>
          <a href="tel:+16138623030" style={linkStyle}>
            <i className="fas fa-phone" />
          </a>
        </p>
      </div>

      <div className="text-center text-primary">
        <p style={bgStyle}>2019 Copyright</p>
      </div>
    </div>
  );
};
export default Footer;
