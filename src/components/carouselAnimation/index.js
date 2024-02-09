import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import backgroundImage from "../images/hotelhartness/HH_Fourth Photo.jpg";
import image1 from "../images/hotelhartness/1stStories/HH_Story1.png";
import image2 from "../images/hotelhartness/1stStories/HH_Story2.png";
import image3 from "../images/hotelhartness/1stStories/HH_Story3.png";
import image4 from "../images/hotelhartness/1stStories/HH_Story4.png";
import image5 from "../images/hotelhartness/1stStories/HH_Story5.png";

const portraits = [image1, image2, image3, image4, image5];

const CarouselAnimation = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cyclePortraits = async () => {
      await controls.start({ opacity: 0, transition: { duration: 0.5 } });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portraits.length);
      await controls.start({ opacity: 1, transition: { duration: 0.5 } });
    };

    const interval = setInterval(cyclePortraits, 3000);
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img src={backgroundImage} alt="Background" className="absolute h-full w-full object-cover z-0" />
     
      <div className="md:hidden absolute inset-0 flex justify-center items-center">
        <motion.img
          src={portraits[currentIndex]}
          alt={`Portrait`}
          animate={controls}
          className="w-80 md:w-1/6 h-auto" 
          initial={{ opacity: 1 }}
        />
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
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselAnimation;
