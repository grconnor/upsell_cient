import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import SpecificProduct from "./components/SpecificProduct";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/products/:id" component={SpecificProduct} />
      </Switch>
    </>
  );
}

export default App;
