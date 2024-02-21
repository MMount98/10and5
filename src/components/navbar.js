import { useState } from "react";
import lightLogo from "./images/10_5logo_white.png";

const NavBar = ({ isTransparent }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Conditional class for background transparency
  const navbarBgClass = isTransparent ? 'bg-transparent' : 'bg-custom-black';

  return (
    <div className={`navbar ${navbarBgClass} fixed top-0 left-0 w-full z-50`}>
      <div className="flex-1">
        <img src={lightLogo} alt="10 and 5 logo" className="w-24" />
      </div>

      <div className="flex-none">
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{ color: isTransparent ? "#F5F5F5" : "#F5F5F5" }} // Adjust SVG color based on transparency
            className="inline-block w-12 h-12 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="menu bg-custom-white font-napzer text-2xl w-56 rounded-box absolute mt-2 right-1 top-12 shadow-lg">
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
