import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SideScrollSection = (props) => {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollerRef.current;

        const scrollingTween = gsap.to(scroller, {
            x: () => -(scroller.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: scroller,
                start: "top top",
                end: () => `+=${scroller.offsetWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Return cleanup function
        return () => {
            if (scrollingTween) scrollingTween.kill();
            ScrollTrigger.getAll().forEach(st => {
                if (st.trigger === scroller) {
                    st.kill();
                }
            });
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <div ref={scrollerRef} className="flex whitespace-nowrap">
                {props.children}
            </div>
        </div>
    );
};

export default SideScrollSection;
