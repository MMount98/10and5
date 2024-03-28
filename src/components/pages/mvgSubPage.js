//Images
import heroImage from "../images/Mountain View Grand - Selected Work/MVG Hero Image.png";

import thirdImage from "../images/Mountain View Grand - Selected Work/MVG 2nd Photo.png";
import fourthImage from "../images/Mountain View Grand - Selected Work/MVG_4th Photo.jpg";
import seventhImage from "../images/Mountain View Grand - Selected Work/MVG_7th Photo.jpg";
import storyBg from "../images/Mountain View Grand - Selected Work/MVG_5th Photo.jpg";
import videoBg from "../images/Mountain View Grand - Selected Work/MVG_6th Photo.jpg";
import llamaLogo from "../images/Mountain View Grand - Selected Work/Yellow llama_Logo.png";
import llamaProm1 from "../images/Mountain View Grand - Selected Work/MVG_Yellow llama 1.jpg";
import llamaProm2 from "../images/Mountain View Grand - Selected Work/MVG_Yellow llama 2.jpg";
import canImg1 from "../images/Mountain View Grand - Selected Work/Can 1.png";
import canImg2 from "../images/Mountain View Grand - Selected Work/Can 2.png";
import canImg3 from "../images/Mountain View Grand - Selected Work/Can 3.png";
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
import SideScrollSection from "../sideScrollAnimation";
import VideoOverlay from "../videoOverlay";
import NavBar from "../navbar";
import Footer from "../footer";

//Consts
const storyImages = [story1_1, story1_2, story1_3, story1_4, story1_5];

