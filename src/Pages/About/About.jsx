import TitleAbout from "../../Components/UI/Item/Title/TitleAbout";
import Cards from "./Cards/CardsAbout";

const About = () => {
  return (
    <>
      <section x-comp={`About`} className={`bg-0d1216 py-16`}>
        <TitleAbout />
        <div
          className={`flex flex-wrap justify-center 2xl:justify-start space-x-0 2xl:space-x-20 px-16 pt-16`}
        >
          <Cards />
        </div>
      </section>
      <div id="projets"></div>
    </>
  );
};

export default About;
