import { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Corrected import
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopUpTextAnimation = () => {
  const titleRef = useRef(null); // Ref to the container for access to DOM

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const title = titleRef.current;
    const chars = title.querySelectorAll(".char");

    // Set perspective to each char's parent
    chars.forEach((char) => gsap.set(char.parentNode, { perspective: 1000 }));

    // Animation from/to
    gsap.fromTo(
      chars,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        rotateX: () => gsap.utils.random(-120, 120),
        z: () => gsap.utils.random(-200, 200),
      },
      {
        ease: "none",
        opacity: 1,
        rotateX: 0,
        z: 0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: title,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={titleRef} className="text-animation">
      {/* Splitting text manually for demonstration. Consider automating for dynamic text */}
      {"10 and 5".split("").map((char, index) => (
        <span key={index} className="char inline-block">
          {char}
        </span>
      ))}
    </div>
  );
};

export default PopUpTextAnimation;
