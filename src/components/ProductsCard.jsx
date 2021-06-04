import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon } from "semantic-ui-react";

const ProductsCard = ({ product }) => {
  return (
    <Card as={Link} to={`/products/${product.id}`}>
      <Card.Content>
        <Card.Header>
          {product.name}
        </Card.Header>
        <Card.Description>
          {product.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name="tag" />
          {product.price}
        </div>
      </Card.Content>
    </Card>
  );
};

export default ProductsCard;
