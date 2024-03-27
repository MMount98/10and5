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
      <div className="flex flex-col items-center mx-4 md:m-12 mt-4">
        <div>
          <h3 className="text-2xl md:text-8xl md:absolute md:left-64 md:ml-2 md:mt-6 2xl:ml-56 mr-36 -mt-9 font-span">
            THE GRAND
          </h3>
        </div>
        <div>
          <h3 className="text-3xl md:text-9xl font-spanlight italic ml-24 md:mt-12 md:ml-96 -mt-8">
            DAME OF
          </h3>
        </div>
        <div>
          <h3 className="text-4xl md:text-13xl font-span md:mt-12 md:mb-12 mb-4">
            WESTCHESTER.
          </h3>
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
      <div className="flex flex-col items-center mx-4 md:m-12 ">
        <div>
          <h3 className="text-3xl md:text-8xl md:absolute md:left-64 md:ml-2 md:mt-6 2xl:ml-56 mr-36 mt-6 font-span">
            TIME OFF
          </h3>
        </div>
        <div>
          <h3 className="text-3xl md:text-9xl font-spanlight italic ml-24 md:mt-12 md:ml-96 -mt-6">
            IN TIMELESS
          </h3>
        </div>
        <div>
          <h3 className="text-4xl md:text-13xl font-span md:mt-12 md:mb-12 mb-4">
            SURROUNDINGS.
          </h3>
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
      <div className="imageAndText flex flex-col md:grid md:grid-cols-2">
        <img
          src={fifthImage}
          alt="The Mountain View Grand Llama and Farmer"
          className="w-full md:w-auto p-8"
        />
        <div className="text-center md:text-left md:mt-80 mt-0 2xl:mt-114 2xl:pt-6 md:pt-6 pt-0">
          <h5 className="font-spanlight text-lg md:text-4xl italic md:my-3">
            DRAG QUEEN BRUNCH<br></br>AS YOU WISH HAPPY HOUR<br></br>
            SUMMER FRIDAYS AT THE GROTTO
          </h5>
        </div>
      </div>
      <h3 className="text-xl text-center font-span mt-8">MEASURED SUCCESS</h3>
      <div className="flex flex-col md:flex-row justify-center items-center text-center text-xs md:text-sm p-5 gap-4 md:gap-2 -mt-4">
        <p className="font-napzer m-0">
          +<span className="font-span text-lg">+17.8K</span> <br /> Social
          growth
        </p>
        <p className="font-napzer m-0">
          +<span className="font-span text-lg">+63K</span> <br /> Website
          Traffic
        </p>
        <p className="font-napzer m-0">
          +<span className="font-span text-lg">+13.8K</span> <br /> Interactions
        </p>
      </div>

      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/haycreek-hotels" className="md:py-0 py-2 text-right">
            Hay Creek Corporate
          </a>
          <a href="/noble-kitchen" className="md:py-0 py-2">
            noble Kitchen + Bar
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
