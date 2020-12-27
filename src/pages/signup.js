import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FormContainer,
  Form,
  FormLink,
  ErrorText,
} from "../components/Form/FormElements";
import { ButtonWrapper, GreenButton } from "../components/Form/FormButtons";
import FormInputData from "../components/Form/FormInputData";
import { createUserFetch } from "../services/session";
import { UserContext } from "../App";

const Signup = () => {
  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await createUserFetch(formData);

    if (data) {
      setUser(data);
      history.replace("/profile");
    } else {
      setError(error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <FormInputData
          id="username"
          label="Usename"
          type="text"
          value={formData.username}
          onChange={handleOnChange}
        />
        <FormInputData
          id="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <FormInputData
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <FormInputData
          id="firstName"
          label="Firstname"
          type="text"
          value={formData.firstname}
          onChange={handleOnChange}
        />
        <FormInputData
          id="lastName"
          label="Lastname"
          type="text"
          value={formData.lastname}
          onChange={handleOnChange}
        />
        <ButtonWrapper>
          <GreenButton type="submit">Create</GreenButton>
          <FormLink to="/">or login with existing user</FormLink>
          {error && <ErrorText>{error}</ErrorText>}
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default Signup;
