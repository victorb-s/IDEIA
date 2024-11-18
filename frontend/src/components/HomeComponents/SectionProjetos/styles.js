import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1%;
  fl & .sem-projeto {
    font-size: 1.5em;
    color: #555;
  }
  margin-bottom: 50px;
  @media (max-width: 768px) {
    gap: 4%;
  }
  @media (max-width: 425px) {
    
    justify-content: center;
    gap: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  max-width: 24%;
  gap: 13px;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0px 14px 100px rgba(0, 0, 0, 0.1);
  }
  margin: 10px 0;
  @media (max-width: 1024px) {
    max-width: 32%;
  }
  @media (max-width: 768px) {
    max-width: 46%;
  }
  @media (max-width: 425px) {
    max-width: 80%;
    margin-bottom: 3vh;
  }
`;

export const CardImg = styled.div`
  div {
    height: 180px;
    display: flex;
    padding: 15px;
    background-color: #f5f5f5;
    font-weight: 600;
    font-size: clamp(0.6rem, 2vw, 0.8rem);
  }
`;

export const CardInfos = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 13px;

  h2 {
    font-size: clamp(0.7rem, 2vw, 0.9rem);
    color: #da251c;
    text-align: justify;
  }

  h1 {
    font-size: clamp(0.8rem, 2vw, 1rem);
    color: #333;
  }
`;
