const Emailbanner = ({ backgroundImage, squareImages, headerText }) => {
  return (
    <div>
        <div>
        <h2 className="z-10 text-2xl  md:text-5xl font-span bold italic  text-center mb-8">
          {headerText}
        </h2>
        </div>
      <div className="relative w-full h-64 md:h-96 flex flex-col items-center justify-center text-center">
        {/* Background Image */}
        {/* Header Text */}

        <img
          src={backgroundImage}
          alt="Background"
          className="absolute z-0 w-full h-full object-cover"
        />

        {/* Overlay Images Container */}
        <div className="z-10 flex justify-center items-center space-x-4">
          {squareImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Overlay ${index}`}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md shadow-lg" // Adjusted sizes for consistency
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emailbanner;
