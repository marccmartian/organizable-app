import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ErrorText,
  Form,
  FormContainer,
} from "../components/Form/FormElements";
import {
  HorizontalButtonWrap,
  Button,
  GreenButton,
  RedButton,
} from "../components/Form/FormButtons";
import FormInputData from "../components/Form/FormInputData";
import { MainContainer } from "../components/MainContainer";
import Navbar from "../components/Navbar";
import { deleteUserFetch, updateUserFetch } from "../services/session";

import { UserContext } from "../App";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const initialData = {
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  };
  const [formData, setFormData] = useState(initialData);

  const [edit, setEdit] = useState(false);

  const [error, setError] = useState(null);

  const history = useHistory();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnUpdate = async (event) => {
    event.preventDefault();
    const { data, error } = await updateUserFetch(user, formData);

    if (data) {
      setUser(data);
      setEdit(false);
    } else {
      setError(error);
    }
  };

  const handleOnDelete = async (event) => {
    event.preventDefault();
    const { data, error } = await deleteUserFetch(user);

    if (data) {
      history.replace("/");
      setUser(null);
    } else {
      setError(error);
    }
  };

  return (
    <MainContainer>
      <Navbar />
      <FormContainer>
        <Form>
          <FormInputData
            label="Username"
            type="text"
            id="username"
            disabled={!edit}
            value={formData.username}
            onChange={handleOnChange}
          />
          <FormInputData
            label="Email"
            type="email"
            id="email"
            disabled={!edit}
            value={formData.email}
            onChange={handleOnChange}
          />
          <FormInputData
            label="First Name"
            type="text"
            id="firstName"
            disabled={!edit}
            value={formData.firstName}
            onChange={handleOnChange}
          />
          <FormInputData
            label="Last Name"
            type="text"
            id="lastName"
            disabled={!edit}
            value={formData.lastName}
            onChange={handleOnChange}
          />
          <HorizontalButtonWrap>
            {edit ? (
              <GreenButton onClick={handleOnUpdate}>Save</GreenButton>
            ) : (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(true);
                }}
              >
                Edit
              </Button>
            )}
            {edit ? (
              <RedButton
                onClick={(e) => {
                  e.preventDefault();
                  setEdit(false);
                  setFormData(initialData);
                }}
              >
                Cancel
              </RedButton>
            ) : (
              <RedButton onClick={handleOnDelete}>Delete</RedButton>
            )}
          </HorizontalButtonWrap>
          {error && <ErrorText>{error}</ErrorText>}
        </Form>
      </FormContainer>
    </MainContainer>
  );
};

export default Profile;
