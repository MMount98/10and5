import testImg from "../images/nobleKitchen/NobleKitchenHero.jpg";

const ServicesList = ({ number, h3, h4, descrpition }) => {
  const numberStyle = {
    verticalAlign: '2.5em',
  }
  return (
    <>
      <div className="content md:my-0 my-4 md:px-24 px-0">
        <div className="collapse ">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title md:text-8xl font-span uppercase ">
          <span className="text-lg md:text-2xl font-spanlight italic mr-2" style={numberStyle}>{number}</span>
            {h3}
          </div>
          <div className="collapse-content">
            <div className="flex">
              <div className="mt-44 flex-grow ">
                <h4 class="font-napzer md:my-1 text-lg uppercase mr-96">{h4}</h4>
                <div className="font-napzer md:pr-5 text-lg md:px-0 px-5 mr-114">
                  <p>{descrpition}</p>
                </div>
              </div>
              <div className="image ">
                <img src={testImg} alt="test" className="w-[74rem] flex-grow-0 hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
