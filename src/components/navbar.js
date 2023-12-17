import React from 'react';
import lightLogo from "./images/10_5logo_white.png";

export default function NavBar() {
  return (
    <nav className="py-2 px-4 sm:px-6 md:mx-20 md:my-16 flex justify-between items-center">
      {/* Logo and home link */}
      <a href="/" className="flex items-center">
        <img src={lightLogo} alt="Light Logo" className="h-12 sm:h-16 w-auto" />
      </a>
      
      {/* Responsive menu */}
      <div className="text-right">
        <a href="mailto:rrm@strokeofgeniusco.com" className='contact font-oswald text-lg md:text-xl'>CONTACT US</a>
      </div>
    </nav>
  );
}
