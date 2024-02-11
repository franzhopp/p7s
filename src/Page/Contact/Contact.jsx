import TitleContact from "../../Components/UI/Item/Title/TitleContact";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton";
import FormContact from "../../Components/UI/Form/FormContact";
import BtnCv from "../../Components/UI/Button/BtnAccessCv/BtnCv";

const Contact = () => {
  return (
    <section x-comp={`About`} className={`bg-ffffff`}>
      <div>
        <div className={`py-24`}>
          <TitleContact />
          <div className={`flex justify-center pb-24`}>
            <BtnCv />
          </div>
          <div className={`flex justify-center`}>
            <div className={`w-96 2xl:w-1/4`}>
              <FormContact />
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default Contact;
