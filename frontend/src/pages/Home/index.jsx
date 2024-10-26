import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SectionInicio from "../../components/HomeComponents/SectionInicio"
import { HomeCategorias } from "../../components/HomeCategorias"

const Home = () => {
  return (<>
    <Header/>
      <SectionInicio/>
      <HomeCategorias/>
    <Footer/>
  </>)
}

export default Home