import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollSlider = ({ topText, bottomText, image1, image2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative p-4 text-center" ref={ref}>
      <motion.div
        className="absolute inset-0 flex flex-col"
        initial={{ x: "80%" }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <img src={image1} alt="Image 1" className="mb-4 w-64 h-auto" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ x: "0%", y:"50%" }}
        animate={isInView ? { x: 1170 } : {}}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      >
        <img src={image2} alt="Image 2" className="w-full sm:w-64 h-auto" />
      </motion.div>
      <p className="z-10 text-9xl font-architects">{topText}</p>
      <p className="z-10 text-9xl font-architects">{bottomText}</p>
    </div>
  );
};

export default ScrollSlider;
