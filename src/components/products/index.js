import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../action/products";
import { fetchTheme } from "../../action/themes";
import { Loading, isEmpty, getTheme } from "../../common";
import ProductsItem from "./productsItems";
import PropTypes from "prop-types";
import NavBar from "../navBar";
import Footer from "../footer";

class Products extends Component {
  componentDidMount() {
    if (this.props.products.productItems.length === 0) {
      this.props.fetchProducts();
    }
    if (isEmpty(this.props.theme.info)) {
      this.props.fetchTheme();
    }
  }

  render() {
    const {
      products: { isFetching, productItems },
      theme: { info }
    } = this.props;

    const { backgroundStyle, linkStyle, navStyle, buttonStyle } = getTheme(
      info
    );

    if (isFetching) {
      return <Loading />;
    }
    const productList = productItems.map((item, i) => {
      if (item.type === "product") {
        return (
          <ProductsItem
            key={i}
            {...item}
            btnStyle={buttonStyle}
            bgStyle={backgroundStyle}
          />
        );
      }
    });
    const serviceList = productItems.map((item, i) => {
      if (item.type === "service") {
        return (
          <ProductsItem
            key={i}
            {...item}
            btnStyle={buttonStyle}
            bgStyle={backgroundStyle}
          />
        );
      }
    });
    const solutionList = productItems.map((item, i) => {
      if (item.type === "solution") {
        return (
          <ProductsItem
            key={i}
            {...item}
            btnStyle={buttonStyle}
            bgStyle={backgroundStyle}
          />
        );
      }
    });

    return (
      <div style={backgroundStyle}>
        <NavBar navStyle={navStyle} btnStyle={buttonStyle} />
        <div className="container">
          <p>
            Below you will see some of the services, products and solutions that
            we offer!
          </p>
          <h2 className="mb-5 mt-5">Our Services</h2>
          <div className="row">{serviceList}</div>
          <h2 className="mb-5 mt-5">Our Products</h2>
          <hr />
          <div className="row">{productList}</div>
          <h2 className="mb-5 mt-5">Our Solutions</h2>
          <div className="row">{solutionList}</div>
        </div>
        <Footer bgStyle={backgroundStyle} linkStyle={linkStyle} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    theme: state.theme
  };
}
Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  fetchTheme: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchProducts, fetchTheme }
)(Products);
