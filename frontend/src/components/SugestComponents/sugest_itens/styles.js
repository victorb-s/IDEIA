import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ItemContainer = styled.div`
  width: 100%;
  max-width: 750px;
  
  background-color: #ffff;
  border-radius: 4px;
  
  display: flex;
  align-items: center;

  position: relative;
  padding-right: 40px;
  padding: 10px 20px;
  margin: 8px 0;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 15px;
  font-size: clamp(0.6rem, 2vw, 1.2rem);

  color: #034C8C;
  cursor: pointer;

  transition: 0.1s ease-in-out;

  &:hover{
    color: #1a5bb8;
  }
`;

export const ItemText = styled.p`
  font-size: clamp(0.6rem, 2vw, 1.1rem);
  color: #333;
  font-weight: bold;
  margin: 0;
  flex: 1;
  text-align: left;

`;