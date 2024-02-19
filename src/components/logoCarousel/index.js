//css
import "../customCSS/logoCarousel.css";

const LogoCarousel = ({ logos }) => {
  const logosDup = [...logos, ...logos];

  return (
    <>
      <div className="logos">
        <div className="logo-slide">
          {logosDup.map((logos, index) => (
            <img key={index} src={logos} alt="logos" />
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
