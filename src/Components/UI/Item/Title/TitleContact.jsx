import BtnCv from "../../Button/BtnAccessCv/BtnCv";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const TitleContact = () => {
  return (
    <div className="flex flex-col text-center h-36 px-16">
      <h1 className="font-reem text-5xl text-0d1216">Contactez-moi</h1>
      <p className="text-0d1216 text-3xl font-jacques">
        Travaillons ensemble, vous pouvez également trouver mes réseaux sociaux
        !
      </p>
      <div className="flex justify-center mt-5">
        <TiSocialInstagramCircular className="h-10 w-10 text-0d1216" />
        <TiSocialLinkedinCircular className="h-10 w-10 text-0d1216" />
        <TiSocialGithubCircular className="h-10 w-10 text-0d1216" />
      </div>
      <div className="mt-8">
        <BtnCv />
      </div>
    </div>
  );
};

export default TitleContact;
