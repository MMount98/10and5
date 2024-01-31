import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlapClock = ({ timezone, location }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      setTime(new Date(utc + 3600000 * timezone));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  const formatTime = (t) => ("0" + t).slice(-2);

  const formatHour = (h) => {
    const adjustedHour = h % 12 === 0 ? 12 : h % 12;
    return ("0" + adjustedHour).slice(-2);
  };

  const hour = formatHour(time.getHours());
  const minute = formatTime(time.getMinutes());

  const flipAnimation = {
    initial: { rotateX: -90 },
    animate: { rotateX: 0 },
    exit: { rotateX: 90 },
    transition: { duration: 0.5 },
  };

  const renderDigits = (timeString) => {
    return timeString.split("").map((digit, i) => (
      <div key={i} className="relative w-14 h-20">
        <div className="absolute inset-0 bg-zinc-800 rounded-md overflow-hidden">
          <div className="flex justify-center items-center h-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={digit}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={flipAnimation}
                className="text-7xl font-bold text-zinc-200"
              >
                {digit}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="absolute left-0 right-0 h-px bg-black" style={{ top: '50%', transform: 'translateY(-50%)' }}></div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <p className="text-center m-2 text-lg font-span">{location}</p>
      <div className="flex space-x-2 justify-center items-center">
        <div className="flex">{renderDigits(hour)}</div>
        <div className="flex">{renderDigits(minute)}</div>
      </div>
    </div>
  );
};

export default FlapClock;