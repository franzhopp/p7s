import { useState } from "react";
import BtnSendCv from "../../Button/BtnSendCv/BtnSendCv";

const FormAccessForCv = () => {
  const [code, setCode] = useState("");
  const [authentificated, setAuthentificated] = useState(false);
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === "csr452-6570-e591") {
      setAuthentificated(true);
    } else {
      alert("Le code est incorrect, veuillez réessayer.");
      setInterval(() => {
        window.location.reload();
      }, 1000);
    }
  };
  return (
    <>
      {!authentificated ? (
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className={`bg-ffffff rounded-3xl shadow-xl p-10`}
          >
            <div className={`pb-5`}>
              <div className="text-center pb-5">
                <label
                  htmlFor="AccessCv"
                  className={`text-8b3dff font-jacques`}
                >
                  Entrez le code pour accéder au CV
                </label>
              </div>
              <input
                type="password"
                value={code}
                onChange={handleCodeChange}
                className={`bg-gray-300 rounded-3xl w-full p-4 outline-none font-reem text-sm`}
                placeholder="Code secret"
              />
            </div>
            <div className="flex justify-center">
              <button type={`submit`}>
                <BtnSendCv />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={`flex flex-col justify-center py-20`}>
          <h1
            className={`text-ffffff font-jacques text-center text-2xl lg:text-5xl`}
          >
            Accès autorisé !
          </h1>
          <a
            href="/resume/CV.pdf"
            className={`text-ffffff underline font-reem font-extrabold text-center  text-2xl lg:text-3xl mt-10`}
            download
          >
            {" "}
            Télécharger le CV
          </a>
        </div>
      )}
    </>
  );
};

export default FormAccessForCv;
