import { Link } from "react-scroll";

const TitleContact = () => {
  return (
    <div id="contact" className={`flex flex-col text-center px-16 py-10`}>
      <div data-aos="zoom-out-right">
        <h1 className={`text-0d1216 font-reem text-3xl lg:text-5xl`}>
          Contactez-moi
        </h1>
        <p className={`text-0d1216 font-jacques text-xl lg:text-3xl`}>
          Travaillons ensemble, vous pouvez également trouver mes réseaux
          sociaux{" "}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`text-8b3dff underline transition hover:opacity-80`}
          >
            en cliquant ici
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default TitleContact;
