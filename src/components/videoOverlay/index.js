const VideoOverlay = ({ videoSrc, imageSrc, altText }) => {
    return (
      <div className="relative w-full h-auto">
        {/* Image as Background */}
        <img src={imageSrc} alt={altText} className="w-full h-auto object-cover" />
        {/* Video Overlay */}
        <video
          src={videoSrc}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{opacity: 0.7}} // Adjust opacity as needed
        />
      </div>
    );
  };
  
  export default VideoOverlay;