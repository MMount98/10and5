import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import map from "../images/mapWithoutDots.png"

const pinpoints = [
  { id: 1, label: 'Roxanne Robasco', x: 40, y: 39.8, info: 'Castle Rock, CO' },
  { id: 2, label: 'Michael Mount', x: 43, y: 40, info: 'Littleton, CO' },
  { id: 3, label: 'Folabomni', x: 41.5, y: 36.5, info: 'Denver, CO' },
  { id: 4, label: 'Folabomni', x: 44, y: 36.5, info: 'Denver, CO' },
  { id: 5, label: 'Folabomni', x: 61.5, y: 38, info: 'Denver, CO' },
  { id: 6, label: 'Folabomni', x: 68, y: 40, info: 'Denver, CO' },
  { id: 7, label: 'Folabomni', x: 68, y: 51, info: 'Denver, CO' },
  // Add more pinpoints as needed
];

const AboutPins = () => {
    const [selectedPinpoint, setSelectedPinpoint] = useState(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        if (!isMobile) {
            setSelectedPinpoint(null); // Resets on screen size change
        }
    }, [isMobile]);

    const handleInteraction = (pinpoint) => {
        if (isMobile) {
            setSelectedPinpoint(selectedPinpoint === pinpoint ? null : pinpoint);
        }
    };

    const handleMouseEnter = (pinpoint) => {
        if (!isMobile) {
            setSelectedPinpoint(pinpoint);
        }
    };

  return (
    <div className="flex justify-center items-center">
        <div className="relative ">
            <img src={map} alt="Image of the United States With pinpoits scared across the map" className="unitedStatesImage" />
            {pinpoints.map(pinpoint => (
                <button
                    key={pinpoint.id}
                    className="absolute p-0.5 md:p-2 rounded-full bg-red-500 text-white"
                    style={{ top: `${pinpoint.y}%`, left: `${pinpoint.x}%` }}
                    onClick={() => handleInteraction(pinpoint)}
                    onMouseEnter={() => handleMouseEnter(pinpoint)}
                >
                </button>
            ))}
            {selectedPinpoint && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute p-4 bg-white border border-gray-200 rounded shadow"
                    style={{ top: `${selectedPinpoint.y}%`, left: `${selectedPinpoint.x}%` }}
                >
                    <h3 className="font-bold">{selectedPinpoint.label}</h3>
                    <p>{selectedPinpoint.info}</p>
                    <button onClick={() => setSelectedPinpoint(null)}>Close</button>
                </motion.div>
            )}
        </div>
    </div>
);
};

export default AboutPins;