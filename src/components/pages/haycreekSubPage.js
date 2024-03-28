//compoents
import VideoOverlayCarousel from "../videoOverlayCarousel";

import Emailbanner from "../emailBanners";
import NavBar from "../navbar";
import Footer from "../footer";

//images
import heroImg from "../images/hayCreek/Main Images/heroImg.jpg";
import bannerImg from "../images/hayCreek/Main Images/Collage_WhoWeAre_2.jpg";
import videoBg from "../images/hayCreek/Main Images/HC_Third Photo.png";

//emailBanner1
import emailImg1_1 from "../images/hayCreek/Email Frames/Castle_Email 1.png";
import emailImg1_2 from "../images/hayCreek/Email Frames/Castle_Email_2.png";
import emailImg1_3 from "../images/hayCreek/Email Frames/Castle_Email 3.png";
import emailBg1 from "../images/hayCreek/Main Images/HC_Fifth Photo.jpg";

//emailBanner3
import emailImg3_1 from "../images/hayCreek/Email Frames/MVG_Email 1.png";
import emailImg3_2 from "../images/hayCreek/Email Frames/MVG_Email 2.png";
import emailImg3_3 from "../images/hayCreek/Email Frames/MVG_Email 3.png";
import emailBg3 from "../images/hayCreek/Main Images/HC_Seventh Photo.jpg";

//emailBanner5
import emailImg5_1 from "../images/hayCreek/Email Frames/GS_Email 1.png";
import emailImg5_2 from "../images/hayCreek/Email Frames/GS_Email 2.png";
import emailImg5_3 from "../images/hayCreek/Email Frames/GS_Email 3.png";
import emailBg5 from "../images/hayCreek/Main Images/HC_Sixth Photo.jpg";

//videos
import video1 from "../videos/haycreek/IG_Story_1.mp4";
import video2 from "../videos/haycreek/IG_Story_2.mp4";
import video3 from "../videos/haycreek/IG_Story_3.mp4";

//Variables or Constants

//emailbanners

const emailBanner5 = [emailImg5_1, emailImg5_2, emailImg5_3];

const emailBanner3 = [emailImg3_1, emailImg3_2, emailImg3_3];

const emailBanner1 = [emailImg1_1, emailImg1_2, emailImg1_3];

//video array
const videos = [
  { videoSrc: video1, title: "Phase 1:", subtitle: "Teaser Release" },
  { videoSrc: video2, title: "Phase 2:", subtitle: "We are Live!" },
  { videoSrc: video3, title: "Phase 3:", subtitle: "Last Chance" },
];

export default function HaycreekSubPage() {
  return (
    <div className="relative z-0">
      <NavBar colorTheme="white" isTransparent={true} />
      <div className="relative mt-[-4rem] md:mt-[-6rem] lg:mt-[-8rem] z-0">
        <img src={heroImg} alt="Hero img" />
      </div>
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">HAYCREEK CORPORATE</h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            Boutique to the bone
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BLACK FRIDAY CAMPAIGN
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Hay Creek Hotels, a hospitality management company that distinctly
            understands the power of nostalgia in the world of travel, with the
            creativity and vision to see what most cannot, tasked us with their
            Black Friday 2023 campaign that spread across their hotel portfolio.
          </p>
        </div>
      </div>
      <div className="bannerImg md:-mt-0 Md:-mt-10">
        <img
          src={bannerImg}
          alt="Collage for Haycreek hotels"
          className="md:w-full md:object-cover"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12">
        <div>
          <h3 className="text-3xl md:text-8xl md:absolute md:left-36 md:ml-2 md:mt-6 md:mb-0 2xl:ml-56 mr-44 mt-12 mb-6 font-span">
            THE BIGGEST
          </h3>
        </div>
        <div>
          <h3 className="text-5xl md:text-9xl font-spanlight italic ml-36 md:mt-12 md:ml-96 -mt-8">
            STAYVINGS
          </h3>
        </div>
        <div>
          <h3 className="text-6xl md:text-13xl font-span">OF THE YEAR.</h3>
        </div>
      </div>
      <div className="videoCarousel">
        <VideoOverlayCarousel
          videos={videos}
          imageSrc={videoBg}
          altText="black and white collage from campain"
          headerText="IG STORY"
        />
      </div>
      <div className="p-12">
        <h3 className="text-lg text-center font-span my-8 uppercase">
          Deliverables
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-xs md:text-sm p-5 gap-y-3 -mt-4">
          <p className="font-napzer">
            <span className="font-spanlight text-7xl italic">2,082,407</span>{" "}
            <span>
              <br></br>Total Emails Sent
            </span>
          </p>
          <p className="font-napzer">
            <span className="font-spanlight text-7xl italic">3</span>{" "}
            <span>
              <br></br>Hay Creek Hotels Designs <br></br>&<br></br>Custom Emails
              Per Property
            </span>
          </p>
          <p className="font-napzer">
            <span className="font-spanlight text-7xl italic">36</span>{" "}
            <span>
              <br></br>Differnentiated Emails
            </span>
          </p>
        </div>
      </div>

      <Emailbanner
        backgroundImage={emailBg1}
        squareImages={emailBanner1}
        headerText="CASTLE HOTEL & SPA"
        topStat1="$144,973"
        topStat2="9.4K"
        topStat3="5.06%"
        topStat4="36.47%"
      />

      <Emailbanner
        backgroundImage={emailBg3}
        squareImages={emailBanner3}
        headerText="MOUNTAIN VIEW GRAND"
        topStat1="$240,464"
        topStat2="21K"
        topStat3="1.6%"
        topStat4="28.36%"
      />

      <Emailbanner
        backgroundImage={emailBg5}
        squareImages={emailBanner5}
        headerText="GRAND SUMMIT HOTEL"
        topStat1="$112,009"
        topStat2="6.3K"
        topStat3="4.93%"
        topStat4="32.73%"
      />

      <h3 className="text-xl text-center font-span mt-8">MEASURED SUCCESS</h3>
      <div className="flex flex-col md:flex-row justify-center items-center text-center text-xs md:text-2xl p-5 gap-4 md:gap-24 -mt-4">
        <p className="font-napzer m-0">
          <span className="font-span text-5xl">$1,059,233</span> <br /> Total
          Revenue Booked
        </p>
        <p className="font-napzer m-0">
          +<span className="font-span text-5xl">78.8K</span> <br /> YoY Total
          Revenue
        </p>
      </div>
      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/MVG" className="md:py-0 py-2 text-right">
            Mountain <br></br>View Grand
          </a>
          <a href="/hotel-hartness" className="md:py-0 py-2">
            Hotel Hartness
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
