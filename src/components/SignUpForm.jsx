import React, { useState } from "react";
import { Button, Form, Container, Message } from "semantic-ui-react";
import { auth } from "../modules/auth";
import { useHistory } from "react-router-dom";

const SignUpForm = () => {
  const [failureMessage, setFailureMessage] = useState("");
  const history = useHistory();
  const signUp = async (event, history) => {
    event.preventDefault();
    try {
      const email = event.target.email.value;
      const password = event.target.password.value;
      const password_confirmation = event.target.passwordConfirmation.value;
      const response = await auth.signUp({
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      });
      history.replace("/login", { message: response.data.status });
    } catch (error) {
      setFailureMessage(error.response.data.errors.full_messages[0]);
    }
  };

  return (
    <Container>
      <Form onSubmit={(event) => signUp(event, history)}>
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Email:"
          placeholder="email"
          name="email"
          type="email"
          id="email"
          required
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Password:"
          placeholder="password"
          name="password"
          type="password"
          id="password"
          required
        />

        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Password confirmation:"
          placeholder="password"
          name="password-confirmation"
          type="password"
          id="password-confirmation"
          required
        />
        <Button id="Submit" content="Submit" primary />
      </Form>
      {failureMessage && (
        <Message negative>
          <Message.Header>{failureMessage}</Message.Header>
        </Message>
      )}
    </Container>
  );
};

export default SignUpForm;
