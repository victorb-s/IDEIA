import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  text-align: center;
  fl & .sem-projeto {
    font-size: 1.5em;
    color: #555;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const CardImg = styled.div`
  div {
    width: 280px;
    height: 200px;
    display: flex;
    text-align: justify;
    padding: 30px;
    background-color: #f5f5f5;
    font-weight: 600;
  }
`;

export const CardInfos = styled.div`
  padding: 16px;
  height: auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 0.75rem;
    margin: 0.5em 0;
    color: #da251c;
    text-align: justify;
    max-width: 200px;
  }

  h1 {
    font-size: 1rem;
    margin: 0.5em 0;
    color: #333;
    text-align: justify;
    max-width: 200px;
  }
`;
