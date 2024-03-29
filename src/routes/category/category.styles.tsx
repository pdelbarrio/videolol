import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-gap: 15px; */
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const CategoryMainContainer = styled.div`
  @media screen and (max-width: 800px) {
    align-items: center;
    padding-left: 20px;
  }
`;
