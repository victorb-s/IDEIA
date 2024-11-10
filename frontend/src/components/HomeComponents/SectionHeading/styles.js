import styled from "styled-components";

export const HeadingContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Heading = styled.h1`
  margin-right: 17px;

  color: #da251c;
  font-size: 56px;
  font-weight: 300;

  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 48px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
  }
  @media(max-width: 344px) {
    font-size: 32px;
  }
`;

export const Line = styled.span`
  width: 100%;

  height: 1px;
  position: relative;
  background-color: #da251c;
  }
`;
