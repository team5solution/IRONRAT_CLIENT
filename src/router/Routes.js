import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Products from "../components/products/index";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
    </Switch>
  );
};
