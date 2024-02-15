//Images
import heroImage from "../images/castleHotel/Hero Image.jpg";
import secondImage from "../images/castleHotel/2nd Photo.png";
import thridImage from "../images/castleHotel/3rd Photo.jpg";
import fourthImage from "../images/castleHotel/4th Photo.jpg";
import fifthImage from "../images/castleHotel/5th Photo.jpg";

//Magazine Images
import magazine1 from "../images/castleHotel/Magazine Photo 1.jpg";
import magazine2 from "../images/castleHotel/Magazine Photo 2.jpg";

//Videos
import webPageWalkThrough from "../videos/castle/Castle Hotel and Spa- Website Screen Recording.mp4";

//Components
import TextScroll from "../textScroll";
import VideoOverlay from "../videoOverlay";

export default function CastleSubPage() {
  return (
    <div>
      <img
        src={heroImage}
        alt="landscape photo of the front of hotel hartness"
      />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">CASTLE HOTEL & SPA</h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            A world away from home
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRANDING / ADVERTISING CAMPAIGNS / STRATEGY / COPYWRITING
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Castle Hotel & Spa is a one-of-a-kind renovated castle oasis perched
            majestically atop one of the highest points in the region
            overlooking the historic Hudson River in lower Hudson Valley of
            Westchester County, New York. We are partneted with Castle Hotel &
            Spa as their in-house creative agency, with that task of
            establishing social presense, increasing brand awareness, social
            engagement and growth.
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
          alt="The handpainted archways in the castle"
          className="w-72 p-1 md:p-3 md:w-full mb-6 md:mb-0"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12 mt-4">
        <div>
          <h3 className="text-2xl md:text-8xl md:absolute md:left-64 md:ml-2 md:mt-6 2xl:ml-72 mr-36 -mt-9 font-span">
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
          Rediscover the enchated destination in the prestigious Westchester
          County that offers the most intiamte, idyllic and luxurious experience
          in accommodations, dining, entertainment, wellness, and special events
          of every kind.
        </p>
        <TextScroll
          imageUrl={thridImage}
          text="THE ROYAL TREATMENT IS OUR GOLD STANDARD"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12 -m-12">
        <div>
          <h3 className="text-3xl md:text-8xl md:absolute md:left-64 md:ml-2 md:mt-6 2xl:ml-72 mr-36 mt-6 font-span">
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
      <div className="magzinePages flex flex-col md:grid md:grid-cols-2 md:mt-36 mt-14">
        <div>
          <h4 className="font-napzer text-center -mb-7 md:-mb-7">
            WESTCHESTER & HUDSON VALLEY MAGAZINE
          </h4>
          <img
            src={magazine1}
            alt="Magazine page highlting the wedding venue at Castle Hotel and spa"
            className="p-10"
          />
        </div>
        <div>
          <h4 className="font-napzer text-center -mb-7 md:-mb-7">
            914 MAGAZINE AD
          </h4>
          <img
            src={magazine2}
            alt="Magazine page ad for Castle Hotel and spa"
            className="p-10"
          />
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
        <h5 className="font-span ml:text-4xl text-2xl mt-5">
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
        <div className="text-center md:text-left md:mt-80 mt-0">
          <h5 className="font-spanlight text-lg md:text-4xl italic md:my-3">
            DRAG QUEEN BRUNCH<br></br>AS YOU WISH HAPPY HOUR<br></br>
            SUMMER FRIDAYS AT THE GROTTO
          </h5>
        </div>
      </div>
      <div className="m-16">
        <h5 className="text-center font-span text-2xl">MORE WORK</h5>
      </div>
    </div>
  );
}
