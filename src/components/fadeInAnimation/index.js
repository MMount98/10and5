import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FadeInAnimation = ({ text, wrapperClassName = " " }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
      },
      {
        duration: 1.5,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          once: true,
          
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={wrapperClassName}>
      {text}
    </div>
  );
};

export default FadeInAnimation