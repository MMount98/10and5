import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Emailbanner = ({
  backgroundImage,
  squareImages,
  headerText,
  topStat1,
  topStat2,
  topStat3,
  topStat4,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % squareImages.length
      );
    }, 3000); // Change image every 3 seconds on mobile

    return () => clearInterval(interval);
  }, [squareImages.length]);

  return (
    <div>
      <div>
        <h5 className="text-3xl md:text-5xl font-span bold italic text-center md:my-6">
          {headerText}
        </h5>
        <h6 className="text-2xl md:text-3xl font-span bold italic text-center mb-">
          SUCCESS METRICS
        </h6>
        <div className="flex justify-around my-6 text-center">
          <p className="font-napzer">
            <span className="font-span text-2xl">{topStat1}</span>
            <br></br> Total Revenue
          </p>
          <p className="font-napzer">
            <span className="font-span text-2xl">{topStat2}</span>
            <br></br> Website Traffic Durring<br></br>Course of Campaign
          </p>
          <p className="font-napzer">
            <span className="font-span text-2xl">{topStat3}</span>
            <br></br> Click Through Rate
          </p>
          <p className="font-napzer">
            <span className="font-span text-2xl">{topStat4}</span>
            <br></br> Email Open Rate
          </p>
        </div>
      </div>
      <div className="relative w-full h-64 md:h-96 flex flex-col items-center justify-center text-center">
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute z-0 w-full h-full object-cover"
        />

        {/* Desktop View: Static Images */}
        <div className="hidden md:flex justify-between items-center space-x-4 z-10">
          {squareImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Overlay ${index}`}
              className="w-full h-72 object-cover rounded-md shadow-lg "
            />
          ))}
        </div>

        {/* Mobile View: Loop through images */}
        <div className="md:hidden z-10">
          <AnimatePresence>
            <motion.img
              key={currentImageIndex}
              src={squareImages[currentImageIndex]}
              alt={`Overlay ${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-44 h-44 md:w-full md:h-32 object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Emailbanner;
