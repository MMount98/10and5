const ServicesList = ({ number, h3, h4, description }) => {
  // Removed inline style for better responsiveness
  return (
    <>
      <div className="collapse">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-lg md:text-8xl font-span uppercase flex items-center gap-2">
          <span className="text-lg md:text-2xl font-spanlight italic">
            {number}
          </span>
          {h3}
        </div>
        <div className="collapse-content">
          <div className="flex flex-col md:flex-row">
            <div className="mt-4">
              <h4 className="font-napzer text-lg uppercase mb-4">
                {h4}
              </h4>
              {/* Adjusted container for tighter paragraph layout */}
              <div className="font-napzer text-lg max-w-xl mx-auto md:mx-0 md:max-w-md lg:max-w-lg">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
