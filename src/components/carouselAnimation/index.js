import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";

import backgroundImage from "../images/hotelhartness/HH_Fourth Photo.jpg";
import image1 from "../images/hotelhartness/1stStories/HH_Story1.png";
import image2 from "../images/hotelhartness/1stStories/HH_Story2.png";
import image3 from "../images/hotelhartness/1stStories/HH_Story3.png";
import image4 from "../images/hotelhartness/1stStories/HH_Story4.png";
import image5 from "../images/hotelhartness/1stStories/HH_Story5.png";

const portraits = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
];

const CarouselAnimation = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute h-full w-full object-cover z-0"
      />
      {/* Carousel for mobile */}
      <div className="md:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          interval={3000}
        >
          {portraits.map((portrait, index) => (
            <div
              key={index}
              className="h-full flex justify-center items-center"
            >
              <img src={portrait.src} alt={`Portrait ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* Framer Motion for desktop */}
      <div className="hidden md:flex absolute inset-0 justify-center items-center space-x-4">
        {portraits.map((portrait, index) => (
          <motion.img
            key={index}
            src={portrait.src}
            alt={`Portrait ${index + 1}`}
            className="w-1/6" // Adjust size as needed
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }} // Adjust scale effect as needed
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselAnimation;
