import { NavLink } from "react-router-dom";

const TitleContact = () => {
  return (
    <div className={`flex flex-col text-center px-16`}>
      <div data-aos="zoom-out-right">
        <h1 className={`text-0d1216 font-reem text-3xl lg:text-5xl`}>
          Contactez-moi
        </h1>
        <p className={`text-0d1216 font-jacques text-xl lg:text-3xl`}>
          Travaillons ensemble, vous pouvez également trouver mes réseaux
          sociaux{" "}
          <NavLink
            className={`text-8b3dff underline transition hover:opacity-80`}
          >
            en cliquant ici
          </NavLink>
          .
        </p>
      </div>
    </div>
  );
};

export default TitleContact;
