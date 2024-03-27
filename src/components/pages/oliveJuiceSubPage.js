import heroImg from "../images/oliveJuice/Olive Juice Hero Image.png";
import img1 from "../images/oliveJuice/OJ_Olive Green Block w_ Logo.png";
import img2 from "../images/oliveJuice/OJ Moodboard.png";
import img3 from "../images/oliveJuice/OJ_Stock Photo.png";
import img4 from "../images/oliveJuice/OJphotow_AlternateLogo.png";
import img5 from "../images/oliveJuice/OJ_Thank You MockUp.png";
import videoBg from "../images/oliveJuice/OJ_Website Design.png";

//video
import webPageVideo from "../videos/oliveJuice/Website Design Screenrecording.mp4";

//components
import NavBar from "../navbar";
import Footer from "../footer";
import VideoOverlay from "../videoOverlay";

export default function OliveJuiceSubPage() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={true} colorTheme="white" showLogo={true} />
      <img src={heroImg} alt="hero imge of olive branches" />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl uppercase">
            olive juice beauty bar
          </h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            We Love You Too!
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5 uppercase">
            BRANDing/ Strategy / Website Design
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Emerging into the world of beauty and wellness, 10and5 Creative
            leveraged its expertise in the hospitality industry to help market a
            new beauty salon concept where wanderlust and sanctuary intersect.
            Promising to transform a woman’s routine into an enticing retreat,
            we identified their position in the market and built their brand
            identity from the physical aspects of the brick and mortar to the
            entirety of their online presence.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <img src={img1} alt="the logo of olive juice bar" className="p-12" />
        </div>
      </div>
      <div className="flex h-72 md:h-screen justify-center items-center overflow-hidden">
        <div className="inline-block">
          <div className="flex flex-col items-start">
            <div className="uppercase text-4xl sm:text-7xl md:text-8xl lg:text-8xl  2xl:text-9xl font-span relative ml-0 sm:ml-6 md:ml-10 bottom-5 md:bottom-20 2xl:bottom-24">
              A touch of
            </div>
            <div className="uppercase text-5xl sm:text-10xl md:text-9xl lg:text-13xl  2xl:text-13xl font-spanlight italic  -mt-7 sm:-mt-20 md:-mt-24">
              Mediterranean
            </div>
            <div className="uppercase text-6xl sm:text-10xl md:text-8xl lg:text-9xl  2xl:text-13xl font-span relative left-44 md:pl-112 lg:left-96 lg:pl-148 2xl:left-96 2xl:pl-148">
              vibes.
            </div>
          </div>
        </div>
      </div>
      <div className="imageCollage">
        <img src={img2} alt="collogee" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img src={img3} alt="stockphoto of italy" />
          <img src={img4} alt="brown logo of olivejuice" />
        </div>
        <img src={img5} alt="collogee" />
      </div>
      <div className="flex h-72 md:h-screen justify-center items-center overflow-hidden">
        <div className="inline-block">
          <div className="flex flex-col items-start">
            <div className="uppercase text-4xl sm:text-7xl md:text-8xl lg:text-8xl  2xl:text-9xl font-span relative ml-0 sm:ml-6 md:ml-10 bottom-5 md:bottom-20 2xl:bottom-24">
              where
            </div>
            <div className="uppercase text-4xl sm:text-10xl md:text-9xl lg:text-9xl  2xl:text-10xl font-spanlight italic  -mt-7 sm:-mt-20 md:-mt-24">
              sanctuary & wanderlust
            </div>
            <div className="uppercase text-4xl sm:text-10xl md:text-8xl lg:text-8xl  2xl:text-10xl font-span relative left-44 md:pl-112 lg:left-96 lg:pl-112 2xl:left-96 2xl:pl-148">
              intersect.
            </div>
          </div>
        </div>
      </div>
      <VideoOverlay
        videoSrc={webPageVideo}
        imageSrc={videoBg}
        altText="video walkthrough of olive juice site"
      />
      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/cline-family" className="md:py-0 py-2 text-right ">
            Cline family <br></br> hotels
          </a>
          <a href="/hotel-hartness" className="md:py-0 py-2">
            Hotel <br></br> Hartness
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
