//Logo images
import castleLogo from "../images/Logos/Castle Logo.svg";
import coveLogo from "../images/Logos/Cove Restaurant + Bar Logo.svg";
import grandLogo from "../images/Logos/Grand Summit Hotel Logo.svg";
import hayLogo from "../images/Logos/Hay Creek Logo.svg";

//customCSS File
import "../customCSS/underlineAnimation.css";

//compoents
import LogoCarousel from "../logoCarousel";

//const
const logoSet1 = [castleLogo, coveLogo, grandLogo, hayLogo];

export default function Homepage() {
  return (
    <>
      <div className="ourServices text-center md:px-64 px-8 md:mx-5 mb-3 mt-3">
        <h2 className="font-span md:text-2xl text-1xl">OUR SERVICES</h2>
        <p className="font-napzer py-5 md:text-md text-sm">
          One-size-fits-all solutions don’t cut it, that’s why we provide a
          tailored suite of meticulously curated services designed to meet your
          unique needs. We don’t stop at superficial marketing ploys. Our focus
          is on the real people that engage with your brand, which is why our
          goal is to forge genuine connections with your audience.
        </p>
        <div className="font-napzer md:text-sm text-xs md:mb-10">
          <a href="/services" className="underlineAnimation">
            <span>VIEW SERVICES</span>
          </a>
        </div>
      </div>
      <div className="blackBox text-center px- bg-custom-black md:py-10 py-4 ">
        <h3 className="font-span md:text-7xl text-3xl text-custom-white ">
          HOSPITALITY GOT US
        </h3>
        <h3 className="font-span md:text-7xl text-3xl text-custom-white md:-mt-8 -mt-3">
          <span className="font-spanlight italic md:-pt-10">STARTED,</span> YOUR
          AUDIENCE
          <span className="md:text-9xl text-5xl">
            <br></br>KEEPS US
            <span className="font-spanlight italic">GOING.</span>
          </span>
        </h3>
      </div>
      <div className="featuredWork flex flex-col items-center text-center md:my-10 my-8">
        <h4 className="text-1xl md:text-2xl font-span">FEATURED WORK</h4>
        <ul className="featuredWorkList text-1xl md:text-4xl font-span md:p-5 md:my-0 my-2">
          <li className="md:p-3 p-1">
            HAY CREEK CORPORATE -
            <span className="font-spanlight italic">Black Friday Campaign</span>
          </li>
          <li className="md:p-3 p-1">
            HOTEL HARTNESS -
            <span className="font-spanlight italic">
              A Symphony of Artistry
            </span>
          </li>
          <li className="md:p-3 p-1">
            MOUNTAIN VIEW GRAND-
            <span className="font-spanlight italic">
              Steeped in History, Restored in Luxury
            </span>
          </li>
        </ul>
        <div className="font-napzer md:text-sm text-xs md:mb-10">
          <a href="/previousWork" className="underlineAnimation">
            <span>VIEW ALL</span>
          </a>
        </div>
      </div>
      
    </>
  );
}
