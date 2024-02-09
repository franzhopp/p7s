import ArrowRefresHome from "../Svg/ArrowRefreshHome";

const TitleHome = () => {
  return (
    <section x-comp="Home" className="bg-0d1216">
      <div className="flex w-full items-center px-5 sm:px-16">
        <div className="lg:w-1/2">
          <h1 className="flex justify-start items-center text-8b3dff font-reem text-5xl lg:text-8xl">
            Design Arbitrator of Exalted Things
          </h1>
        </div>
      </div>
      <div className="bg-0d1216 flex justify-end pb-10 pt-72">
        <ArrowRefresHome />
      </div>
    </section>
  );
};

export default TitleHome;
