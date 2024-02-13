import FormAccessForCv from "../../Form/FormAccessForCv/FormAccessForCv";

const TitleAccessForCv = () => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <div className={`flex flex-col justify-center items-center`}>
        <h1
          data-aos="zoom-out-right"
          className={`text-8b3dff font-reem text-center text-2xl lg:text-5xl`}
        >
          Entrez le code pour accéder au CV
          <div className={`flex justify-center`}>
            <span className={`bg-8b3dff absolute w-32 h-1`}></span>
          </div>
        </h1>
        <div data-aos="fade-in" className="pt-7">
          <FormAccessForCv />
        </div>
      </div>
    </div>
  );
};

export default TitleAccessForCv;
