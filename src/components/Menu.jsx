import React, { Component } from 'react';
import { createOrder } from '../modules/orders';
import { getProducts } from "../modules/products";

class Menu extends Component {
  state = {
    menu: [],
    orderDetails: {}
  }

  componentDidMount = async () => {
    const products = await getProducts();
    this.setState({ menu: products })
  }

  addToOrder = async (event) => {
    let productId = event.target.parentElement.dataset.id
    let result = await createOrder(productId)
    this.setState({ orderDetails: { id: productId, message: result.message } })
  }

  render() {
    const menu = this.state.menu;
    return(
      <>
        { menu.length > 0 && menu.map(item => {
          return (
            <>
              <div id={"product-" + item.id}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </>
          );
        })};
      </>
    )
  }
}

export default Menu;