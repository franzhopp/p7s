import FormAccessForCv from "../../Form/FormAccessForCv/FormAccessForCv";

const TitleAccessForCv = () => {
  return (
    <div className={`flex flex-col justify-center items-center h-screen`}>
      <div className={`flex flex-col justify-center items-center`}>
        <div data-aos="fade-in" className="pt-7">
          <FormAccessForCv />
        </div>
      </div>
    </div>
  );
};

export default TitleAccessForCv;
