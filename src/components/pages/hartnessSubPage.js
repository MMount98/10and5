import heroImage from "../images/hotelhartness/Hotel-Hartness.jpg";
import secondImage from "../images/hotelhartness/HH_Second Photo.png";
import thridImage from "../images/hotelhartness/HH_Third Photo.jpg";

export default function HartnessSubPage() {
  return (
    <div>
      <img
        src={heroImage}
        alt="landscape photo of the front of hotel hartness"
      />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">HOTEL HARTNESS</h2>
          <p className="text-xl md:text-3xl font-spanlight">
            A symphony of artistry
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRAND STRATEGY / WEBSITE / SOCIAL MEDIA STRATEGY & SYSTEM
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Hotel Hartness is a symphony of southern grace and modern allure
            Nestled in Greenville NC. A home to Patterson Kitchen & Bar and The
            Captain's Bar, we were tasked to amplify the brands digital voice
            through Each of its touchpoint.
          </p>
          <h3 className="text-xl text-center font-span mt-8">
            MEASURED SUCCESS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xs md:text-sm p-5 gap-y-3 -mt-4">
            <p className="font-napzer">
              +<span className="font-span text-lg">60%</span> Social Audience
              growth
            </p>
            <p className="font-napzer">
              +<span className="font-span text-lg">44,344</span> Website Traffic
            </p>
            <p className="font-napzer">
              <span className="font-span text-lg">63.60%</span> Interactions
            </p>
          </div>
        </div>
      </div>
      <div className="textdivder flex justify-center items-center">
        <img
          src={secondImage}
          alt="wide photo of a guest lounge at hotel hartness"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12">
        <div>
          <h3 className="text-4xl md:text-8xl md:absolute md:left-80 md:ml-2 md:mt-6 2xl:ml-72 mr-44 mt-6 font-span">
            UPGRADE
          </h3>
        </div>
        <div>
          <h3 className="text-5xl md:text-9xl font-spanlight italic ml-36 md:mt-12 md:ml-96 -mt-8">
            THE WAY
          </h3>
        </div>
        <div>
          <h3 className="text-6xl md:text-13xl font-span">YOU STAY.</h3>
        </div>
      </div>
      <div className="imageAndText flex flex-col md:grid md:grid-cols-2">
        <img
          src={thridImage}
          className="w-full md:w-auto p-8" 
          alt="photo of lounge at Hotel Hartness"
        />
        <div className="text-center md:text-left md:pl-6 md:mt-72 mt-0">
          <h4 className="font-span text-4xl md:text-6xl">Brand Pillars</h4>
          <ul className="font-spanlight text-xl md:text-3xl">
            <li className="py-1">Quiet Luxury</li>
            <li className="py-1">A Horizontal Haven</li>
            <li className="py-1">Authentic Southern Hospitality</li>
            <li className="py-1">A Symphony of Artistry</li>
            <li className="py-0.5">Curated Occasions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
