import BtnSend from "../Button/BtnSend/BtnSend";

const FormContact = () => {
  return (
    <form className={`bg-gray-200 rounded-3xl shadow-lg p-10`}>
      <div className={`space-y-4`}>
        <div className={`pb-5`}>
          <input
            className={`bg-gray-300 rounded-3xl w-full p-4 outline-none font-reem text-sm`}
            placeholder="Nom"
          />
        </div>
        <div className={`pb-5`}>
          <input
            className={`bg-gray-300 rounded-3xl w-full p-4 outline-none font-reem text-sm`}
            placeholder="Adresse"
          />
        </div>
        <div className={`pb-5`}>
          <input
            className={`bg-gray-300 rounded-3xl w-full p-4 outline-none font-reem text-sm`}
            placeholder="Numéro de téléphone"
          />
        </div>
        <div className={`pb-5`}>
          <textarea
            className={`bg-gray-300 rounded-3xl w-full p-4 outline-none font-reem text-sm `}
            placeholder="Message"
          />
        </div>
      </div>
      <div className="flex justify-center py-5">
        <BtnSend />
      </div>
    </form>
  );
};

export default FormContact;
