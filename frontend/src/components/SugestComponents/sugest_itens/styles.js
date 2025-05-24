import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ItemContainer = styled.div`
  width: 100%;
  max-width: 750px;
  
  border-radius: 4px;
  
  display: flex;
  align-items: center;

  position: relative;
  padding-right: 40px;
  padding: 10px 20px;
  margin: 8px 0;
  
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  cursor: pointer;
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 15px;
  font-size: clamp(0.8rem, 2vw, 1.2rem);

  color: var(--blueSectionText);

  transition: 0.1s ease-in-out;

  &:hover{
    color: var(--blueSectionTextHover);
  }
`;

export const ItemText = styled.p`
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: var(--textColor);
  font-weight: 600;
  margin: 0;
  flex: 1;
  text-align: left;

`;