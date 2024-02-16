const ServicesList = ({ h3, h4, h5, descrpition }) => {
  return (
    <>
      <div className="content md:my-0 my-4">
        <div className="md:p-14 px-5 md:text-left text-center">
          <h3 className="font-span md:text-4xl text-3xl md:my-1">
            {h3}
            <span className="font-spanlight text"> – {h4}</span>
          </h3>
          <h5 className="font-napzer md:my-1 text-lg">{h5}</h5>
          <p className="font-napzer md:pr-148 text-sm px-5">{descrpition}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
