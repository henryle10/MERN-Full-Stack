import React from 'react';
import './App.css';
import { Redirect, Router, Link } from "@reach/router";

import NotFound from "./views/NotFound"
import NewProduct from "./views/NewProduct"
import Products from "./views/Products"


function App() {
  return (
    <div className="App">
      <h2>Product Manager</h2>
      <Link to="/products">All Products</Link>{" "}
      <Link to="/product/new">New Product</Link>
      <Router>
        <Redirect from="/" to="/products" noThrow="true" />
        <NotFound default />
        <NewProduct path="/product/new" />
        <Products path="/products" />
      </Router>
    </div >
  );
}

export default App;
