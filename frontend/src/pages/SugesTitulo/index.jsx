import SugestaoLista from "../../components/SugestComponents/sugest_lista";
import { HeaderBlue } from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  height: 70vh;
  overflow-y: hidden;
`;

// eslint-disable-next-line react/prop-types
const Sugestoes = ({ topic }) => {
    return (<>
      <HeaderBlue />
      <Container>
        <SugestaoLista topic={topic}/>
      </Container>
      <Footer />
    </>);
};

export default Sugestoes;