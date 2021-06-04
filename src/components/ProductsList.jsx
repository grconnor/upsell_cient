import fetchAllProducts from "../modules/products";
import React, { useState, useEffect } from "react";
import ProductsCard from "./ProductsCard";
import { Grid } from "semantic-ui-react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchAllProducts();
      setProducts(response);
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