const ServicesList = ({ h3, h4, h5, descrpition }) => {
  return (
    <>
      <div className="content p-14">
        <h3 className="font-span text-4xl md:my-1">
          {h3}
          <span className="font-spanlight"> – {h4}</span>
        </h3>
        <h5 className="font-napzer md:my-1">{h5}</h5>
        <p className="font-napzer md:pr-148">{descrpition}</p>
      </div>
    </>
  );
};

export default ServicesList;
