import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../customCSS/underlineAnimation.css";

const ScrollSlider = ({ topText, bottomText, tagline, link, image1, image2 }) => {
  const ref = useRef(null);
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const [isInView, setIsInView] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(false);

  const checkIfInView = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setIsInView(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfInView);
    return () => window.removeEventListener("scroll", checkIfInView);
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
      controlsImage1.start({ x: 0 });
      controlsImage2.start({ x: 1045 }).then(() => {
        setIsAnimating(false);
        setShowText(true);
      });
    }
  }, [isInView, controlsImage1, controlsImage2]);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAnimating]);

  // Wrap the component's content to control its visibility
  return (
    <div className="md:block hidden">
      <div className="relative overflow-hidden p-10" ref={ref}>
        <motion.div
          className="absolute top-0 left-0 right-0 flex flex-col"
          initial={{ x: "75vw", y: "10%" }}
          animate={controlsImage1}
          transition={{ type: "spring", stiffness: 35 }}
        >
          <img src={image1} alt="Image 1" className="w-96 h-auto" />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 right-0"
          initial={{ x: "0%", y: "100%" }}
          animate={controlsImage2}
          transition={{ type: "spring", stiffness: 35 }}
        >
          <img src={image2} alt="Image 2" className="mb-4 w-96 h-auto" />
        </motion.div>
        <p className="z-10 text-13xl font-span">{topText}</p>
        <p className="z-10 -mt-32 text-13xl font-span text-right">{bottomText}</p>
        {showText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="underlineAnimation font-span text-2xl absolute bottom-96 right-16"
          >
            <a href={link}>{tagline}</a>
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default ScrollSlider;

