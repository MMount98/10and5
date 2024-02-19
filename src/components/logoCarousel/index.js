import { useState, useEffect, useRef } from "react";

//css
import "../customCSS/logoCarousel.css";

const LogoCarousel = ({ logos }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const logosRef = useRef([...logos, ...logos]);
  const transitionRef = useRef();

  //reset before overflow occurs
  useEffect(() => {
    transitionRef.current = setInterval(() => {
      setCurrentStartIndex((prevIndex) => {
        if (prevIndex + 4 >= logosRef.current.length / 2) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000);
    return () => clearInterval(transitionRef.current);
  }, []);

  const renderLogos = () => {
    return logosRef.current
      .slice(currentStartIndex, currentStartIndex + 4)
      .map((logos, index) => (
        <img
          key={index}
          src={logos}
          alt={`Logo ${index}`}
          className="carousel-logos"
        />
      ));
  };
  return (
    <>
      <div className="logo-carousel">
        <div className="logo-wrapper">{renderLogos()}</div>
      </div>
    </>
  );
};

export default LogoCarousel;
