import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../action/products";
import { Loading } from "../../common";
import ProductsItem from "./productsItems";

const m = ({ products }) => ({ products });

@connect(
  m,
  { fetchProducts }
)
export default class Products extends Component {
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
      <div className="container">
        <div className="countries-container">
          {productItems.map((item, i) => (
            <ProductsItem key={i} {...item} />
          ))}
        </div>
      </div>
    );
  }
}
