import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";
import Slide1 from "../images/sliderimage1.gif";
import Slide2 from "../images/sliderimage2.gif";
import Slide3 from "../images/sliderimage3.gif";
import PlaceHolderIcon from "../images/placeholdericon.png";
import Stars from "../images/stars.png";
//import { connect } from "react-redux";
//import socketIOClient from "socket.io-client";
//import Products from "./products/index";
//import SERVER_URL from "../settings.js";
//import { addNewProduct } from "../action/products";
//const m = ({ products }) => ({ products });

/*@connect(
  m,
  { addNewProduct }
)*/
class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    /*const that = this;
    const socket = socketIOClient("http://localhost:3000");
    socket.on("new product", data =>
      that.props.addNewProduct(data.createdProduct)
    );*/
  }
  render() {
    //return <Products />;
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>Iron Rat Customs</h1>

          <hr />

          <div id="demo" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Slide1}
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Slide2}
                  alt="Iron Rat Customs Powder Coating logo"
                  className="img-fluid"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Slide3}
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
                Powder coating is a type of coating that is applied as a
                free-flowing, dry powder. The main difference between a
                conventional liquid paint and a powder coating is that the
                powder coating does not require a solvent to keep the binder and
                filler parts in a liquid suspension form.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-block btn-lg mb-3 mt-3 visible-sm visible-xs"
              >
                <p className="h6">Make an appointment today!</p>
              </button>

              <div className="row">
                <div className="col-md-6">
                  <Link to="/products">
                    <h3>Products</h3>

                    <p>
                      <img
                        src={PlaceHolderIcon}
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    malesuada sodales lacus et lacinia. Donec tellus ipsum,
                    finibus a purus quis, aliquam blandit mauris.
                  </p>
                </div>

                <div className="col-md-6">
                  <Link to="/contact">
                    <h3>Contact us</h3>

                    <p>
                      <img
                        src={PlaceHolderIcon}
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    malesuada sodales lacus et lacinia. Donec tellus ipsum,
                    finibus a purus quis, aliquam blandit mauris.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <Link to="/about">
                    <h3>About us</h3>

                    <p>
                      <img
                        src={PlaceHolderIcon}
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    malesuada sodales lacus et lacinia. Donec tellus ipsum,
                    finibus a purus quis, aliquam blandit mauris.
                  </p>
                </div>

                <div className="col-md-6">
                  <Link to="/careers">
                    <h3>Careers</h3>

                    <p>
                      <img
                        src={PlaceHolderIcon}
                        alt="Iron Rat Customs Powder Coating icon"
                        className="img-fluid"
                      />
                    </p>
                  </Link>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    malesuada sodales lacus et lacinia. Donec tellus ipsum,
                    finibus a purus quis, aliquam blandit mauris.
                  </p>
                </div>
              </div>

              <div className="visible-sm visible-xs">
                <Link to="/reviews">
                  <h3>Reviews</h3>

                  <p>
                    <img
                      src={Stars}
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
                <Link to="/reviews">
                  <h3>Reviews</h3>

                  <p>
                    <img
                      src={Stars}
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
        <Footer />
      </div>
    );
  }
}

export default Home;
