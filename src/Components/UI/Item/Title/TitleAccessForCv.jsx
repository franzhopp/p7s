import FormAccessForCv from "../../Form/FormAccessForCv/FormAccessForCv";

const TitleAccessForCv = () => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen pt-96`}>
      <div className={`flex flex-col justify-center items-center`}>
        <h1
          className={`text-8b3dff font-reem text-center text-2xl lg:text-5xl`}
        >
          Entrez le code pour accéder au CV
        </h1>
        <div className="py-32">
          <FormAccessForCv />
        </div>
      </div>
    </div>
  );
};

export default TitleAccessForCv;
