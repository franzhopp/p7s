import LogoFooter from "../UI/Item/Svg/LogoFooter";

const Footer = () => {
  return (
    <footer className={`bg-8b3dff`}>
      <div
        className={`mx-auto max-w-screen py-16 px-4 sm:px-6 lg:px-8 lg:pt-24`}
      >
        <div className={`lg:flex lg:items-end lg:justify-between`}>
          <div>
            <div className={`flex justify-center lg:justify-start`}>
              <LogoFooter />
            </div>
            <p
              className={`text-ffffff mx-auto mt-6 max-w-md text-center leading-relaxed font-reem lg:text-left`}
            >
              Ce portfolio a été imaginé et développé par l’auteur.
            </p>
          </div>
          <ul
            className={`mt-12 flex flex-wrap justify-center font-reem gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12`}
          >
            <li>
              <a className={`text-ffffff transition hover:opacity-80`} href="/">
                {" "}
                Accueil{" "}
              </a>
            </li>

            <li>
              <a className={`text-ffffff transition hover:opacity-80`} href="/">
                {" "}
                À propos{" "}
              </a>
            </li>

            <li>
              <a className={`text-ffffff transition hover:opacity-80`} href="/">
                {" "}
                Projects{" "}
              </a>
            </li>

            <li>
              <a className={`text-ffffff transition hover:opacity-80`} href="/">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </div>
        <p
          className={`text-ffffff mt-12 text-center text-sm font-reem lg:text-right`}
        >
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
