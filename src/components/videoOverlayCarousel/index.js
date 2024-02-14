import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoOverlayCarousel = ({ videos, imageSrc, altText, headerText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change interval based on your video length or desired duration

    return () => clearInterval(interval);
  }, [currentIndex, videos.length]);

  return (
    <div className="relative md:w-full overflow-hidden" style={{ height: 'auto' }}>
    
      <img
        src={imageSrc}
        alt={altText}
        className="w-full md:h-40 h-60 object-cover mt-5 z-0"
       
      />

      {/* Header Text */}
      <div className="absolute top-0 left-0 w-full text-center pt-10">
        <h2 className="md:text-md text-2xl font-bold text-white font-napzer">
          {headerText}
        </h2>
      </div>

      {/* Mobile Videos Overlay */}
      <div className="md:hidden absolute top-0 left-0 w-full p-5 mt-24" style={{ height: '60.25vw' }}> {/* Adjust this height to match the background image or as needed */}
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-white md:text-xl text-5xl mt-2 font-span">{videos[currentIndex].title}</h3>
              <p className="text-white md:text-sm text-lg font-napzer my-4">{videos[currentIndex].subtitle}</p>
              <video
                src={videos[currentIndex].videoSrc}
                className="w-full h-auto object-cover rounded-lg shadow-lg" // Adjusted to take full width for better mobile layout
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
      <div className="hidden md:flex absolute top-0 left-0 w-full justify-around items-center p-20">
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

