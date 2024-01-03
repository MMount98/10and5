import React, { useState, useEffect } from "react";
import lightLogo from "./images/10_5logo_white.png";
import darkLogo from "./images/10_5logo_black.png";

export default function NavBar() {
  const [logo, setLogo] = useState(
    document.documentElement.getAttribute("data-theme") === "mydefault"
      ? lightLogo
      : darkLogo
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "mydefault" && logo !== lightLogo) {
        setLogo(lightLogo);
      } else if (currentTheme !== "mydefault" && logo !== darkLogo) {
        setLogo(darkLogo);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [logo]);

  return (
    <nav className="py-10 px-4 sm:px-6 md:mx-20 md:my-16 flex justify-between items-center">
      {/* Logo and home link */}
      <a href="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 sm:h-16 w-auto" />
      </a>

      {/* Responsive menu */}
      <div className="text-right">
        <a
          href="mailto:admin@10and5creative.com"
          className="contact font-oswald text-lg md:text-xl"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}
