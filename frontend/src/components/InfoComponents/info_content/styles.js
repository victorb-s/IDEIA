import styled from "styled-components";
import JCRainbow from "../../../assets/infoPageRainbow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  height: 72vh;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${JCRainbow});
  background-size: cover;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  width: 93%;
  top: -20px;
  @media (max-width: 1024px) {
    top: -20px;
  }
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

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 768px;
  background-color: var(--backgroundColor);
  padding: 28px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  gap: 24px;

  & #title {
    font-size: 24px;
    height: 66px;
    @media (max-width: 1024px) {
      font-size: 21px;
      height: 50px;
    }
  }


  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 50px;
  border-radius: 5px;
  padding: 0 16px;

  display: flex;
  flex-grow: 1;

  border: none;
  background: var(--formBackgroundColor);
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  border-radius: 5px;
  transition: background-color 0.3s ease;
  height: 50px;
  padding: 0 16px;
  outline: 1px solid var(--formOutlineColor);


  &::placeholder {
    color: var(--buttonTextColor);
    opacity: 0.6;
  }
  &:placeholder-shown {
    outline: none;
  }
  color: var(--buttonTextColor);

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    height: 45px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  background-color: var(--formBackgroundColor);

  color: var(--buttonTextColor);
  border: none;
  border-radius: 5px;
  padding: 10px 16px;
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  resize: none;
  outline: 1px solid var(--formOutlineColor);
  
  &::placeholder {
    color: var(--buttonTextColor);
    opacity: 0.6;
  }

  &:placeholder-shown {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: flex-end;

  width: 33%;
  height: 50px;
  padding-left: 1vw;

  background-color: var(--buttonColor);
  color: var(--buttonTextColor);
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  border: 1px solid var(--buttonOutlineColor);

  border-radius: 30px;

  cursor: pointer;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding-left: 10px;
    height: 38px;
  }
`;

export const ArrowCircle = styled.div`
  background: var(--buttonArrowCircleColor);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  aspect-ratio: 1 / 1;
  width: 48px;

  @media (max-width: 768px) {
  }

  @media (max-width: 425px) {
    width: 36px;
  }
`;

export const IconArrow = styled(FontAwesomeIcon)`
  color: var(--buttonTextColor);
  font-weight: bold;
  font-size: clamp(0.8rem, 2vw, 1.2rem);
`;
