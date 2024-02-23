import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Images
import img1 from "../images/hayCreek/Email Frames/HCH_Email_1.png";
import img2 from "../images/hayCreek/Email Frames/HCH_Email_2.png";
import img3 from "../images/hayCreek/Email Frames/HCH_Email_3.png";
import bgImg from "../images/hayCreek/Main Images/HC_Fourth Photo.jpg";

const HaycreekScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [currentImage, setCurrentImage] = useState(0);
  const squareImages = [img1, img2, img3];

  useEffect(() => {
    // Only set up the interval if the component is in view
    let interval;
    if (inView) {
      interval = setInterval(() => {
        setCurrentImage((currentImage) => (currentImage + 1) % squareImages.length);
      }, 5000); // Change image every 5 seconds
    }
    return () => clearInterval(interval);
  }, [squareImages.length, inView]);

  return (
    <div ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img src={bgImg} alt="Background" className="absolute z-0 min-w-full min-h-full object-cov" />

      {/* Desktop Images */}
      <div className="hidden md:flex justify-center items-center w-full z-10">
        {squareImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Square ${index}`}
            className="w-124 h-128.25 object-cover p-24" // Your existing desktop styles
            initial={{ y: 0, opacity: 1 }}
            whileInView={{ y: index === 1 ? 50 : -50, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Mobile Image */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="md:hidden flex justify-center items-center w-full z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Smoother transition
        >
          <img
            src={squareImages[currentImage]}
            alt={`Square ${currentImage}`}
            className="h-auto w-full object-cover p-4" // Adjust for mobile as needed
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HaycreekScrollAnimation;
