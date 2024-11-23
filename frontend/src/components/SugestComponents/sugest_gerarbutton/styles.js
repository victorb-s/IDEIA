import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--blueHeaderIcons);
  color: white;
  font-size: clamp(0.5rem, 2vw, 0.8rem);
  font-family: 'Roboto' , sans-serif;
  padding: 8px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin: 20px auto;

  &:hover {
    background-color: var(--blueSectionTextHover);
  }
`;