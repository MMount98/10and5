const ServicesList = ({ h3, h4, descrpition }) => {
  return (
    <>
      <div className="content md:my-0 my-4 md:px-24 px-0">
        <div className="collapse collapse-arrow ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title md:text-4xl font-span uppercase ">
            {h3}
          </div>
          <div className="collapse-content">
            <h4 class="font-spanlight md:my-1 text-2xl">{h4}</h4>
            <div className="font-napzer md:pr-148 text-sm md:px-0 px-5">
              <p>{descrpition}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
