import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchProducts } from "../action/products";
import { fetchJob } from "../action/job";
import { fetchTheme } from "../action/themes";
import { SERVER_URL } from "../settings";
import { isEmpty, getTheme } from "../common";
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.products.productItems.length === 0) {
      this.props.fetchProducts();
    }
    if (this.props.career.jobItems.length === 0) {
      this.props.fetchJob();
    }
    if (isEmpty(this.props.theme.info)) {
      this.props.fetchTheme();
    }
  }
  render() {
    const {
      products: { productItems },
      career: { jobItems },
      theme: { info }
    } = this.props;

    const { backgroundStyle, linkStyle, navStyle, buttonStyle } = getTheme(
      info
    );

    const productDemoPic =
      productItems.length > 0
        ? SERVER_URL + productItems[0].images[0]
        : "/dist/images/placeholdericon.png";
    const productDemoInfo =
      productItems.length > 0
        ? productItems[0].description
        : "No detail product information";
    const careerDemoPic =
      jobItems.length > 0
        ? SERVER_URL + jobItems[0].images[0]
        : "/dist/images/placeholdericon.png";
    const careerDemoInfo =
      jobItems.length > 0 ? jobItems[0].description : "No career information";
    return (
      <div style={backgroundStyle}>
        <NavBar navStyle={navStyle} btnStyle={buttonStyle} />
        <div className="container">
          <h1>Iron Rat Customs</h1>

          <hr />

          <div id="demo" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/dist/images/sliderimage1.gif"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/sliderimage2.gif"
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/dist/images/sliderimage3.gif"
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

          <div className="row mt-3">
            <div className="col-md-8">
              <h2>What is powder coating?</h2>

              <p className="mt-3">
                Powder coating is essentially an industrial strength, paint-type
                coating, which is applied as a free-flowing, dry powder. It is
                much more durable than traditional liquid paint and is scratch
                and rust resistant, therefore offering your valuable sports
                vehicle parts better protection from all elements.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-block btn-lg mb-3 mt-3 visible-sm visible-xs"
                style={buttonStyle}
              >
                <p className="h6">Make an appointment today!</p>
              </button>

              <div className="row">
                <div className="col-md-6">
                  <Link to="/products" style={linkStyle}>
                    <h3>Products</h3>

                    <p>
                      <img
                        src={productDemoPic}
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p className="cut-content">{productDemoInfo}</p>
                </div>

                <div className="col-md-6">
                  <Link to="/contact" style={linkStyle}>
                    <h3>Contact us</h3>

                    <p>
                      <img
                        src="/dist/images/placeholdericon.png"
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p className="cut-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    malesuada sodales lacus et lacinia. Donec tellus ipsum,
                    finibus a purus quis, aliquam blandit mauris.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Link to="/about" style={linkStyle}>
                    <h3>About us</h3>

                    <p>
                      <img
                        src="/dist/images/ironrats_powder_coating_aboutus.jpg"
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p className="cut-content">
                    Iron Rat founder Carl Sabourin has always had a passion and
                    a hand in motorsports. From a very early age, he would
                    disassemble, customize, and reassemble his collection of Hot
                    Wheels, and take apart home appliances (much to his mother’s
                    dismay) to understand how they worked and see if he could
                    rebuild them to make them more efficient.
                  </p>
                </div>

                <div className="col-md-6">
                  <Link to="/careers" style={linkStyle}>
                    <h3>Careers</h3>

                    <p>
                      <img
                        src={careerDemoPic}
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p className="cut-content">{careerDemoInfo}</p>
                </div>
              </div>

              <div className="visible-sm visible-xs">
                <Link to="/reviews" style={linkStyle}>
                  <h3>Reviews</h3>

                  <p>
                    <img
                      src="/dist/images/stars.png"
                      alt="Iron Rat Customs Powder Coating icon"
                      className="img-fluid"
                    />
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <button
                type="button"
                className="btn btn-primary btn-block btn-lg mb-3 hidden-sm hidden-xs"
                style={buttonStyle}
              >
                <p className="h6">Make an appointment today!</p>
              </button>

              <p className="text-center">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fironratcustoms%2F&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="340"
                  height="600"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              </p>

              <div className="hidden-sm hidden-xs">
                <Link to="/reviews" style={linkStyle}>
                  <h3>Reviews</h3>

                  <p>
                    <img
                      src="/dist/images/stars.png"
                      alt="Iron Rat Customs Powder Coating icon"
                      className="img-fluid"
                    />
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <br />
        </div>

        <br />
        <br />
        <Footer bgStyle={backgroundStyle} linkStyle={linkStyle} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    career: state.job,
    theme: state.theme
  };
}
Home.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  fetchJob: PropTypes.func.isRequired,
  fetchTheme: PropTypes.func.isRequired
};
export default connect(
  mapStateToProps,
  { fetchProducts, fetchJob, fetchTheme }
)(Home);
