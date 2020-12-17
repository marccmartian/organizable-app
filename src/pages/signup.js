import React from "react";
import { FormContainer, Form, FormLink } from "../components/Form/FormElements";
import { ButtonWrapper, GreenButton } from "../components/Form/FormButtons";
import FormInputData from "../components/Form/FormInputData";

const Signup = () => {
  return (
    <FormContainer>
      <Form>
        <FormInputData id="username" label="Usename" type="text" />
        <FormInputData id="password" label="Password" type="password" />
        <FormInputData id="email" label="Email" type="email" />
        <FormInputData id="firstName" label="Firstname" type="text" />
        <FormInputData id="lastName" label="Lastname" type="text" />
        <ButtonWrapper>
          <GreenButton>Create</GreenButton>
          <FormLink>or login with existing user</FormLink>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default Signup;
