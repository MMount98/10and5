import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SpiningInAnimation = ({ text }) => {
  gsap.registerPlugin(ScrollTrigger);
  const textRef = useRef([]);

  useEffect(() => {
    textRef.current.forEach((word, wordIndex) => {
      const chars = word.querySelectorAll(".char");

      chars.forEach((char) => gsap.set(char.parenrNode, { perspective: 2000 }));

      gsap.fromTo(
        chars,
        {
          "will-change": "opacity, transfrom",
          opacity: 0,
          y: (position, _, arr) => -40 * Math.abs(position - arr.length / 2),
          z: () => gsap.utils.random(-1500, -600),
          rotationX: () => gsap.utils.random(-500, -200),
        },
        {
          ease: "power1.inOut",
          opacity: 1,
          y: 0,
          z: 0,
          rotateX: 0,
          stagger: {
            each: 0.06,
            from: "center",
          },
          scrollTrigger: {
            trigger: word,
            start: "top bottom",
            end: "top top+=15%",
            scrub: true,
          },
        }
      );
    });
  }, [text]);

  const words = text.split("").map((word, index) => (
    <span
      ref={(el) => (textRef.current[index] = el)}
      key={index}
      className="word inline-block mr-2"
    >
      {word.split("").map((char, charIndex) => (
        <span key={charIndex} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  ));
  return <div className="spinning-text">{words}</div>;
};

export default SpiningInAnimation;
