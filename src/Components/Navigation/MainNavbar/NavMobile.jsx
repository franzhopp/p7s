import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import LogoNav from "../../UI/Item/Svg/LogoNavMobile";
import BtnOpen from "../../UI/Button/BtnNavMobile/BtnOpen";
import BtnClose from "../../UI/Button/BtnNavMobile/BtnClose";

const NavMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [changesBtnMenu, setChangesBtnMenu] = useState(false);
  const [isOpenFromClickMenu, setIsOpenFromClickMenu] = useState(false);
  const [isMenuClose, setIsMenuClose] = useState(false);
  const handleMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setIsOpenFromClickMenu(!isOpenFromClickMenu);
    setIsMenuClose(false);
  };
  const changesBtnClick = () => {
    setChangesBtnMenu(!changesBtnMenu);
  };
  return (
    <header
      className={`bg-0d1216 border-8b3dff border-b-4 fixed w-full top-0 left-0 shadow-xl py-3 z-50 lg:hidden`}
    >
      <nav className={`flex justify-between items-center`}>
        <NavLink
          x-comp="NavLink"
          aria-label="LH Portfolio"
          className={`ml-3`}
          to="/"
        >
          <LogoNav />
        </NavLink>
        <div onClick={handleMenuMobile} className={`mr-6`}>
          {changesBtnMenu ? (
            <div onClick={changesBtnClick}>
              <BtnClose />
            </div>
          ) : (
            <div onClick={changesBtnClick}>
              <BtnOpen />
            </div>
          )}
        </div>
      </nav>
      <ul
        x-comp="MainLink"
        aria-label="MainLink"
        className={`font-reem p-10 ${isOpenFromClickMenu ? "block" : "hidden"}`}
      >
        <li className={`text-center pb-2`} aria-label="NavLink">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            Accueil
          </Link>
        </li>
        <li className={`text-center pb-2`} aria-label="NavLink">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            À propos
          </Link>
        </li>
        <li className={`text-center pb-2`} aria-label="NavLink">
          <Link
            to="projets"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            Projets
          </Link>
        </li>
        <li className={`text-center pb-2`} aria-label="NavLink">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavMobile;
