import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0;
  background-color: #ffffff;
  margin-bottom: 0px;
`;

 export const Button = styled.button`
  background: none;
  border: none;
  color: #034C8C;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;