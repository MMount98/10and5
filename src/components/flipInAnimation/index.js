import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FlipInAnimation = ({ text }) => { // Accept text as a prop
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const chars = title.querySelectorAll('.char');

    // Set perspective to each char's parent
    chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 }));

    // Animation from/to
    gsap.fromTo(
      chars,
      {
        'will-change': 'opacity, transform',
        opacity: 0,
        rotateX: () => gsap.utils.random(-120, 120),
        z: () => gsap.utils.random(-200, 200),
      },
      {
        ease: 'none',
        opacity: 1,
        rotateX: 0,
        z: 0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, [text]); 

  return (
    <div ref={titleRef} className="text-animation">
      {text.split('').map((char, index) => (
        <span key={index} className="char inline-block">{char}</span>
      ))}
    </div>
  );
};

export default FlipInAnimation;