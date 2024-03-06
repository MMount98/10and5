import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../customCSS/intro.css";

const textWithSpacing = "Let life begin I've cleansed all my sins".split(" ").join("\u00A0");
const textWithSpacing2 = "Burn all the money absolve all the lies".split(" ").join("\u00A0");
const textWithSpacing3 = "We are caged in simulations".split(" ").join("\u00A0");
const textWithSpacing4 = "But something has changed in us".split(" ").join("\u00A0");

const IntroAnimation = ({ onAnimationComplete }) => {
  const enterCtrlRef = useRef(null);
  const enterBackgroundRef = useRef(null);
  const circleTextRefs = useRef([]);

  useEffect(() => {
    gsap.set(circleTextRefs.current, {
      transformOrigin: "50% 50%",
      opacity: 0,
    });

    gsap.to(circleTextRefs.current, {
      duration: 3,
      ease: "expo.inOut",
      rotation: 360,
      opacity: 1,
      scale: 1,
      stagger: { amount: 0.4 },
      onStart: () => gsap.set(enterCtrlRef.current, { pointerEvents: "auto" }),
    });

    // Enhanced hover effect: Scale down texts and modify rotation slightly
    const enterMouseEnterEv = () => {
      gsap.killTweensOf([enterBackgroundRef.current, circleTextRefs]);
      gsap.to(enterBackgroundRef.current, {
        duration: 1.3,
        ease: "expo",
        scale:1.4,
      });
      gsap.to(circleTextRefs.current, {
        duration: 0.5,
        ease: "expo",
        rotation: "+=120", 
        scale: 0.5, 
        opacity: 0.2,
        stagger: {amount: -0.15},
      });
    };

    // Reset texts to original state when mouse leaves
    const enterMouseLeaveEv = () => {
      gsap.to(enterBackgroundRef.current, {
        duration: 2,
        ease: "elastic.out(1, 0.4)",
        scale: 1,
      });
      gsap.to(circleTextRefs.current, {
       duration: 2,
       ease: "elastic.out(1, 0.4)",
       scale: 1,
       rotation: "-=120",
       opacity: 1,
       stagger: {amount: 0.15}
      });
    };

    enterCtrlRef.current.addEventListener("mouseenter", enterMouseEnterEv);
    enterCtrlRef.current.addEventListener("mouseleave", enterMouseLeaveEv);

       // Initial animation sequence
       gsap.to(circleTextRefs, {
        duration: 3,
        ease: "expo.inOut",
        rotation: 90,
        opacity: 1,
        scale: 1,
        stagger: { amount: 0.4 },
        onStart: () => gsap.set(enterCtrlRef.current, { pointerEvents: "auto" }),
      });

    const handleClick = () => {
      gsap.to(
        [
          enterCtrlRef.current,
          ...circleTextRefs.current,
          enterBackgroundRef.current,
        ],
        {
          duration: 1,
          opacity: 0,
          onComplete: onAnimationComplete,
        }
      );
    };

    enterCtrlRef.current.addEventListener("click", handleClick);

    return () => {
      if (enterCtrlRef.current) {
        enterCtrlRef.current.removeEventListener(
          "mouseenter",
          enterMouseEnterEv
        );
        enterCtrlRef.current.removeEventListener(
          "mouseleave",
          enterMouseLeaveEv
        );
        enterCtrlRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [onAnimationComplete]);

  const addToRefs = (el) => {
    if (el && !circleTextRefs.current.includes(el)) {
      circleTextRefs.current.push(el);
    }
  };

  return (
    <>
      <svg
        className="circles"
        width="100%"
        height="100%"
        viewBox="0 0 1400 1400"
      >
        {/* Defining paths for text to follow */}
        <defs>
          <path
            id="circle-1"
            d="M250,700.5A450.5,450.5 0 1 1 1151,700.5A450.5,450.5 0 1 1 250,700.5"
          />
          <path
            id="circle-2"
            d="M382,700.5A318.5,318.5 0 1 1 1019,700.5A318.5,318.5 0 1 1 382,700.5"
          />
          <path
            id="circle-3"
            d="M487,700.5A213.5,213.5 0 1 1 914,700.5A213.5,213.5 0 1 1 487,700.5"
          />
          <path
            id="circle-4"
            d="M567.5,700.5A133,133 0 1 1 833.5,700.5A133,133 0 1 1 567.5,700.5"
          />
        </defs>
        {/* Applying refs to text elements */}
        <text className="circles__text circles__text--1" ref={addToRefs}>
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-1"
            aria-label=""
            textLength="2830"
          >
            {"Let life begin I've cleansed all my sins".split(" ").join(`${' '}`)}
          </textPath>
        </text>
        <text className="circles__text circles__text--2" ref={addToRefs}>
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-2"
            aria-label=""
            textLength="2001"
          >
            {textWithSpacing2}
          </textPath>
        </text>
        <text className="circles__text circles__text--3" ref={addToRefs}>
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-3"
            aria-label=""
            textLength="1341"
          >
            {textWithSpacing3}
          </textPath>
        </text>
        <text className="circles__text circles__text--4" ref={addToRefs}>
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-4"
            aria-label=""
            textLength="836"
          >
            {textWithSpacing4}
          </textPath>
        </text>
      </svg>

      <button ref={enterCtrlRef} className="enter">
        <div ref={enterBackgroundRef} className="enter__bg"></div>
        <span className="enter__text">Enter</span>
      </button>
    </>
  );
};

export default IntroAnimation;
