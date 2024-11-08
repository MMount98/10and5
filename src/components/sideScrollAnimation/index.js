import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import canImg1 from "../images/Mountain View Grand - Selected Work/Can 1.png";
import canImg2 from "../images/Mountain View Grand - Selected Work/Can 2.png";
import canImg3 from "../images/Mountain View Grand - Selected Work/Can 3.png";
import logo from "../images/Mountain View Grand - Selected Work/Yellow llama_Logo.png";
import stamp from "../images/Mountain View Grand - Selected Work/Join the herd.png";
import mascot from "../images/Mountain View Grand - Selected Work/Yellow Llama mascot.png";

console.log("file loaded");

const SideScrollSection = () => {
  console.log("top");
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   
    const initializeAnimations = () => {
      console.log("top-initialized");
      const extraSpace = 2000;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          endTrigger: "footer",
          end: `+=${
            horizontalRef.current.scrollWidth - window.innerWidth + extraSpace
          }`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => console.log("Progress:", self.progress), 
        },
      });

      tl.to(horizontalRef.current, {
        x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
        ease: "none",
      });
    };

  
    initializeAnimations();

  
    const loadHandler = () => {
      console.log(
        "Load event fired, setting timeout for animation initialization."
      );
      setTimeout(() => {
        ScrollTrigger.refresh();
        console.log("Forced ScrollTrigger refresh in Safari.");
      }, 500); 
    };

    window.addEventListener("load", loadHandler);

    return () => {
      window.removeEventListener("load", loadHandler);
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-screen">
      <div
        ref={horizontalRef}
        className="flex items-center space-x-12 lg:-mt-64 2xl:-mt-72"
      >
       
        <div className="beer-promo flex-shrink-0 w-[500px] p-5 lg:mt-64 2xl:mt-72 ">
          <img src={stamp} alt="stamp" className="w-44" />
          <h4 className="text-center text-2xl font-napzer mb-4">Beer Copy</h4>
          <p className="text-center font-napzer px-24">
            What do you have to do to join the Yellow Llama herd? Just cheers
            the person next to you! Llamas are social creatures; they adopt
            other animals into their own herd. Do you have what it takes?{" "}
            <br></br> Embody the spirit of llamas and take a sip of a mountain
            of possibilities.
          </p>
          <h4 className="relative top-44 left-44 text-xl uppercase font-napzer">
            Brand Mascot
          </h4>
          <img
            src={mascot}
            alt="mascot"
            className="relative w-72 left-44 mt-8"
          />
          <p className="relative px-24 left-96 bottom-12 sm:bottom-56 2xl:bottom-0">
            A simplistic mascot illustration that embodies the whimsical spirit
            of the lager while still displaying a touch of personality and
            playfulness.
          </p>
        </div>

       

        <img src={logo} alt="Logo" className="relative h-96 w-96 2xl:left-24" />
        <img src={canImg1} alt="Can 1" className="w-auto  2xl:p-44" />
        <img src={canImg2} alt="Can 2" className="w-auto 2xl:p-44" />
        <img src={canImg3} alt="Can 3" className="w-auto 2xl:p-44" />
      
      </div>
    </div>
  );
};

export default SideScrollSection;


