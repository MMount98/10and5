import React, { useState, useEffect } from 'react';

const ScrollSlider = ({ text, image1, image2 }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative text-center p-4">
            <div 
                className="absolute inset-0 flex transition-transform"
                style={{ transform: `translateX(${scrollPosition}px)` }}
            >
                <img src={image1} alt="Image 1" className="mb-4" />
                <img src={image2} alt="Image 2" />
            </div>
            <p className="z-10">{text}</p>
        </div>
    );
};

export default ScrollSlider;