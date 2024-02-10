import { NavLink } from "react-router-dom";
import LogoSvg from "../../UI/Item/Svg/LogoNavDesktop";

const NavDesktop = () => {
  return (
    <header className="bg-0d1216 fixed w-full top-0 left-0 lg:flex hidden justify-between items-center text-8b3dff border-8b3dff border-b-4 font-reem px-1 py-1 lg:px-5 z-50">
      <NavLink
        x-comp="NavLink"
        aria-label="LH Portfolio"
        className="sm:flex hidden"
        to="/"
      >
        <LogoSvg />
      </NavLink>
      <nav className="hidden gap-10 md:flex" aria-label="NavLink">
        <NavLink
          x-comp="NavLink"
          className="text-8b3dff text-lg transition hover:opacity-80"
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          x-comp="NavLink"
          className="text-8b3dff text-lg transition hover:opacity-80"
          to="/"
        >
          À propos
        </NavLink>
        <NavLink
          x-comp="NavLink"
          className="text-8b3dff text-lg transition hover:opacity-80"
          to="/"
        >
          Projects
        </NavLink>
        <NavLink
          x-comp="NavLink"
          className="text-8b3dff text-lg transition hover:opacity-80"
          to="/"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default NavDesktop;
