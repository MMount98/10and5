import React from "react";
import { motion } from "framer-motion";
import image1 from "../images/headShots/RR_Team Picture.png";
import image2 from "../images/headShots/AB_Team Picture.png";
import image3 from "../images/headShots/FO_TeamPicture.png";
import image4 from "../images/headShots/SS_Team Picture.png";
import image5 from "../images/headShots/CK_Team Picture.png";
import image6 from "../images/headShots/MM_Team.png";

import image7 from "../images/headShots/MA_Team Picture.png";

const imageData = [
  { src: image1, topText: "Roxanne Rabasco", bottomText: "Founder" },
  {
    src: image2,
    topText: "Ashley Branstter",
    bottomText: "Creative Operations Director",
  },
  { src: image3, topText: "Folabomi Oyewo", bottomText: "Creative Director" },
  { src: image4, topText: "Sarah Sutton", bottomText: "Creative Strategist" },
  {
    src: image5,
    topText: "Carly Koemptgen",
    bottomText: "Digital Marketing Manager",
  },
  { src: image6, topText: "Michael Mount", bottomText: "Head Web Developer" },
];

const PortraitGallery = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5 md:p-10">
      <div className="md:hidden text-center font-spanlight text-xl mb-4">
        No man is an island
      </div>
      <div className="hidden md:block rotate-[-90deg] whitespace-nowrap font-spanlight text-xl mb-10 md:mb-0">
        No man is an island
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 md:mx-10">
        {imageData.map((item, index) => (
          <motion.div key={index} className="text-center">
            <motion.img
              src={item.src}
              alt={`Team photo ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mx-auto w-full h-auto object-cover"
            />
            <p className="mt-2 text-xl md:text-2xl font-spanlight">
              {item.topText}
            </p>
            <p className="font-napzer text-md md:text-lg -mt-2">
              {item.bottomText}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="hidden md:block rotate-[90deg] whitespace-nowrap font-spanlight text-xl mt-10 md:mt-0">
        No man is an island
      </div>
    </div>
  );
};

export default PortraitGallery;
