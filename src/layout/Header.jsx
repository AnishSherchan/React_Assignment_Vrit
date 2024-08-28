import { NavLink } from "react-router-dom";
import { NAVIGATION } from "../utils/constand";
import { PrimaryLogo } from "../assets/index";

const Header = () => {
  return (
    <header className="bg-[#11211F] border-b-1 p-5">
      {/* Logo for the website */}
      <div className="max-w-[1240px] flex justify-between items-center mx-auto">
        <img src={PrimaryLogo} alt="Logo" width={125} className="logo" />
        {/* Navigation Links for the website */}
        <nav className="flex gap-5">
          {NAVIGATION.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.route}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold"
                  : "text-gray-300 hover:text-white"
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
