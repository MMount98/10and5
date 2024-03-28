import { useState, useEffect } from "react";
import lightLogo from "./images/Logos/Final_LogoWhite.png";
import darkLogo from "./images/Logos/Final_Logo Black.png";

import { Link } from "react-router-dom";

import "./customCSS/navbar.css";
const Mail = ({ email, label }) => {
  return (
    <button
      onClick={(e) => {
        window.location.href = email;
        e.preventDefault();
      }}
      className="text-right text-5xl font-span leading-12 hover:text-gray-800" // You can adjust the className to style your button as needed
    >
      Request Proposal
    </button>
  );
};

const NavBar = ({ isTransparent, colorTheme = "white", showLogo = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHideOnScroll(true);
    } else {
      setHideOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoSrc = colorTheme === "white" ? lightLogo : darkLogo;
  const svgColor = colorTheme === "white" ? "#F5F5F5" : "#222121";

  const navbarClasses = `${
    isTransparent ? "bg-transparent" : "bg-custom-white"
  } ${
    hideOnScroll ? "hidden" : "fixed"
  } z-50 inset-x-0 top-0 flex items-center justify-end md:p-6 p-3 transition-all duration-300`;

  const drawerClasses = `transform top-0 right-0 md:w-96 w-108 bg-custom-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 border border-black ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <div className={navbarClasses}>
      {showLogo && (
        <a href="/" className="flex-1">
          <img src={logoSrc} alt="Logo" className="md:w-36 w-24" />
        </a>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-square btn-ghost"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          style={{ color: svgColor }}
          className="inline-block w-8 h-8 md:w-12 md:h-12 stroke-current"
        >
          {/* Adjusted paths for sharp edges and equal length */}
          <path strokeLinecap="butt" strokeWidth="2" d="M3 6h18"></path>
          <path strokeLinecap="butt" strokeWidth="2" d="M3 12h18"></path>
          <path strokeLinecap="butt" strokeWidth="2" d="M3 18h18"></path>
        </svg>
      </button>

      <div className={drawerClasses} style={{ backgroundColor: "#F5F5F5" }}>
        <div className="flex justify-end p-4 mt-10">
          <button
            onClick={() => setIsOpen(false)}
            className="font-bold text-2xl"
          >
            Close
          </button>
        </div>
        <div
          className="menu  text-5xl font-span leading-12 text-right"
          style={{ color: "#222122" }}
        >
          <a href="/previousWork" className="hover:text-gray-800">
            Selected Works
          </a>
          <a href="/services" className="hover:text-gray-800">
            Services
          </a>
          <a href="/ourteam" className="hover:text-gray-800">
            Our Team
          </a>
          <Mail
            label="Let us Know What we can help with!"
            email="mailto:hello@10and5creative.com"
          />
        </div>
        <div className="text-right mt-36 pr-4 font-napzer text-md">
          <p className="font-bold text-xl">Denver</p>
          <p>
            720.470.2577 <br></br>
            383 Corona Street #581<br></br>
            Denver, CO 80218
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
