import React, { useState, useEffect } from "react";

export default function Splash() {
  const [theme, setTheme] = React.useState("mydefault");
  const toggleTheme = () => {
    setTheme(theme === "mydefault" ? "mylight" : "mydefault");
  };

  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  });

  return (
    <>
      

      <div className="flex flex-col mx-6 md:mx-24">
      <input onClick={toggleTheme} className="toggle md:relative md:left-3/4  md:top-10 " type="checkbox" />
        <div className="text-4xl mt-10 md:text-9xl font-oswald tracking-tighter">
          <h1>
            It's not about the hours <br /> that we keep,
          </h1>
        </div>
        <div className="text-xl left-16 p-5 md:text-4xl relative md:bottom-20 md:left-96 pl-4 md:pl-44 mt-2 font-architects ">
          <h1>
            but our mantra for making <br />
            lasting impressions.{" "}
          </h1>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center md:space-x-10 my-8 space-y-">
        <h1 className="border  px-4 py-2 md:px-20 md:py-4 font-bricolage md:mb-0 text-center">
          BRAND IDENTITY
        </h1>
        <h1 className="border px-4 py-2 md:px-20 md:py-4 font-bricolage md:mb-0 text-center">
          CONTENT STRATEGY
        </h1>
        <h1 className="border  px-4 py-2 md:px-20 md:py-4 font-bricolage md:mb-0 text-center ">
          CREATIVE DEVELOPMENT
        </h1>
      </div>
    </>
  );
}
