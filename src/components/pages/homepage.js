import React, { useState } from 'react';
import IntroAnimation from "../introAnimation";
import NavBar from "../navbar";
import Footer from "../footer";
import FadeInAnimation from '../fadeInAnimation';

export default function Homepage() {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  return (
    <>
      <div>
        {!animationCompleted && (
          <IntroAnimation onAnimationComplete={() => setAnimationCompleted(true)} />
        )}
        {animationCompleted && (
          <>
            <NavBar colorTheme="black" isTransparent={true} showLogo={true} />
           <div className='text-left mt-80 mx-5 mb-72 text-6xl font-span'>
            <FadeInAnimation text='We enhance brand images through crafted solutions.' />
             </div>
          <Footer />
          </>
        )}
      </div>
    </>
  );
}
