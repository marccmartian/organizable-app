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
import { getUserFetch } from "../services/session";
import { UserContext } from "../App";

const Login = () => {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await getUserFetch(formData);

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
        <ButtonWrapper>
          <GreenButton type="submit">Login</GreenButton>
          <FormLink to="/signup">Create an account</FormLink>
          {error && <ErrorText>{error}</ErrorText>}
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default Login;
