import styled from "styled-components";

export const ListaContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  margin-top: 2px;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  min-height: 200px
`;

export const TituloLista = styled.div`
  padding: 20px;
  margin: 10px 0;

  color: var(--blueSectionText);
  font-weight: bold;
  font-size: clamp(1rem, 2vw, 1.6rem);
  font-family: 'Roboto', sans-serif;
  text-align: center;
  border-bottom: 2px solid var(--blueSectionLineColor);
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  width: 100%;
`;