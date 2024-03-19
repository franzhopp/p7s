import TitleSkills from "../../Components/UI/Item/Title/TitleSkills";
import Cards from "./Cards/CardsSkills";

const Skills = () => {
  return (
    <>
      <section
        x-comp={`Skills`}
        className={`bg-0d1216 overflow-x-hidden py-16`}
      >
        <TitleSkills />
        <div
          className={`flex flex-wrap justify-center 2xl:justify-start space-x-0 2xl:space-x-20 px-16 pt-16`}
        >
          <Cards />
        </div>
      </section>
      <div id="contact"></div>
    </>
  );
};

export default Skills;
