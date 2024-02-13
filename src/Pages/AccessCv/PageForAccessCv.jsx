import Footer from "../../Components/Footer/Footer";
import HeaderHome from "../../Components/Navigation/Header/HeaderHome";
import BtnReturnHome from "../../Components/UI/Button/BtnHome/BtnReturnHome";
import FormAccessForCv from "../../Components/UI/Form/FormAccessForCv/FormAccessForCv";
import LogoFooter from "../../Components/UI/Item/Svg/LogoFooter";
import TitleAccessForCv from "../../Components/UI/Item/Title/TitleAccessForCv";

import "./Styles/Image.css";

const PageForAccessCv = () => {
  return (
    <div className={`louisaimageblur bg-no-repeat bg-cover`}>
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
