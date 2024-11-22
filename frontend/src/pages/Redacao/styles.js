import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 40px auto;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
