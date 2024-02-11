import BtnNext from "../../Components/UI/Button/BtnNextCarrousel/BtnNext";
import TitleProject from "../../Components/UI/Item/Title/TitleProject";
import CardsProjects from "./Cards/CardsProjects";

const Projects = () => {
  return (
    <section x-comp={`Projects`} className={`bg-8b3dff py-16`}>
      <TitleProject />
      <div
        className={`flex flex-wrap justify-center space-x-0 2xl:space-x-20 px-16`}
      >
        <CardsProjects />
      </div>
      <div className={`flex justify-center items-center pt-10`}>
        <BtnNext />
      </div>
    </section>
  );
};

export default Projects;
