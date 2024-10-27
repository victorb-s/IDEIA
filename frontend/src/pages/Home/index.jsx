import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionInicio from "../../components/HomeComponents/SectionInicio";
import { HomeCategorias } from "../../components/HomeCategorias";
import TrendingTopics from "../../components/TrendingTopics";
import SectionProjetos from "../../components/HomeComponents/SectionProjetos";
import SectionHeading from "../../components/HomeComponents/SectionHeading";
import ProjectNavigation from "../../components/HomeComponents/ProjectNavigation";
import { SectionContainer } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <SectionInicio />
      <TrendingTopics />
      <HomeCategorias />
      <SectionContainer>
        <SectionHeading text="Projetos Recentes" />
        <ProjectNavigation />
        <SectionProjetos></SectionProjetos>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default Home;
