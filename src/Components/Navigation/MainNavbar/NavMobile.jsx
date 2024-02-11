import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoNav from "../../UI/Item/Svg/LogoNavMobile";
import BtnOpen from "../../UI/Button/NavBtnMobile/BtnOpen";
import BtnClose from "../../UI/Button/NavBtnMobile/BtnClose";

const NavMobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [changesBtnMenu, setChangesBtnMenu] = useState(false);
  const [isOpenFromClickMenu, setIsOpenFromClickMenu] = useState(false);
  const openChangesBtnMenuMobile = () => {
    setToggleMenu(!toggleMenu);
    setIsOpenFromClickMenu(!isOpenFromClickMenu);
  };
  const changesBtnClick = () => {
    setChangesBtnMenu(!changesBtnMenu);
  };
  return (
    <header className="bg-0d1216 border-8b3dff border-b-4  fixed w-full top-0 left-0 shadow-xl py-3 z-50 lg:hidden">
      <nav className="flex justify-between items-center">
        <NavLink
          x-comp="NavLink"
          aria-label="LH Portfolio"
          className="ml-3"
          to="/"
        >
          <LogoNav />
        </NavLink>
        <div onClick={openChangesBtnMenuMobile} className="mt-2 mr-6">
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
        <li className="text-center" aria-label="NavLink">
          <NavLink
            x-comp="NavLink"
            className="text-8b3dff text-lg transition hover:opacity-80"
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="text-center" aria-label="NavLink">
          <NavLink
            x-comp="NavLink"
            className="text-8b3dff text-lg transition hover:opacity-80"
            to="/"
          >
            À propos
          </NavLink>
        </li>
        <li className="text-center" aria-label="NavLink">
          <NavLink
            x-comp="NavLink"
            className="text-8b3dff text-lg transition hover:opacity-80"
            to="/"
          >
            Projects
          </NavLink>
        </li>
        <li className="text-center" aria-label="NavLink">
          <NavLink
            x-comp="NavLink"
            className="text-8b3dff text-lg transition hover:opacity-80"
            to="/"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavMobile;
