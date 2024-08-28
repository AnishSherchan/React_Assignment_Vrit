import { PrimaryLogo } from "../assets/index";

const Header = () => {
  return (
    <header className=" bg-[#11211F] p-5">
      {/* <!-- Add Logo for the website --> */}
      <img src={PrimaryLogo} alt="Logo" width={125} className="logo" />
      {/* <!-- Add Nav Links for the website --> */}
      
      <nav>
        {/* {NAVIGATION.map((nav, index) => {
          return (
            <a href={nav.route} key={index}>
              {nav.label}
            </a>
          );
        })} */}
      </nav>
      {/* <!-- Add CTAs --> */}
    </header>
  );
};

export default Header;
