//Images
import heroImage from "../images/Mountain View Grand - Selected Work/MVG_Hero Image.jpg";
import secondImage from "../images/Mountain View Grand - Selected Work/MVG_2nd Photo.jpg";
import thirdImage from "../images/Mountain View Grand - Selected Work/MVG_3rd Photo.jpg";
import fourthImage from "../images/Mountain View Grand - Selected Work/MVG_4th Photo.jpg";
import seventhImage from "../images/Mountain View Grand - Selected Work/MVG_7th Photo.jpg";
import storyBg from "../images/Mountain View Grand - Selected Work/MVG_5th Photo.jpg";
import videoBg from "../images/Mountain View Grand - Selected Work/MVG_6th Photo.jpg";
import llamaLogo from "../images/Mountain View Grand - Selected Work/Yellow llama_Logo.png";
import llamaProm1 from "../images/Mountain View Grand - Selected Work/MVG_Yellow llama 1.jpg";
import llamaProm2 from "../images/Mountain View Grand - Selected Work/MVG_Yellow llama 2.jpg";

//Story 1
import story1_1 from "../images/Mountain View Grand - Selected Work/IG Stories/MVG_Story 1.png";
import story1_2 from "../images/Mountain View Grand - Selected Work/IG Stories/MVG_Story 2.png";
import story1_3 from "../images/Mountain View Grand - Selected Work/IG Stories/MVG_Story 3.png";
import story1_4 from "../images/Mountain View Grand - Selected Work/IG Stories/MVG_Story 4.png";
import story1_5 from "../images/Mountain View Grand - Selected Work/IG Stories/MVG_Story 5.png";

//Video
import webPageVideo from "../videos/mvg/MVG_Screen Recording.mp4";

//Compontents
import CarouselAnimation from "../carouselAnimation";
import VideoOverlay from "../videoOverlay";

//Consts
const storyImages = [story1_1, story1_2, story1_3, story1_4, story1_5];

