import { NavLink } from "react-router-dom";
import LogoSvg from "../../UI/Item/Svg/LogoSvg";

const NavMobile = () => {
  return (
    <header className="flex justify-between items-center text-8B3DFF px-3 py-2 lg:px-8">
      <NavLink x-comp="NavLink" aria-label="LH Portfolio" to="/">
        <LogoSvg />
      </NavLink>
      <nav>
        
      </nav>
    </header>
  );
};

export default NavMobile;
