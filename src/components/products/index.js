import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../action/products";
import { Loading } from "../../common";
import ProductsItem from "./productsItems";
import PropTypes from "prop-types";
import NavBar from "../navBar";
import Footer from "../footer";

/*const m = ({ products }) => ({ products });

@connect(
  m,
  { fetchProducts }
)*/
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {
      products: { isFetching, productItems }
    } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div>
        <NavBar />
        <div className="products-container">
          {productItems.map((item, i) => (
            <ProductsItem key={i} {...item} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}
Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
