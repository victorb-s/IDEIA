import styled from "styled-components";

export const ProjNavContainer = styled.nav`
margin-top: 10px;
  width: 100%;
  height: 4vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 1px var(--trendingDivider);
`;

export const Input = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--textColor);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  & input {
    border: none;
    font-size: 1rem;

    background-color: var(--backgroundColor2);
    color: var(--textColor);
    &::placeholder {
      color: var(--textColor);
      opacity: 0.5;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
  & input:focus {
    outline: none;
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 10px;

  color: var(--textColor);

  & button {
    all: unset;
    font-size: 1rem;
    cursor: pointer;
  }
`;
