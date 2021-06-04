import ProductList from "./components/ProductsList";
import React, { Component } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          <Navbar />
          <ProductList />
        </div>
      </>
    );
  }
}

export default App;
