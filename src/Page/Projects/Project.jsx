import TitleProject from "../../Components/UI/Item/Title/TitleProject";
import CardsProjects from "./Cards/CardsProjects";

const Projects = () => {
  return (
    <section x-comp="Projects" className=" bg-8b3dff py-16">
      <TitleProject />
      <div className="flex justify-start space-x-5 px-16 py-10 lg:py-0">
        <CardsProjects />
      </div>
    </section>
  );
};

export default Projects;
