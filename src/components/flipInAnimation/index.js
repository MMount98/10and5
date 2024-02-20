import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


const FlipInAnimation = ({ text, time }) => { // Accept text as a prop
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const chars = title.querySelectorAll('.char');

    // Set perspective to each char's parent
    chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

    // Animation from/to with a delay of 3 seconds after page load
    gsap.fromTo(
      chars,
      {
        'will-change': 'opacity, transform',
        opacity: 0,
        rotateX: () => gsap.utils.random(-120, 120),
        z: () => gsap.utils.random(-200, 200),
      },
      {
        ease: 'power3.inOut', // Changed for a smoother easing
        opacity: 1,
        rotateX: 0,
        z: 0,
        stagger: 0.02,
        delay: time, // Delay the animation start by 3 seconds
        duration: 2.5,
      }
    );
  }, [text]);

  return (
    <div ref={titleRef} className="text-animation">
      {text.split('').map((char, index) => (
        <span key={index} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
      ))}
    </div>
  );
};

export default FlipInAnimation;