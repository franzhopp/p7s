import ArrowRefresHome from "../Svg/ArrowRefreshHome";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const TitleHome = () => {
  const RefreshPage = () => {
    window.location.reload(false);
  };
  return (
    <section x-comp={`About`} className={`bg-0d1216`}>
      <div className={`flex w-full items-center px-5 sm:px-16`}>
        <div className={`lg:w-1/2`}>
          <h1
            className={`flex justify-start items-center text-8b3dff font-reem text-5xl lg:text-8xl`}
          >
            Design Arbitrator of Exalted Things
          </h1>
          <div className={`flex justify-start mt-5`}>
            <TiSocialInstagramCircular className={`h-20 w-20 text-8b3dff`} />
            <TiSocialLinkedinCircular className={`h-20 w-20 text-8b3dff`} />
            <TiSocialGithubCircular className={`h-20 w-20 text-8b3dff`} />
          </div>
        </div>
      </div>
      <div
        onClick={RefreshPage}
        className={`bg-0d1216 flex justify-end pb-5 pt-60`}
      >
        <ArrowRefresHome />
      </div>
    </section>
  );
};

export default TitleHome;
