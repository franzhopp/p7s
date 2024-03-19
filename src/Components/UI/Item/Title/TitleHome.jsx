import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import ArrowRefresHome from "../Svg/ArrowRefreshHome";

const TitleHome = () => {
  const RefreshPage = () => {
    window.location.reload(false);
  };
  return (
    <section x-comp={`About`} className={`bg-0d1216`}>
      <div className={`flex w-full items-center px-5 sm:px-16`}>
        <div className={`lg:w-1/2`}>
          <h1
            data-aos="zoom-out-right"
            className={`flex justify-start items-center text-8b3dff font-reem text-5xl lg:text-8xl`}
          >
            Design Arbitrator of Exalted Things
          </h1>
          <div className={`flex justify-start mt-5`}>
            <a
              href="https://instagram.com/lfrnz.dev/"
              rel="noreferrer"
              target="_blank"
            >
              <TiSocialInstagramCircular
                className={`text-8b3dff h-20 w-20 transition-transform transform hover:scale-90`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/louisa-hadjili-a935982b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              rel="noreferrer"
              target="_blank"
            >
              <TiSocialLinkedinCircular
                className={`text-8b3dff h-20 w-20 transition-transform transform hover:scale-90`}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        onClick={RefreshPage}
        className={`bg-0d1216 flex justify-end pb-8 pt-60`}
      >
        <ArrowRefresHome />
      </div>
    </section>
  );
};

export default TitleHome;
