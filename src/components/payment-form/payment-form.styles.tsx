import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;

  @media screen and (max-width: 800px) {
    margin: 0 20px 0 20px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: 50vw;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const TextContainer = styled.p`
  line-height: 20px;
  font-size: 24px;
  color: red;

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
