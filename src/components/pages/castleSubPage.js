//Images
import heroImage from "../images/castleHotel/Hero Image.jpg";
import secondImage from "../images/castleHotel/Castle Logo Section.png";
import thridImage from "../images/castleHotel/Castle Magazine Photo.png";
import fourthImage from "../images/castleHotel/4th Photo.jpg";
import fifthImage from "../images/castleHotel/5th Photo.jpg";
import waxSeal from "../images/castleHotel/Wax Seal.png";

//Videos
import webPageWalkThrough from "../videos/castle/Castle Hotel and Spa- Website Screen Recording.mp4";

//Components
import TextScroll from "../textScroll";
import VideoOverlay from "../videoOverlay";
import NavBar from "../navbar";
import Footer from "../footer";

export default function CastleSubPage() {
  return (
    <div className="bg-custom-white">
      <div className="relative">
        <NavBar isTransparent={true} colorTheme="black" showLogo={true} />

        <img
          src={heroImage}
          alt="Landscape photo of the front of Hotel Hartness"
          className="w-full h-auto overflow-hidden"
        />
      </div>
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">CASTLE HOTEL & SPA</h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            A World Away from Home
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRANDING / ADVERTISING CAMPAIGNS / STRATEGY / COPYWRITING
          </p>
        </div>
        <div>
          <p className="font-napzer px-10 md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Once home to an iconic wedding venue, special occasion restaurant
            and award winning spa, The Castle at Tarrytown lay dormant since the
            worldwide pandemic. Our team helped bring this fortress back to life
            with a brand refresh, programming strategy as well as an engaging
            online presence that launched them out of the middle ages and into
            the 21st century.
          </p>
        </div>
      </div>
      <div className="textdivder flex justify-center items-center">
        <img
          src={secondImage}
          alt="breakdown of the custom font built"
          className="md:p-3 md:w-full mb-6 md:mb-0"
        />
      </div>
      <div className="textBreak flex  h-56 md:h-144 justify-center items-center overflow-hidden">
        <div className="flex flex-col">
          <div className="text-[2.25rem] sm:text-4xl md:text-6xl lg:text-[4rem] xl:text-[6rem] 2xl:text-[7.35rem] font-span mb-[-2.75rem] sm:mb-[-.5rem] md:mb-[-.75rem] lg:mb-[-3rem] sm:pl-3 lg:pl-16 xl:pl-8 2xl:pl-9">
            THE GRAND
          </div>
          <div className="text-[2.5rem] sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-spanlight italic self-end mb-[-0.5rem] sm:mb-[-.75rem] md:mb-[-1rem] lg:mb-[-1rem] pl-20 sm:pl-36 md:pl-72 lg:pl-44 xl:pl-64 2xl:pl-96">
            DAME OF
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-span">
            WESTCHESTER.
          </div>
        </div>
      </div>
      <div className="textAnimation">
        <p className="text-center font-napzer md:px-64 md:text-lg text-xs px-5 ">
          Rediscover the enchanted destination in the prestigious Westchester
          County that offers the most intimate, idyllic and luxurious experience
          in accommodations, dining, entertainment, wellness, and special events
          of every kind.
        </p>
        <TextScroll
          imageUrl={waxSeal}
          text="THE ROYAL TREATMENT IS OUR GOLD STANDARD"
        />
      </div>
      <div className="magzinePages">
        <img src={thridImage} alt="magazine" className="mb-12" />
      </div>
      <div className="textBreak flex  h-56 md:h-144 justify-center items-center overflow-hidden">
        <div className="flex flex-col">
          <div className="text-[2.25rem] sm:text-4xl md:text-6xl lg:text-[4rem] xl:text-[6rem] 2xl:text-[7.35rem] font-span mb-[-2.75rem] sm:mb-[-.5rem] md:mb-[-.75rem] lg:mb-[-3rem] sm:pl-3 lg:pl-16 xl:pl-8 2xl:pl-16">
            TIME OFF
          </div>
          <div className="text-[2.5rem] sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-spanlight italic self-end mb-[-0.5rem] sm:mb-[-.75rem] md:mb-[-1rem] lg:mb-[-1rem] pl-20 sm:pl-36 md:pl-72 lg:pl-44 xl:pl-64 2xl:pl-96">
            IN TIMELESS
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-span">
            SURROUNDINGS.
          </div>
        </div>
      </div>

      <div className="textDivider mb-14 ">
        <p className="font-span md:text-6xl text-xl text-center">
          A Castle that doesn't deliver<br></br> the
          <span className="font-spanlight"> royal treatment</span> at every
          touch point, <br></br> is no Castle at all.
        </p>
      </div>
      <VideoOverlay
        videoSrc={webPageWalkThrough}
        imageSrc={fourthImage}
        altText="Video Walkthrough of the Castle and Spa Website"
      />

      <div className="text-center">
        <h5 className="font-span 2xl:text-5xl lg:text-5xl md:text-4xl text-2xl mt-5">
          PROGRAMMING + EVENTS
        </h5>
        <p className="font-napzer px-14 my-4">
          An idyllic destination where innovation meets inspiration. Below are
          just some <br></br>of the programs we put in place.
        </p>
      </div>
      <div className="imageAndText flex flex-col md:grid md:grid-cols-2 items-end">
        <img
          src={fifthImage}
          alt="The Mountain View Grand Llama and Farmer"
          className="w-full md:w-auto p-8"
        />
        <div className="text-center md:text-left md:pl-6">
          <h5 className="font-spanlight text-lg md:text-4xl italic my-3">
            DRAG QUEEN BRUNCH
            <br />
            AS YOU WISH HAPPY HOUR
            <br />
            SUMMER FRIDAYS AT THE GROTTO
          </h5>
        </div>
      </div>

      <h3 className="text-xl text-center font-span mt-8">MEASURED SUCCESS</h3>
      <div className="flex flex-col md:flex-row justify-center items-center text-center text-xs md:text-sm p-5 gap-4 md:gap-2 -mt-4">
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">+17.8K</span> <br /> Social
          Growth
        </p>
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">+63K</span> <br /> Website
          Traffic
        </p>
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">+13.8K</span> <br /> Interactions
        </p>
      </div>

      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/haycreek-hotels" className="md:py-0 py-2 text-right">
            Hay Creek Corporate
          </a>
          <a href="/MVG" className="md:py-0 py-2">
            Mountain <br></br>View Grand
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
