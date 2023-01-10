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
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;

export const TextContainer = styled.p`
  line-height: 10px;

  /* margin-top: 40px; */
  font-size: 24px;
  color: red;
  /* padding-bottom: 40px; */

  @media screen and (max-width: 800px) {
    padding-bottom: 40px;
    /* width: 300px; */
    margin-top: 40px;
  }
`;