export default function MVGSubPage() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={true} colorTheme="black" showLogo={true} />
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
          <p className="font-napzer md:pl-24 text-xs md:text-lg mt-5 md:mt-0">
            Mountain View Grand’s historical reputation in New England was
            unmatched as a family destination for all of life’s special
            occasions. Having hosted many celebrity names and some historical
            figures in the 40’s and 50’s, there was an enormous responsibility
            10and5 Creative had to preserve the past while helping them become
            relevant to this new generation of travelers.
          </p>
        </div>
      </div>
      <div className="text-center my-12">
        <h2 className="font-nazper text-xl md:text-2xl 2xl:text-3xl uppercase">
          BRAND POSITIONING
        </h2>
        <h2 className="font-spanlight text-6xl md:text-7xl 2xl:text-8xl uppercase italic">
          THE HOLY TRINITY
        </h2>
        <h2 className="font-nazper  md:text-2xl 2xl:text-3xl uppercase">
          ONE GRAND DAME, THREE DISTINCT PERSONAS
        </h2>
        <div className="px-16 md:px-44 xl:px-96">
          <h3 className="font-span text-6xl my-14 uppercase">RICH HISTORY</h3>
          <p className="font-nazper text-xl md:text-3xl">
            Striking the appropriate balance between preservation and
            innovation, and the celebration of the past while giving nod to the
            future is an art that MVG has perfected as a steward of this
            historic hotel while now offering all of the modern luxuries that
            travelers have come to expect.
          </p>
          <h3 className="font-span text-6xl my-14 uppercase">FAMILY-FIRST</h3>
          <p className="font-nazper text-xl md:text-3xl">
            The Mountain View Grand Resort has been capturing the hearts of
            families with its New Hampshire hospitality, awe-inspiring views and
            myriad of activities that leave you wanting for nothing. This
            special place houses the stuff memories are made of and should be
            portrayed as such. A destination that becomes the meeting point for
            family reunions, the resort kids are begging to get back to as soon
            as the school year ends and a place that becomes synonymous with New
            England family retreats.
          </p>
          <h3 className="font-span text-6xl my-14 uppercase">LUXE LEISURE</h3>
          <p className="font-nazper text-xl md:text-3xl">
            Landing on the perfect distance from “boujie” to approachable, from
            opulence to understated beauty and pretentiousness to quiet luxury
            is where MVGH can firmly take their seat in the market to cater to
            those city slickers looking for a respite from their hectic everyday
            lives. A place to be seen, without being seen, a proper vacay they
            don’t have to go through security to enjoy, and a destination that
            understands their affinity for the finer things in life don’t have
            to cost them a small fortune.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center md:h-screen">
        {" "}
        {/* Assuming you want it centered in the viewport */}
        <div className="inline-block">
          <div className="flex flex-col items-center">
            <div className="uppercase text-5xl md:text-7xl lg:text-8xl  2xl:text-9xl font-span relative -mb-8 pr-56  md:pr-148  2xl:pr-148 sm:mb-12 md:mb-16 lg:mb-8 2xl:mb-7 sm:ml-6 md:ml-1">
              If these{" "}
            </div>
            <div className="uppercase text-6xl md:text-9xl  2xl:text-13xl font-spanlight italic pl-24 sm:pl-24 md:pr-72 lg:pl-96 xl:pr-64 2xl:pl-114 sm:ml-48 sm:-mt-20 md:-mt-24">
              walls{" "}
            </div>
            <div className="uppercase text-7xl md:text-9xl lg:text-13xl  2xl:text-16xl font-span relative">
              could talk
            </div>
          </div>
        </div>
      </div>

      <div className="imageAndText flex flex-col md:grid md:grid-cols-2 gap-4 p-8 items-end">
        <img
          src={thirdImage}
          className="w-full md:w-auto md:row-span-2"
          alt="chairs in the mountain view grand lobby"
        />
        <div className="text-center md:text-left md:pl-6 pr-64 md:pr-0">
          <h4 className="font-span text-4xl md:text-6xl mb-5">Brand Pillars</h4>
          <ul className="font-spanlight text-xl md:text-3xl mb-1">
            <li className="py-2">Nostalgic Narrator</li>
            <li className="py-2">Family Centered</li>
            <li className="py-2">Luxe Leisure</li>
          </ul>
        </div>
        <img
          src={fourthImage}
          className="w-full md:w-auto"
          alt="chairs around an outdoor campfire"
        />
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
          <h3 className="text-4xl md:text-8xl md:absolute md:left-80 md:ml-2 md:mt-6 2xl:ml-64 ml-14 mr-44 mt-6 font-span">
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
        <h5 className="font-span 2xl:text-5xl lg:text-5xl md:text-4xl text-2xl mt-5">
          PROGRAMMING + EVENTS
        </h5>
        <p className="font-napzer px-14 my-4">
          A resort like no other with ample of activities for everyone to enjoy.
          Below are just some <br></br>of the programs we put in place.
        </p>
      </div>
      <div className="imageAndText flex flex-col md:grid md:grid-cols-2">
        <img
          src={seventhImage}
          alt="The Mountain View Grand Llama and Farmer"
          className="w-full md:w-auto p-8"
        />
        <div className="text-center md:text-left md:mt-72 2xl:mt-96 2xl:pt-16 mt-0">
          <h5 className="font-spanlight text-lg md:text-4xl italic md:my-3">
            WELLNESS ON THE LAWN <br></br>WALK WITH LLAMAS + GOATS <br></br>
            SPILLING THE TEA IN THE MOUNTAINS<br></br>SUMMER + FALL POP UP
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
      <SideScrollSection />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 align-middle">
        <img
          src={llamaProm1}
          alt="A can of yellow llama being poured out"
          className="w-full"
        />
        <img
          src={llamaProm2}
          alt="A can of yellow llama next to a full glass of lager"
          className="w-full"
        />
      </div>
      <h3 className="text-xl text-center font-span mt-8">MEASURED SUCCESS</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center text-xs md:text-sm p-5 gap-y-0 -mt-4">
        <p className="font-napzer">
          +<span className="font-span text-lg">126%</span> <br></br> Social
          growth
        </p>
        <p className="font-napzer">
          +<span className="font-span text-lg">48%</span> <br></br> Profile
          visits
        </p>
        <p className="font-napzer">
          +<span className="font-span text-lg">249k</span> <br></br> Website
          Traffic
        </p>
      </div>
      <div className="m-16">
        <h5 className="text-center font-span text-2xl">MORE WORK</h5>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl my-6 uppercase">
        <a href="/olive-juice" className="md:py-0 py-2 text-right">
          OLIVE juice <br></br>Beauty Bar
        </a>
        <a href="/castle-hotel" className="md:py-0 py-2">
          Castle <br></br> Hotel & Spa
        </a>
      </div>

      <Footer />
    </div>
  );
}
