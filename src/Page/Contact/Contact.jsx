import TitleContact from "../../Components/UI/Item/Title/TitleContact";
import BtnCv from "../../Components/UI/Button/BtnAccessCv/BtnCv";
import FormContact from "../../Components/UI/Form/FormContact";
import BackToTopButton from "../../Components/UI/ScrollToTop/BackToTopButton";

const Contact = () => {
  return (
    <section x-comp={`About`} className={`bg-ffffff`}>
      <div>
        <div className={`py-24`}>
          <TitleContact />
          <div className={`flex justify-center py-10 2xl:py-0`}>
            <BtnCv />
          </div>
          <div className={`flex justify-center py-16`}>
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
