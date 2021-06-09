import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header, Menu, Grid, Button } from "semantic-ui-react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home")
  const authenticated = useSelector((state) => state.authenticated);
  const currentUser = useSelector((state) => state.currentUser);
  const handleItemClick = ({ name }) => {
    setActiveItem(name)
  }
  return (
    <Header as="h1" id="navbar-header">
      <Grid id="navbar-grid">
        <Grid.Row columns={3} id="navbar-name">
          <Grid.Column id="navbar-intle" width={2} textAlign="center">
            Intle
          </Grid.Column>
          <Grid.Column id="navbar-upsell" width={2} textAlign="center">
            Upsell
          </Grid.Column>
          <Grid.Column id="empty-grid" width={1}></Grid.Column>
          <Grid.Column id="navbar-slogan" width={6} textAlign="right">
            Your Gateway Destination
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Header.Subheader id="navbar-navigation">
        <Menu id="navbar-menu">
          <Menu.Item
            id="navbar-menu-home"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/" }}
            >
              Home
            </Menu.Item>
            <Menu.Item
            id="navbar-menu-cart"
            name="cart"
            active={activeItem === "cart"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/cart" }}
            >
              My Cart
            </Menu.Item>
            <Menu.Item
            id="navbar-menu-contact"
            name="contact"
            active={activeItem === "contact"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/contact" }}
            >
              Contact Us
            </Menu.Item>
            
            {authenticated ? (
              currentUser.role !== "subscriber" && (
                <Menu.Item
                  id="navbar-menu-sub"
                  position="right"
                  name="become-sub"
                  active={activeItem === "become-sub"}
                  as={Link}
                  to={{ pathname: "/become-subscriber" }}
                  inverted
                >
                  Subscribe
                </Menu.Item>
              )
            ) : (
              <Menu.Item position="right">
                <Button
                  className="ui inverted button"
                  id="navbar-menu-login"
                  color="black"
                  name="login"
                  active={activeItem === "login"}
                  as={Link}
                  to={{ pathname: "/login" }}
                >
                  Login
                </Button>
                {/* <Menu.Item></Menu.Item> */}
                <Button
                  className="ui inverted button"
                  id="navbar-menu-sign-up"
                  color="black"
                  name="sign-up"
                  active={activeItem === "sign-up"}
                  as={Link}
                  to={{ pathname: "/signup" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            )}
        </Menu>
      </Header.Subheader>
    </Header>
  );
};

export default Navbar;
