import BtnCv from "../../Components/UI/Button/BtnAccessCv/BtnCv";
import FormContact from "../../Components/UI/Form/FormContact";
import TitleContact from "../../Components/UI/Item/Title/TitleContact";

const Contact = () => {
  return (
    <section x-comp={`About`} className={`bg-ffffff`}>
      <div className="">
        <div className={`py-24`}>
          <TitleContact />
          <div className={`flex justify-center`}>
            <BtnCv />
          </div>
          <div className={`flex justify-center py-16`}>
            <div className={`w-1/2`}>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
