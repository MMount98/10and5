import { useState } from "react";
import lightLogo from "./images/Logos/Final_LogoWhite.png";
import darkLogo from "./images/Logos/Final_Logo Black.png";

const NavBar = ({ isTransparent, colorTheme = "white", showLogo = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine logo and SVG color based on the colorTheme prop
  const logoSrc = colorTheme === "white" ? lightLogo : darkLogo;
  const svgColor = colorTheme === "white" ? "#F5F5F5" : "#000000";

  // Conditional class for background transparency and flex justification
  const navbarClasses = `${isTransparent ? 'bg-transparent' : 'bg-custom-black'} fixed top-0 left-0 w-full z-50 flex items-center  ${showLogo ? '' : 'justify-end'} md:p-24 p-6`;

  return (
    <div className={navbarClasses}>
      {/* Conditionally render the logo based on the showLogo prop */}
      {showLogo && (
        <div className="flex-1">
          <img src={logoSrc} alt="10 and 5 logo" className="md:w-36 w-24" />
        </div>
      )}

      <div className={`${showLogo ? 'flex-none' : 'justify-end'}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{ color: svgColor }} // Use the dynamically set SVG color
            className="inline-block w-12 h-12 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="menu bg-custom-white font-napzer text-2xl w-56 rounded-box absolute mt-2 right-1 top-full shadow-lg">
            <li><a href="/previousWork">Selected Works</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/ourteam">Our Team</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;

