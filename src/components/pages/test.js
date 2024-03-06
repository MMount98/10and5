import { useState } from "react";
import IntroAnimation from "../introAnimation";

export default function Test() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <div>
        {showIntro ? (
          <IntroAnimation onAnimationComplete={handleIntroComplete} />
        ) : (
          <div className="main">
            <div className="text-center font-span">
              <h1>I did it and im tired</h1>
            </div>
            <div className="text-center font-napzer">
              <p>hi</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
