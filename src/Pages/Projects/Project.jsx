import TitleProject from "../../Components/UI/Item/Title/TitleProject";
import MainCarousel from "./Carousel/MainCarousel";

const Projects = () => {
  return (
    <>
      <section x-comp={`Projects`} className={`bg-8b3dff py-16`}>
        <div id="projets"></div>
        <TitleProject />
        <div
          className={`flex flex-wrap justify-center space-x-0 2xl:space-x-20 px-16`}
        >
          <MainCarousel />
        </div>
      </section>
    </>
  );
};

export default Projects;
