import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import IntroAnimation from "../introAnimation";
import NavBar from "../navbar";
import Footer from "../footer";
import FadeInAnimation from "../fadeInAnimation";

export default function Homepage() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const textContainer = useRef(null);

  useEffect(() => {
    if (textContainer.current) {
      gsap.to(textContainer.current, {
        duration: 2,
        opacity: 1,
        ease: "power3.out",
        from: 0,
      });
    }
  });

  return (
    <>
      <div className="bg-custom-white">
        {!animationCompleted && (
          <IntroAnimation
            onAnimationComplete={() => setAnimationCompleted(true)}
          />
        )}
        {animationCompleted && (
          <>
            <NavBar colorTheme="black" isTransparent={true} showLogo={true} />
            <div
              className="flex h-72 md:h-screen justify-center items-center overflow-hidden"
              ref={textContainer}
              style={{ opacity: 0 }}
            >
              <div className="inline-block">
                <div className="flex flex-col items-start">
                  <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  2xl:text-8xl font-span relative -mb-5 pl-12 sm:mb-12 md:mb-16 lg:mb-14  2xl:mb-7 sm:ml-6 md:ml-1">
                    WE ENHANCE{" "}
                  </div>
                  <div className="text-3xl sm:text-5xl md:text-6xl  xl:text-8xl   2xl:text-9xl font-spanlight italic pl-44 sm:pl-24 md:pl-28 lg:pl-44 xl:pl-64 2xl:pl-96 sm:ml-48 sm:-mt-20 md:-mt-24">
                    BRANDS THROUGH{" "}
                  </div>
                  <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl   2xl:text-13xl font-span relative">
                    CREATIVE SOLUTIONS
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
