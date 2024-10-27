import Header from "../../components/Header"
import Footer from "../../components/Footer"
import SectionInicio from "../../components/HomeComponents/SectionInicio"
import { HomeCategorias } from "../../components/HomeCategorias"
import TrendingTopics from "../../components/TrendingTopics"

const Home = () => {
  return (<>
    <Header/>
    <SectionInicio/>
    <TrendingTopics/>
    <HomeCategorias/>
    <Footer/>
  </>)
}

export default Home