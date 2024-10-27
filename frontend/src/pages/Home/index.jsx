import Header from "../../components/Header";
import SectionHeading from "../../components/HomeComponents/SectionHeading";
import ProjectNavigation from "../../components/HomeComponents/ProjectNavigation";
import { SectionContainer } from "./styles";
import SectionProjetos from "../../components/HomeComponents/SectionProjetos";

const Home = () => {
  return (
    <>
      <Header />
      <SectionContainer>
        <SectionHeading text="Projetos Recentes" />
        <ProjectNavigation />
        <SectionProjetos></SectionProjetos>
      </SectionContainer>
    </>
  );
};

export default Home;
