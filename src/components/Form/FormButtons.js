import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 6px 20px;
  cursor: pointer;
  background-color: var(--grayBtn);
  color: var(--textColor);
  transition: all 0.1s linear;

  :hover {
    transform: scale(1.05);
  }
`;

const GreenButton = styled(Button)`
  background-color: var(--greenBtn);
  color: #fff;
`;

const RedButton = styled(Button)`
  background-color: var(--redBtn);
  color: #fff;
`;

export { ButtonWrapper, Button, GreenButton, RedButton };
