import React from 'react';
import lightLogo from "./images/10_5logo_white.png";

export default function NavBar() {
  return (
    <nav className="my-16 px-12 py-2 flex justify-between items-center">
      {/* Logo and home link */}
      <a href="/" className="flex items-center">
        <img src={lightLogo} alt="Light Logo" className="h-16 w-auto" />
      </a>
      
      <div>
        {/* Navigation Links */}
      </div>
    </nav>
  );
}