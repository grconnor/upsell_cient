import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link , BrowserRouter, useHistory, useLocation } from "react-router-dom";
import { Button, Form, Container, Message } from "semantic-ui-react";
import { auth } from '../modules/auth';

const LoginForm = () => {
  const [message, setMessage] = useState();
  const [registrationMessage, setRegistrationMessage] = useState();
  let location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const login = async (event, dispatch, history) => {
    event.preventDefault();
    try {
      const email = event.target.email.value;
      const password = event.target.password.value;

      const response = await auth.signIn(email, password);
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          authenticated: response.success,
          currentUser: response.data,
        },
      });

      history.replace({ pathname: "/" });
    } catch (error) {
      setMessage(error.response.data.errors[0]);
    }
  };

  useEffect(() => {
    if (location.state) {
      setRegistrationMessage(location.state.message);
    }
  }, [location]);

  return (
    <>
      <Container id="form-container">
        {registrationMessage && (
          <Message positive id="registration-message">
            <Message.Header>
              {registrationMessage}. Your registration was successful, please log in to confirm.
            </Message.Header>
          </Message>
        )}
        <Form
          onSubmit={(event) => login(event, dispatch, history)}
          id="login-form"
        >
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Email:"
            placeholder="email"
            type="email"
            name="email"
            id="login-email"
            required
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password:"
            placeholder="password"
            type="password"
            name="password"
            required
            id="login-password"
          />
          <Button id="login-submit" type="submit" content="Submit" primary />
        </Form>
        {message && (
          <Message negative id="negative-message">
            <Message.Header>
              {message}
            </Message.Header>
          </Message>
        )}
      </Container>

      <Container>
        <BrowserRouter>
          <Link to="/register" id="login-register">
            Don't have an account yet? Sign up now.
          </Link>
        </BrowserRouter>

        {message && (
          <Message id="onlogin-message" color="red">
            {message}
          </Message>
        )}
      </Container>
    </>
  );
};

export default LoginForm;
