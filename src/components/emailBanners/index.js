import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Emailbanner = ({
  backgroundImage,
  squareImages,
  headerText,
  topStat1,
  topStat2,
  topStat3,
  topStat4,
}) => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycleCards = async () => {
      await controls.start({ opacity: 0, transition: { duration: 0.5 } });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % squareImages.length);
      await controls.start({ opacity: 1, transition: { duration: 0.5 } });
    };

    if (squareImages.length > 0) {
      const interval = setInterval(cycleCards, 5000);
      return () => clearInterval(interval);
    }
  }, [controls, squareImages]);

  return (
    <div>
      <div>
        <h5 className="text-3xl md:text-5xl font-span bold italic text-center md:my-6 mt-5">
          {headerText}
        </h5>
        <h6 className="text-2xl md:text-3xl font-span bold italic text-center">
          SUCCESS METRICS
        </h6>
        <div className="flex justify-around my-6 text-center px-8">
          <p className="font-napzer">
            <span className="font-span text-2xl">{topStat1}</span>
            <br></br> Total Revenue
          </p>
          <p className="font-napzer">
            <span className="font-span text-2xl">{topStat2}</span>
            <br></br> Website Traffic During<br></br>Course of Campaign
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
        <div className="md:hidden z-10  absolute inset-0 flex justify-center items-center">
          {squareImages.length > 0 && (
            <motion.img
              src={squareImages[currentIndex]}
              alt="Photo of the email campiagns"
              animate={controls}
              initial={{ opacity: 1 }}
              className="w-44 h-44 md:w-full md:h-32 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Emailbanner;
