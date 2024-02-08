import { NavLink } from "react-router-dom";
import LogoSvg from "../../UI/Item/Svg/LogoSvg";

const NavDesktop = () => {
  return (
    <header className="bg-0D1216 flex justify-between items-center text-8B3DFF border-8B3DFF border-b-4 font-reem px-1 py-1 lg:px-5">
      <NavLink x-comp="NavLink" aria-label="LH Portfolio" to="/">
        <LogoSvg />
      </NavLink>
      <nav className="hidden gap-10 md:flex" aria-label="MainLinks">
        <NavLink
          x-comp="NavLink"
          className="text-8B3DFF text-lg opacity-80 hover:opacity-100"
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          x-comp="NavLink"
          className="text-8B3DFF text-lg opacity-80 hover:opacity-100"
          to="/"
        >
          À propos
        </NavLink>
        <NavLink
          x-comp="NavLink"
          className="text-8B3DFF text-lg opacity-80 hover:opacity-100"
          to="/"
        >
          Projects
        </NavLink>
        <NavLink
          x-comp="NavLink"
          className="text-8B3DFF text-lg opacity-80 hover:opacity-100"
          to="/"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default NavDesktop;
