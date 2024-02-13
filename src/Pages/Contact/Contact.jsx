import { NavLink } from "react-router-dom";
import TitleContact from "../../Components/UI/Item/Title/TitleContact";
import FormContact from "../../Components/UI/Form/FormContact/FormContact";
import BtnCv from "../../Components/UI/Button/BtnAccessCv/BtnCv";

const Contact = () => {
  return (
    <section x-comp={`About`} className={`bg-ffffff`}>
      <div>
        <div className={`py-16`}>
          <TitleContact />
          <NavLink to={`/access`} className={`flex justify-center py-16`}>
            <BtnCv />
          </NavLink>
          <div className={`flex justify-center`}>
            <div className={`w-96 2xl:w-1/4`}>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
