import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Utility to disable scrolling
const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

// Utility to enable scrolling
const enableScroll = () => {
  document.body.style.overflow = "";
};

const ForwardTextAnimation = ({ text }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;
    const chars = element.querySelectorAll(".char");

    // Ensure perspective for 3D effect
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
          start: "top bottom", // Adjust these values as needed
          end: "bottom top",
          scrub: true, // Consider how the scrub setting affects the animation
          // Remove onEnter, onLeave callbacks if they're not managing scroll properly
        },
      }
    );
  }, [text]);

  return (
    <div ref={ref} className="text-animation">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ display: "inline-block", transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default ForwardTextAnimation;
