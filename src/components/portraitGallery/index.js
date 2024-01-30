import React from "react";
import { motion } from "framer-motion";
import image1 from "../images/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg";
import image2 from "../images/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg";
import image3 from "../images/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg";
import image4 from "../images/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg";
import image5 from "../images/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg";
import image6 from "../images/zulmaury-saavedra-kXC0dbqtRe4-unsplash.jpg";

const imageData = [
    { src: image1, topText: "Roxanne Rabasco", bottomText: "Founder" },
    { src: image2, topText: "Ashley Branstter", bottomText: "Creative Operations Director" },
    { src: image3, topText: "Folabomi Oyewo", bottomText: "Creative Director" },
    { src: image4, topText: "Sarah Sutton", bottomText: "Creative Strategist" },
    { src: image5, topText: "Michael Mount", bottomText: "Web Developer" },
    { src: image6, topText: "Mia Alvarez", bottomText: "Graphic Designer" },
    
  ];

const PortraitGallery = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="rotate-[-90deg] whitespace-nowrap font-span text-2xl">
        No man is an island
      </div>

      <div className="grid grid-cols-3 gap-12 mx-10">
                {imageData.map((item, index) => (
                    <div key={index} className="text-left">
                        <motion.img
                            src={item.src}
                            alt={`Image ${index + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="w-full h-auto object-cover"
                        />
                        <p className="mt-2 font-span">{item.topText}</p> 
                        <p>{item.bottomText}</p> 
                    </div>
                ))}
            </div>

      <div className="rotate-[90deg] whitespace-nowrap font-span text-2xl">
        No man is an island
      </div>
    </div>
  );
};

export default PortraitGallery;
