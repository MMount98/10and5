import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//images
import img1 from "../images/hayCreek/Email Frames/HCH_Email_1.png";
import img2 from "../images/hayCreek/Email Frames/HCH_Email_2.png";
import img3 from "../images/hayCreek/Email Frames/HCH_Email_3.png";
import bgImg from "../images/hayCreek/Main Images/HC_Fourth Photo.jpg";

const HaycreekScrollAnimation = () => { // Removed the prop as it's not used
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const squareImages = [img1, img2, img3];

  const variants = {
    visible: (i) => ({
      y: i === 1 ? 100 : -100, // Move center image down and side images up
      opacity: 1,
      transition: { duration: 0.5 },
    }),
    hidden: { y: 0, opacity: 0 },
  };

  return (
    <div
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "100vh", // Ensure the div is visible
  width: "100vw",
      }}
    >
      <div className="flex justify-between w-2/3">
        {squareImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Square ${index}`}
            className="w-80 h-80 object-cover p-5" // Adjust size as necessary
            custom={index} // Pass the index as a custom prop for individual animation
            variants={variants}
            initial="hidden"
            animate={controls}
          />
        ))}
      </div>
    </div>
  );
};

export default HaycreekScrollAnimation;