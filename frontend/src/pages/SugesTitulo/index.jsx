import Header from "../../components/sugest_header"; 
import SugestaoLista from "../../components/sugest_lista";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const SugesTitulo = () => {
    return (
      <Container>
        <Header />
        <SugestaoLista />
      </Container>
    );
};

export default SugesTitulo;