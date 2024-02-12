import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const CarouselAnimation = ({ portraits, backgroundImage, backgroundHeight = '100vh' }) => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cyclePortraits = async () => {
      await controls.start({ opacity: 0, transition: { duration: 0.5 } });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portraits.length);
      await controls.start({ opacity: 1, transition: { duration: 0.5 } });
    };

    if (portraits.length > 0) {
      const interval = setInterval(cyclePortraits, 3000);
      return () => clearInterval(interval);
    }
  }, [controls, portraits]);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: backgroundHeight }}>
      {/* Background Image */}
      {backgroundImage && (
        <img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover z-0" />
      )}
     
      {/* Mobile Portrait Animation */}
      <div className="md:hidden absolute inset-0 flex justify-center items-center">
        {portraits.length > 0 && (
          <motion.img
            src={portraits[currentIndex]}
            alt="Portrait"
            animate={controls}
            className="w-80 md:w-1/6 h-auto" 
            initial={{ opacity: 1 }}
          />
        )}
      </div>
      {/* Static Images for Desktop */}
      <div className="hidden md:flex absolute inset-0 justify-center items-center space-x-4">
        {portraits.map((portrait, index) => (
          <motion.img
            key={index}
            src={portrait}
            alt={`Portrait ${index + 1}`}
            className="w-1/6" 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselAnimation;
