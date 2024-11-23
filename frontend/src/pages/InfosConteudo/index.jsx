import ContentEditor from "../../components/InfoComponents/info_content";
import { HeaderRed } from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Informacao = ({ toggleTheme }) => {
  const location = useLocation();
  const { topicPassed } = location.state || {};
  
  return (<>
    <HeaderRed toggleTheme={toggleTheme}/>
    <ContentEditor topicPassed={topicPassed}/>
    <Footer />
  </>)
  }
  
  export default Informacao