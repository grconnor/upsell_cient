import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../modules/products";
import { Container } from "semantic-ui-react";

const SpecificProduct = () => {
  const [product, setProduct] = useState({});
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      const response = await Products.show(id);
      if (response.id) {
        setProduct(response)
      } else {
        setMessage(response);
      }
    };
    getSingleProduct();
  }, [id]);

  return (
    <>
      {message ? (
        <p id="error-message-specific-product">{message}</p>
      ) : (
        <Container id="specific-product-container">
          <div id="specific-product-text">
            <h1 id="specific-product-name">{product.name}</h1>
            <p id="specific-product-description">{product.description}</p>
            <div id="specific-product-price">{product.price}</div>
          </div>
        </Container>
      )}
    </>
  );
};

export default SpecificProduct;