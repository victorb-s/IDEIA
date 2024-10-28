import Header from "../../components/Header";
import Footer from "../../components/Footer";

import SectionInicio from "../../components/HomeComponents/SectionInicio";
import TrendingTopics from "../../components/HomeComponents/TrendingTopics";
import { HomeCategorias } from "../../components/HomeComponents/HomeCategorias";

import { SectionContainer } from "./styles";
import SectionHeading from "../../components/HomeComponents/SectionHeading";
import ProjectNavigation from "../../components/HomeComponents/ProjectNavigation";
import SectionProjetos from "../../components/HomeComponents/SectionProjetos";

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
        <SectionProjetos  />
      </SectionContainer>
      <Footer />
    </>
  );
};

export default Home;
