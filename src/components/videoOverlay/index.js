const VideoOverlay = ({ videoSrc, imageSrc, altText }) => {
    return (
      <div className="relative w-full h-auto">
        {/* Image as Background */}
        <img src={imageSrc} alt={altText} className="w-full h-auto object-cover mt-5" />
        {/* Video Overlay */}
        <video
          src={videoSrc}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg md:p-36"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  };
  
  export default VideoOverlay;