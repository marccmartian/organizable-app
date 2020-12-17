import React from "react";
import { FormInput, FormLabel } from "./FormElements";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

const FormInputData = ({ label, type, id }) => {
  return (
    <InputContainer>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormInput id={id} type={type} />
    </InputContainer>
  );
};

export default FormInputData;
