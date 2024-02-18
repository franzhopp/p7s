import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoNav from "../../UI/Item/Svg/LogoNavMobile";
import BtnOpen from "../../UI/Button/BtnNavMobile/BtnOpen";
import BtnClose from "../../UI/Button/BtnNavMobile/BtnClose";

const NavMobile = () => {
  const [isOpenFromClickMenu, setIsOpenFromClickMenu] = useState(false);
  const [changesBtnMenu, setChangesBtnMenu] = useState(false);
  const handleMenuMobile = () => {
    setIsOpenFromClickMenu(!isOpenFromClickMenu);
  };
  const changesBtnClick = () => {
    setChangesBtnMenu(!changesBtnMenu);
    setIsOpenFromClickMenu(false);
  };
  return (
    <header
      className={`bg-0d1216 border-8b3dff border-b-4 fixed w-full top-0 left-0 shadow-xl py-3 z-50 lg:hidden`}
    >
      <nav className={`flex justify-between items-center`}>
        <NavLink x-comp="NavLink" aria-label="LH Portfolio" className={`ml-3`}>
          <NavLink to={`/`}>
            <LogoNav />
          </NavLink>
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
          <NavLink
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            <NavLink to={`/`}>Accueil</NavLink>
          </NavLink>
        </li>
        <li className={`text-center pb-2`} aria-label="NavLink">
          <NavLink
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            <NavLink to={`/`}>À propos</NavLink>
          </NavLink>
        </li>
        <li className={`text-center pb-2`} aria-label="NavLink">
          <NavLink
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            <NavLink to={`/`}>Projets</NavLink>
          </NavLink>
        </li>
        <li className={`text-center pb-2`} aria-label="NavLink">
          <NavLink
            onClick={handleMenuMobile}
            className="text-8b3dff text-lg transition hover:opacity-80"
          >
            <NavLink to={`/`}>Contact</NavLink>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavMobile;
