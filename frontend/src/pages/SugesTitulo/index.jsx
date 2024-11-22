import SugestaoLista from "../../components/SugestComponents/sugest_lista";
import { HeaderBlue } from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  min-height: 72vh;
  overflow-y: auto;
`;

// eslint-disable-next-line react/prop-types
const Sugestoes = ({ topic, handleSelectTitle, toggleTheme}) => {
    return (<>
      <HeaderBlue toggleTheme={toggleTheme}/>
      <Container>
        <SugestaoLista topic={topic} handleSelectTitle={handleSelectTitle}/>
      </Container>
      <Footer />
    </>);
};

export default Sugestoes;