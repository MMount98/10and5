import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextScroll = ({ imageUrl, text }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const element = document.getElementById("textScrollComponent");
      const elementRect = element.getBoundingClientRect();
      const elementCenterY = elementRect.top + elementRect.height / 2;
      const distanceFromCenter = elementCenterY - viewportHeight / 2;
      const progress = (distanceFromCenter + viewportHeight / 2) / viewportHeight;
      setProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine if we're on a mobile device based on width
  const isMobile = window.innerWidth < 768; // Example breakpoint for mobile devices

  // Image size is the smaller of the viewport's width or height to ensure it's always square and visible
  const imageSize = isMobile ? window.innerWidth : Math.min(window.innerWidth, window.innerHeight);

  // Adjust the initial x position for mobile
  const initialXPosition = isMobile ? '0%' : '50%';

  return (
    <div id="textScrollComponent" className="relative w-full flex items-center justify-center overflow-hidden">
      {/* Square Background Image Container */}
      <div style={{ width: imageSize, height: imageSize, position: 'relative' }}>
        <img src={imageUrl} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover md:p-24 p-28" />
      </div>

      {/* Animated Text */}
      <motion.div
        className="z-10 absolute md:text-6xl text-sm font-bold ml-4 md:ml-0"
        initial={{ x: initialXPosition }}
        animate={{ x: isMobile ? '0%' : -progress * imageSize + imageSize / 2 }}
        style={{
          top: '50%', // Vertically center
          left: '3%', // Horizontally center
          transform: 'translate(-50%, -50%)', 
          color: "white",
          mixBlendMode: "difference",
          whiteSpace: 'nowrap', 
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextScroll;


