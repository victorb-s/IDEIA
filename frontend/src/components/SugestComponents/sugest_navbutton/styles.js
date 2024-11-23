import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  width: 93%;
  top: 0;
`;

export const NavButton = styled(FontAwesomeIcon)`
  background: var(--backgroundColor);
  border-radius: 100%;
  border: none;
  color: var(--titleColor);
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  aspect-ratio: 1/1;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;