//Images
import heroImage from "../images/hotelhartness/Hotel-Hartness.jpg";
import secondImage from "../images/hotelhartness/HH_Second Photo.png";
import thridImage from "../images/hotelhartness/HH_Third Photo.jpg";
import captLogo from "../images/hotelhartness/Logo/Captain_Logo.png";
import patLogo from "../images/hotelhartness/Logo/Patterson Logo.png";
import videoBG from "../images/hotelhartness/HH_Fifth Photo.jpg";
//story 1 images
import story1_bg from "../images/hotelhartness/HH_Fourth Photo.jpg";
import story1_1 from "../images/hotelhartness/1stStories/HH_Story1.png";
import story1_2 from "../images/hotelhartness/1stStories/HH_Story2.png";
import story1_3 from "../images/hotelhartness/1stStories/HH_Story3.png";
import story1_4 from "../images/hotelhartness/1stStories/HH_Story4.png";
import story1_5 from "../images/hotelhartness/1stStories/HH_Story5.png";
import story1_6 from "../images/hotelhartness/1stStories/HH_Story6.png";
//story 2 images
import story2_1 from "../images/hotelhartness/2ndStories/HH_Story 1.png";
import story2_2 from "../images/hotelhartness/2ndStories/HH_Story 2.png";
import story2_3 from "../images/hotelhartness/2ndStories/HH_Story 3.png";
import story2_4 from "../images/hotelhartness/2ndStories/HH_Story 4.png";
import story2_5 from "../images/hotelhartness/2ndStories/HH_Story 5.png";
import story2_6 from "../images/hotelhartness/2ndStories/HH_Story 6.png";
import story2_bg from "../images/hotelhartness/HH_Sixth Photo.jpg";
//Story 3 images
import story3_1 from "../images/hotelhartness/3rdStories/HH_Story 1.png";
import story3_2 from "../images/hotelhartness/3rdStories/HH_Story 2.png";
import story3_3 from "../images/hotelhartness/3rdStories/HH_Story 3.png";
import story3_4 from "../images/hotelhartness/3rdStories/HH_Story 4.png";
import story3_5 from "../images/hotelhartness/3rdStories/HH_Story 5.png";
import story3_6 from "../images/hotelhartness/3rdStories/HH_Story 6.png";
import story3_bg from "../images/hotelhartness/HH_Seventh Photo.jpg";

//Video
import webPageVideo from "../videos/hotel-hartness/Hotel-Hartness-Subpage.mp4";

//Compontents
import CarouselAnimation from "../carouselAnimation";
import VideoOverlay from "../videoOverlay";
import NavBar from "../navbar";
import Footer from "../footer";

//Consts
const story1Images = [
  story1_1,
  story1_2,
  story1_3,
  story1_4,
  story1_5,
  story1_6,
];

const story2Images = [
  story2_1,
  story2_2,
  story2_3,
  story2_4,
  story2_5,
  story2_6,
];

const story3Images = [
  story3_1,
  story3_2,
  story3_3,
  story3_4,
  story3_5,
  story3_6,
];

export default function HartnessSubPage() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={true} colorTheme="white" showLogo={true} />
      <img
        src={heroImage}
        alt="landscape photo of the front of hotel hartness"
      />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">HOTEL HARTNESS</h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            A symphony of artistry
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRAND STRATEGY / WEBSITE / SOCIAL MEDIA STRATEGY & SYSTEM
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Hotel Hartness is a symphony of Southern grace and modern allure
            Nestled in Greenville NC. A home to Patterson Kitchen + Bar and The
            Captain's Bar, we were tasked to amplify the brands' digital voice
            through each touchpoint.
          </p>
        </div>
      </div>
      <div className="textdivder flex justify-center items-center md:-mt-16">
        <img
          src={secondImage}
          alt="wide photo of a guest lounge at hotel hartness"
        />
      </div>
      <div className="textBreak flex h-56 md:h-144 justify-center items-center overflow-hidden">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-span mb-[-0.75rem] sm:mb-[-1rem] md:mb-[-1.5rem] lg:mb-[-1rem] ">
            UPGRADE
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-spanlight italic self-end mb-[-0.5rem] sm:mb-[-.75rem] md:mb-[-1rem] lg:mb-[-1rem]">
            THE WAY
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-span">
            YOU STAY
          </div>
        </div>
      </div>
      <div className="imageAndText flex flex-col md:flex-row md:items-end lg:grid lg:grid-cols-2 my-8">
        <img
          src={thridImage}
          className="w-full md:max-w-none p-8 md:p-0"
          alt="photo of lounge at Hotel Hartness"
        />
        <div className="text-center md:text-left md:pl-6 my-5 md:my-0 lg:mt-0">
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

      <CarouselAnimation
        portraits={story1Images}
        backgroundImage={story1_bg}
        backgroundHeight="100vh"
      />
      <div className="textBreak flex  h-56 md:h-144 justify-center items-center overflow-hidden">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-span mb-[-0.75rem] sm:mb-[-1rem] md:mb-[-1.5rem] lg:mb-[-2rem] pl-20 sm:pl-36 md:pl-36 lg:pl-64 xl:pl-80 2xl:pl-96">
            THE WARMTH
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-spanlight italic self-end mb-[-0.5rem] sm:mb-[-.75rem] md:mb-[-1rem] lg:mb-[-1rem] pl-20 sm:pl-36 md:pr-72 lg:pr-44 xl:pr-64 2xl:pr-80">
            OF TRUE
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-span">
            SOUTHERN HOSPITALITY
          </div>
        </div>
      </div>
      <VideoOverlay
        videoSrc={webPageVideo}
        imageSrc={videoBG}
        altText="Video walkthrough of the hotel hartness wbsite"
      />
      <div className="logos flex md:justify-center md:flex-row flex-col p-10 m-5">
        <img
          src={captLogo}
          alt="Logo for the capatain bar"
          className="md:h-20 md:px-16 md:mt-5 p-5 md:p-0"
        />
        <img
          src={patLogo}
          alt="Logo for Paterson resturant"
          className="md:h-32 md:px-16 p-10 md:p-0"
        />
      </div>
      <div>
        <p className="font-napzer text-center text-lg md:px-72 px-24 -mt-8 md:mb-20 mb-20">
          Using the established logo and branding created for Paterson Kitchen +
          Bar and The Captain Bar, we challenged ourselves to create two
          separate social identities under one account.
        </p>
      </div>
      <CarouselAnimation
        portraits={story2Images}
        backgroundImage={story2_bg}
        backgroundHeight="75vh"
      />
      <div className="customDivider p-5 "></div>
      <CarouselAnimation
        portraits={story3Images}
        backgroundImage={story3_bg}
        backgroundHeight="75vh"
      />
      <h3 className="text-2xl text-center font-span mt-8">MEASURED SUCCESS</h3>
      <div className="flex flex-col md:flex-row justify-center items-center text-center text-xs md:text-2xl p-5 gap-4 md:gap-24 -mt-4">
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">+60%</span> <br /> Social growth
        </p>
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">+44,344</span> <br /> Website
          Traffic
        </p>
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">+2.6k</span> <br /> Interactions
        </p>
      </div>

      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/castle-hotel" className="md:py-0 py-2 text-right">
            Castle <br></br> hotel & Spa
          </a>
          <a href="/MVG" className="md:py-0 py-2">
            Mountain View Grand
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
