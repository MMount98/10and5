const VideoOverlayCarousel = ({ videos, imageSrc, altText, headerText }) => {
  return (
    <div className="relative w-full h-auto">
      {/* Image as Background */}
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-auto object-cover mt-5"
      />

      {/* Header Text */}
      <div className="absolute top-0 left-0 w-full text-center pt-10">
        <h2 className="text-md font-bold text-white font-napzer">
          {headerText}
        </h2>
      </div>

      {/* Videos Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center p-5 md:p-20">
        {videos.map(({ videoSrc, title, subtitle }, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-white text-5xl mt-2 font-span ">{title}</h3>
            <p className="text-white text-sm font-napzer my-4">{subtitle}</p>
            <video
              src={videoSrc}
              className="h-full md:h-96 object-cover rounded-lg shadow-lg border-spacing-4 border-2 "
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoOverlayCarousel;
