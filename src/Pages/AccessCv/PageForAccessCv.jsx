import HeaderHome from "../../Components/Navigation/Header/HeaderHome";
import TitleAccessForCv from "../../Components/UI/Item/Title/TitleAccessForCv";
import BtnReturnHome from "../../Components/UI/Button/BtnHome/BtnReturnHome";
import Footer from "../../Components/Footer/Footer";
import "./Styles/Image.css";

const PageForAccessCv = () => {
  return (
    <div className={`bg-0d1216 bg-cover bg-no-repeat`}>
      <HeaderHome />
      <div>
        <TitleAccessForCv />
        <div className={`flex flex-col justify-center`}>
          <div className={`flex justify-center mb-96`}>
            <BtnReturnHome />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageForAccessCv;
