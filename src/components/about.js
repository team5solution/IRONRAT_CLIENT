import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { isEmpty, getTheme } from "../common";
import { fetchTheme } from "../action/themes";
import NavBar from "./navBar";
import Footer from "./footer";
//import AboutImg from "../images/about-us-img.jpg";
class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (isEmpty(this.props.theme.info)) {
      this.props.fetchTheme();
    }
  }
  render() {
    const {
      theme: { info }
    } = this.props;
    const { backgroundStyle, linkStyle, navStyle, buttonStyle } = getTheme(
      info
    );

    return (
      <div style={backgroundStyle}>
        <NavBar navStyle={navStyle} btnStyle={buttonStyle} />
        <div className="container">
          <h1>About us</h1>

          <hr />

          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/dist/images/ironrats_powder_coating_aboutus_1.jpg"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/ironrats_powder_coating_aboutus_2.jpg"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/ironrats_powder_coating_aboutus_3.jpg"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/ironrats_powder_coating_aboutus_4.jpg"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/ironrats_powder_coating_aboutus_5.jpg"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>

          <h2>Our story</h2>

          <p>
            Iron Rat founder Carl Sabourin has always had a passion and a hand
            in motorsports. From a very early age, he would disassemble,
            customize, and reassemble his collection of Hot Wheels, and take
            apart home appliances (much to his mother’s dismay) to understand
            how they worked and see if he could rebuild them to make them more
            efficient.
          </p>

          <p>
            To this day, he always has a personal project on the go – whether it
            be muscle cars, ATVs, snowmobiles, or boats.
          </p>

          <p>
            After a long career in the public service, Carl decided it was time to make
            a career out of his passions and created Iron Rat in 2018.
          </p>

          <p>
            Iron Rat is the sole powder coating facility specializing in
            motorsports in the region, and has seen exponential growth since its
            inception. Iron Rat can powder coat anything that can withstand 425F
            – ranging from car parts (wheels, callipers, motorcycle frames,
            fenders) to customized, branded metal coffee mugs and water bottles.
          </p>

          <p>
            Carl has been happily married to his wife Jodie for 15 years and is
            a proud father to two beautiful children, Caydence and Briggs.
          </p>

          <br />
          <br />

          <Footer bgStyle={backgroundStyle} linkStyle={linkStyle} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    theme: state.theme
  };
}
About.propTypes = {
  fetchTheme: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchTheme }
)(About);
