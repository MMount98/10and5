import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ForwardTextAnimation = ({ text }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const chars = element.querySelectorAll(".char:not(.br)");

    chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }));

    // Define the animation
    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        opacity: 0.2,
        z: -800,
      },
      {
        ease: "back.out(1.2)",
        opacity: 1,
        z: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: element,
          start: "top bottom", 
          end: "center center",
          scrub: true, 
        },
      }
    );
  }, [text]);

  // Function to process text and handle <br> tags
  const renderText = () => {
    return text.split(" ").map((word, index) => (
      word === 'br' ? <br key={index} /> : <span key={index} className="word inline-block mr-2">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="char inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <div ref={ref} className="text-animation">
      {renderText()}
    </div>
  );
};

export default ForwardTextAnimation;

