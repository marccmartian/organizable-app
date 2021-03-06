import { FormInput, FormLabel } from "./FormElements";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

const FormInputData = ({
  label,
  type,
  id,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <InputContainer>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <FormInput
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        disabled={disabled && "disabled"}
      />
    </InputContainer>
  );
};

export default FormInputData;
