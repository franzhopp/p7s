import BtnSendCv from "../../Button/BtnSendCv/BtnSendCv";

const FormAccessForCv = () => {
  return (
    <form className={`bg-ffffff rounded-3xl shadow-xl p-10`}>
      <div className={`space-y-4`}>
        <div className={`pb-5`}>
          <input
            className={`bg-gray-300 rounded-3xl w-full p-4 outline-none font-reem text-sm`}
            placeholder="Code secret"
          />
        </div>
      </div>
      <div className="flex justify-center py-5">
        <BtnSendCv />
      </div>
    </form>
  );
};

export default FormAccessForCv;
