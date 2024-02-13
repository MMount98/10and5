import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoOverlayCarousel = ({ videos, imageSrc, altText, headerText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000); // Change interval based on your video length or desired duration

    return () => clearInterval(interval);
  }, [currentIndex, videos.length]);

  return (
    <div className="relative md:w-full md:h-auto overflow-hidden">
      {/* Image as Background */}
      <img
        src={imageSrc}
        alt={altText}
        className="md:w-full md:h-auto object-cover mt-5 h-full w-full z-0"
      />

      {/* Header Text */}
      <div className="absolute top-0 left-0 w-full text-center pt-10">
        <h2 className="text-md font-bold text-white font-napzer">
          {headerText}
        </h2>
      </div>

      {/* Mobile Videos Overlay */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full p-5">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-white text-xl mt-2 font-span ">{videos[currentIndex].title}</h3>
              <p className="text-white text-sm font-napzer my-4">{videos[currentIndex].subtitle}</p>
              <video
                src={videos[currentIndex].videoSrc}
                className="w-1/3 h-56 object-cover rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Static Images for Desktop */}
      <div className="hidden md:flex absolute top-0 left-0 w-full h-full justify-around items-center p-20">
        {videos.map(({ videoSrc, title, subtitle }, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-white text-5xl mt-2 font-span">{title}</h3>
            <p className="text-white text-sm font-napzer my-4">{subtitle}</p>
            <video
              src={videoSrc}
              className="h-96 object-cover rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoOverlayCarousel;
