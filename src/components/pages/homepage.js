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
              <div className="flex flex-col items-start">
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-span mb-[-0.5rem] sm:mb-[-1rem] md:mb-[-1.5rem] lg:mb-[-2rem] pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 2xl:pl-20">
                  WE ENHANCE
                </div>
                <div className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-spanlight italic self-end mb-[-0.5rem] sm:mb-[-1rem] md:mb-[-1.5rem] lg:mb-[-1.5rem]">
                  BRANDS THROUGH
                </div>
                <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-span">
                  CREATIVE SOLUTIONS
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
