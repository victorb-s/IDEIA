import ContentEditor from "../../components/InfoComponents/info_content";
import { HeaderRed } from "../../components/Header";
import Footer from "../../components/Footer";

// eslint-disable-next-line react/prop-types
const Informacao = ({toggleTheme}) => {
    return (<>
      <HeaderRed toggleTheme={toggleTheme}/>
      <ContentEditor />
      <Footer />
    </>)
  }
  
  export default Informacao