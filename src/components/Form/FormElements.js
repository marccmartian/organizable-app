import styled from "styled-components";

export const FormContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
`;

export const Form = styled.form`
  width: 412px;
  background-color: var(--bgForm);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 50px 94px;
`;

export const FormLabel = styled.label`
  color: var(--textColor);
  font-weight: 700;
  margin-bottom: 6px;
`;

export const FormInput = styled.input`
  border: 1px solid var(--ligthBlue);
  border-radius: 3px;
  padding: 6px;
  font-size: 15px;
`;

export const FormLink = styled.a`
  text-decoration: none;
  color: var(--ligthBlue);
  font-size: 14px;
  cursor: pointer;
  margin-top: 17px;
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 1rem;
`;
