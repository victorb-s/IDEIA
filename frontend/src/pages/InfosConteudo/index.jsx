import ContentEditor from "../../components/InfoComponents/info_content";
import { HeaderRed } from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

const Informacao = () => {
  const location = useLocation();
  const { topicPassed } = location.state || {};
  console.log(location.state);

  return (<>
    <HeaderRed />
    <ContentEditor topicPassed={topicPassed}/>
    <Footer />
  </>)
  }
  
  export default Informacao