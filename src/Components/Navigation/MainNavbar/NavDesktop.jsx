import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import LogoSvg from "../../UI/Item/Svg/LogoNavDesktop";

const NavDesktop = () => {
  return (
    <header className="bg-0d1216 fixed w-full top-0 left-0 lg:flex hidden justify-between items-center text-8b3dff border-8b3dff border-b-4 font-reem px-1 py-1 lg:px-5 z-50">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        x-comp="NavLink"
        aria-label="LH Portfolio"
        className="sm:flex hidden"
      >
        <NavLink to={`/`}>
          <LogoSvg />
        </NavLink>
      </Link>
      <nav className="hidden gap-10 md:flex" aria-label="NavLink">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          x-comp="NavLink"
          className="text-8b3dff text-lg transition hover:opacity-80"
        >
          <NavLink to={`/`}>Accueil</NavLink>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-8b3dff text-lg transition hover:opacity-80"
        >
          <NavLink to={`/`}>À propos</NavLink>
        </Link>
        <Link
          to="projets"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-8b3dff text-lg transition hover:opacity-80"
        >
          <NavLink to={`/`}>Projets</NavLink>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-8b3dff text-lg transition hover:opacity-80"
        >
          <NavLink to={`/`}>Contact</NavLink>
        </Link>
      </nav>
    </header>
  );
};

export default NavDesktop;
