import React, { useState, useEffect } from "react";
import Products from "../modules/products";
import ProductsCard from "./ProductsCard";
import { Grid } from "semantic-ui-react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const response = await Products.index();
      if (response?.constructor === Array) {
        setProducts(response);
        setErrorMessage("");
      } else {
        setProducts([]);
        setErrorMessage(response);
      }
    };
    getProducts();
  }, []);

  return (
    <Grid>
      <Grid.Row columns={3}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductsCard product={product} />
            </div>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default ProductsList;