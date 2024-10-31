import SugestaoLista from "../../components/SugestComponents/sugest_lista";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const SugesTitulo = () => {
    return (
      <Container>
        <SugestaoLista />
      </Container>
    );
};

export default SugesTitulo;