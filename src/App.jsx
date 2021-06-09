import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom";

import { persistLogin } from "./modules/auth";

import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import ProductsList from "./components/ProductsList";
import SpecificProduct from "./components/SpecificProduct";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    persistLogin(dispatch);
  }, []);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/products/:id" component={SpecificProduct} />
        <Route exact path="/login" component={LoginForm} />

      </Switch>
    </>
  );
}

export default App;
