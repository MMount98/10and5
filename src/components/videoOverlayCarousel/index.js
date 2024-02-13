const VideoOverlayCarousel = ({ videos, imageSrc, altText, headerText }) => {
    return (
      <div className="relative w-full h-auto">
        {/* Image as Background */}
        <img src={imageSrc} alt={altText} className="w-full h-auto object-cover mt-5" />
  
        {/* Header Text */}
        <div className="absolute top-0 left-0 w-full text-center pt-10">
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>
  
        {/* Videos Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center p-5 md:p-20">
          {videos.map(({ videoSrc, title, subtitle }, index) => (
            <div key={index} className="flex flex-col items-center">
              <video
                src={videoSrc}
                className="w-1/3 h-56 md:h-96 object-cover rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              />
              <h3 className="text-white text-lg mt-2">{title}</h3>
              <p className="text-white text-sm">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VideoOverlayCarousel;