export default function MVGSubPage() {
  return (
    <div>
      <img
        src={heroImage}
        alt="landscape of the front of mountain view grand"
      />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">
            MOUNTIAN VIEW GRAND
          </h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            Steeped in History, Restored in Luxury
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRANDING / WEBSITE / SOCIAL MEDIA STRATEGY / PROGRAMMING / BEER
            LABEL
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Freamed by charming, gabled rooftops and the rolling peaks of New
            Hampshire's White Mountains, Mountain View Gran Resort & Spa is an
            enchanted retreat perfect for celebrating all of life's beautiful
            moments. Mountain View Grand partnered with 10and5 creative to
            revitalize their online presence, creating a structured and
            refreshed brand identity without forgetting the rooted histoy, they
            emerged from.
          </p>
          <h3 className="text-xl text-center font-span mt-8">
            MEASURED SUCCESS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xs md:text-sm p-5 gap-y-3 -mt-4">
            <p className="font-napzer">
              +<span className="font-span text-lg">126%</span> Social Audience
              growth
            </p>
            <p className="font-napzer">
              +<span className="font-span text-lg">163k</span> Website Traffic
            </p>
            <p className="font-napzer">
              <span className="font-span text-lg">48%</span> Profile Visits
            </p>
          </div>
        </div>
      </div>
      <div className="textdivder flex justify-center items-center md:p-10 p-6">
        <img
          src={secondImage}
          alt="guest in the lounge at mountain view grand"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12 mb-5">
        <div>
          <h3 className="text-4xl md:text-8xl md:absolute md:left-96 md:ml-2 md:mt-6 2xl:ml-72 mr-44 ml-14 mt-6 font-span">
            IF THESE
          </h3>
        </div>
        <div>
          <h3 className="text-5xl md:text-9xl font-spanlight italic ml-36 md:mt-12 md:ml-96 -mt-8">
            WALLS
          </h3>
        </div>
        <div>
          <h3 className="text-6xl md:text-13xl font-span">COULD TALK.</h3>
        </div>
      </div>
      <div className="imageAndText flex flex-col md:grid md:grid-cols-2 p-8">
        <img
          src={thirdImage}
          className="w-full md:w-auto"
          alt="chairs in the mountain view grand lobby"
        />
        <div className="text-center md:text-left md:pl-6 md:mt-64 my-8">
          <h4 className="font-span text-4xl md:text-6xl md:mb-5">
            Brand Pillars
          </h4>
          <ul className="font-spanlight text-xl md:text-3xl md:mb-1">
            <li className="py-2">Nostalgic Narrator</li>
            <li className="py-2">Family Centered</li>
            <li className="py-2">Luxe Leisure</li>
          </ul>
          <img
            src={fourthImage}
            className="w-full md:w-auto"
            alt="chairs around an outdoor campfire"
          />
        </div>
      </div>
      <CarouselAnimation
        portraits={storyImages}
        backgroundImage={storyBg}
        backgroundHeight="100vh"
      />

      <div className="textDivider my-24">
        <h5 className="font-span italic md:text-5xl text-3xl text-center">
          #MEETYOUATMOUNTAINVIEW
        </h5>
      </div>

      <VideoOverlay
        videoSrc={webPageVideo}
        imageSrc={videoBg}
        altText="Video Walkthrough of the Mountain View Grand Website"
      />

      <div className="flex flex-col items-center mx-4 md:m-12">
        <div>
          <h3 className="text-4xl md:text-8xl md:absolute md:left-80 md:ml-2 md:mt-6 2xl:ml-72 ml-14 mr-44 mt-6 font-span">
            SOMETHING
          </h3>
        </div>
        <div>
          <h3 className="text-5xl md:text-9xl font-spanlight italic ml-36 md:mt-12 md:ml-96 -mt-8">
            FOR
          </h3>
        </div>
        <div>
          <h3 className="text-6xl md:text-13xl font-span">EVERYONE.</h3>
        </div>
      </div>

      <div className="text-center">
        <h5 className="font-span ml:text-4xl text-2xl mt-5">
          PROGRAMMING + EVENTS
        </h5>
        <p className="font-napzer px-14 my-4">
          A resort like no other with ample of activites for everyone to enjoy.
          Below are just some <br></br>of the programs we put in place.
        </p>
      </div>
      <div className="imageAndText flex flex-col md:grid md:grid-cols-2">
        <img
          src={seventhImage}
          alt="The Mountain View Grand Llama and Farmer"
          className="w-full md:w-auto p-8"
        />
        <div className="text-center md:text-left md:mt-72 mt-0">
          <h5 className="font-spanlight text-lg md:text-4xl italic md:my-3">
            WELLNESS ON THE LAWN <br></br>WALK WITH LLAMAS + GOATS <br></br>
            SPILLING THE TEA IN THE MOUNTUANS<br></br>SUMMER + FALL POP UP
            PICNICS
          </h5>
        </div>
      </div>
      <div className="text-center px-8 md:mt-5">
        <h5 className="font-span ml:text-4xl text-2xl mt-5">
          YELLOW LLAMA LAGER
        </h5>
        <p className="font-napzer md:px-96 md:my-4 p-10">
          Mountain View Grand Resort and Spa is home to llamas, goats and
          various farm animals but not to worry no llamas were harmed in the
          making of this lager. We were tasked to brand a well loved lager
          already on tap at the Resort with it expanding to the golf course, the
          mini bar, and the pool clubhouse.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={llamaLogo} alt="Llama Yellow Logo" className="w-96 h-80 p-5" />
      </div>
      <div className="flex justify-between flex-col md:grid md:grid-cols-2">
        <img
          src={llamaProm1}
          alt="A can of yellow llama being poured out"
          className="md:p-24 p-12"
        />
        <img
          src={llamaProm2}
          alt="A can of yellow llama next to a full glass of lager"
          className="md:p-24 p-12"
        />
      </div>
      <div className="m-16">
        <h5 className="text-center font-span text-2xl">MORE WORK</h5>
      </div>
    </div>
  );
}
