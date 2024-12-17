import styled from "styled-components";

export const HeadingContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-right: 17px;

  color: var(--titleColor);
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  font-weight: 300;

  white-space: nowrap;
`;

export const Line = styled.span`
  width: 100%;

  height: 1px;
  position: relative;
  background-color: var(--lineColor);
`;
