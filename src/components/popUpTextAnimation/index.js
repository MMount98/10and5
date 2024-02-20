import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const PopUpTextAnimation = ({ text }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      // Select all .char elements that are not within a .br-wrapper
      const chars = Array.from(containerRef.current.querySelectorAll('.char:not(.br-wrapper .char)'));

      gsap.fromTo(chars, {
        'will-change': 'transform',
        transformOrigin: '50% 100%',
        scaleY: 0,
        opacity: 0,
      }, {
        ease: 'power3.in',
        opacity: 1,
        scaleY: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom', // Adjusted for better visibility on scroll
          end: 'bottom center',
          scrub: true,
        },
      });
    }
  }, [text]);

  const renderText = () => {
    // Split the text by spaces to process words and potential <br> placeholders
    return text.split(' ').map((word, index) => {
      if (word === 'br') {
        // Handle 'br' as a placeholder for a line break
        return <br key={index} className="br-wrapper" />;
      } else {
        // Split words into characters for animation
        return (
          <span key={index} className="word inline-block mr-2">
            {word.split('').map((char, charIndex) => (
              <span key={charIndex} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        );
      }
    });
  };

  return (
    <div ref={containerRef} className="popup-text-animation">
      {renderText()}
    </div>
  );
};

export default PopUpTextAnimation;
