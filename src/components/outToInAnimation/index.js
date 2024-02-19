import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OutToInAnimation = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      const words = containerRef.current.querySelectorAll('.word');

      words.forEach((word) => {
        const chars = word.querySelectorAll('.char');
        const charsTotal = chars.length;

        chars.forEach((char, position) => {
          gsap.fromTo(
            char,
            {
              "will-change": "transform",
              x: () => {
                const factor = position < Math.ceil(charsTotal / 2)
                  ? position
                  : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return ((charsTotal % 2
                  ? Math.abs(Math.ceil(charsTotal / 2) - 1 - factor)
                  : Math.abs(Math.ceil(charsTotal / 2) - factor)) * 200 *
                  (position < charsTotal / 2 ? -1 : 1));
              },
              y: () => {
                const factor = position < Math.ceil(charsTotal / 2)
                  ? position
                  : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return factor * 60;
              },
              rotationY: -270,
              rotationZ: () => {
                const factor = position < Math.ceil(charsTotal / 2)
                  ? position
                  : Math.ceil(charsTotal / 2) - Math.abs(Math.floor(charsTotal / 2) - position) - 1;
                return position < charsTotal / 2
                  ? Math.abs(factor - charsTotal / 2) * 8
                  : -1 * Math.abs(factor - charsTotal / 2) * 8;
              },
            },
            {
              ease: "power2.inOut",
              x: 0,
              y: 0,
              rotationZ: 0,
              rotationY: 0,
              scale: 1,
              scrollTrigger: {
                trigger: word,
                start: "top bottom+=40%",
                end: "top top+=15%",
                scrub: true,
              },
            }
          );
        });
      });
    }
  }, [text]);

  // Function to split text into words and characters, handling 'br' as <br> elements
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

  return <div ref={containerRef} className="outToIn-animation">{renderText()}</div>;
};

export default OutToInAnimation;

