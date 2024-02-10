const Footer = () => {
  return (
    <footer className=" bg-8b3dff">
      <div className="relative mx-auto max-w-screen px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <svg
                className="cursor-pointer"
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M80.4828 30.2033C93.8784 46.8842 55.9671 27.0155 40.4402 41.4066C24.9133 55.7977 37.6504 98.9989 24.2548 82.3181C10.8593 65.6372 12.5871 40.4485 28.114 26.0574C43.6409 11.6663 67.0872 13.5225 80.4828 30.2033Z"
                  fill="#ffffff"
                />
                <path
                  d="M36.2802 61.9184L38.1735 60.2918L47.1158 72.305L53.7421 66.6121L55.1895 68.5565L46.67 75.876L36.2802 61.9184ZM60.5808 41.041L70.9705 54.9986L69.0591 56.6408L64.5592 50.5957L57.8054 56.3981L62.3053 62.4431L60.412 64.0697L50.0223 50.1121L51.9155 48.4856L56.3724 54.4729L63.1262 48.6705L58.6693 42.6832L60.5808 41.041Z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed font-reem  text-ffffff lg:text-left">
              Ce portfolio a été imaginé et développé par l’auteur.
            </p>
          </div>

          <ul className="mt-12 font-reem flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a className="text-ffffff transition hover:opacity-80" href="#">
                {" "}
                Accueil{" "}
              </a>
            </li>

            <li>
              <a className="text-ffffff  transition hover:opacity-80" href="#">
                {" "}
                À propos{" "}
              </a>
            </li>

            <li>
              <a className="text-ffffff  transition hover:opacity-80" href="#">
                {" "}
                Projects{" "}
              </a>
            </li>

            <li>
              <a className="text-ffffff  transition hover:opacity-80" href="#">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-12 text-center text-sm font-reem text-ffffff lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
