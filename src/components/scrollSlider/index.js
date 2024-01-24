import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollSlider = ({ topText, bottomText, image1, image2 }) => {
  const ref = useRef(null);
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Scroll control logic
  const checkIfInView = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    return () => window.removeEventListener("scroll", checkIfInView);
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
      // Start animation for both images
      controlsImage1.start({ x: 1200 });
      controlsImage2.start({ x: 0 }).then(() => {
        setIsAnimating(false);
      });
    }
  }, [isInView, controlsImage1, controlsImage2]);

  useEffect(() => {
    if (isAnimating) {
      // Disable page scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable page scrolling
      document.body.style.overflow = "auto";
    }
  }, [isAnimating]);

  return (
    <div className="relative p-4" ref={ref}>
      <motion.div
        className="absolute inset-0 flex flex-col"
        initial={{ x: "0%" }}
        animate={controlsImage1}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img src={image1} alt="Image 1" className="mb-4 w-64 h-auto" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ x: "83%", y:"50%" }}
        animate={controlsImage2}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img src={image2} alt="Image 2" className="w-full sm:w-64 h-auto" />
      </motion.div>
      <p className="z-10 text-10xl font-span">{topText}</p>
      <p className="z-10 text-10xl font-span text-right">{bottomText}</p>
    </div>
  );
};

export default ScrollSlider;
