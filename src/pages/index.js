import React from "react";
import { FormContainer, Form, FormLink } from "../components/Form/FormElements";
import { ButtonWrapper, GreenButton } from "../components/Form/FormButtons";
import FormInputData from "../components/Form/FormInputData";

const Login = () => {
  return (
    <FormContainer>
      <Form>
        <FormInputData id="username" label="Usename" type="text" />
        <FormInputData id="password" label="Password" type="password" />
        <ButtonWrapper>
          <GreenButton>Login</GreenButton>
          <FormLink>Create an account</FormLink>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default Login;
