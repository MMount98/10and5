import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollSlider = ({ topText, bottomText, link, image1, image2 }) => {
  const ref = useRef(null);
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setsShowText] = useState(false);

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
      controlsImage1.start({ x: 0 });
      controlsImage2.start({ x: 1045 }).then(() => {
        setIsAnimating(false);
        setsShowText(true);
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
    <div className="relative overflow-hidden p-10" ref={ref}>
      {" "}
      {/* Added overflow-hidden */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex flex-col"
        initial={{ x: "75vw", y: "10%" }}
        animate={controlsImage1}
        transition={{ type: "spring", stiffness: 35 }}
      >
        <img src={image1} alt="Image 1" className="sm:w-96 h-auto" />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 right-0"
        initial={{ x: "0%", y: "100%" }}
        animate={controlsImage2}
        transition={{ type: "spring", stiffness: 35 }}
      >
        <img src={image2} alt="Image 2" className="mb-4 sm:w-96 h-auto" />
      </motion.div>
      <p className="z-10 md:text-13xl font-span">{topText} </p>
      <p className="z-10 -mt-32 md:text-13xl font-span text-right">{bottomText}</p>
      {showText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-span text-2xl absolute bottom-96 right-16"
        >
          {link}
        </motion.p>
      )}
    </div>
  );
};

export default ScrollSlider;
