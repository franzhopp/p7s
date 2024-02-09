import TitleAbout from "../../Components/UI/Item/Title/TitleAbout";
import Cards from "./Cards/Cards";

const About = () => {
  return (
    <section x-comp="About" className="bg-0d1216 py-16">
      <TitleAbout />
      <div className="flex justify-start space-x-5 px-16 py-10 lg:py-0">
        <Cards />
      </div>
    </section>
  );
};

export default About;
