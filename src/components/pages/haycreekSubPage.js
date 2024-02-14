//compoents
import VideoOverlayCarousel from "../videoOverlayCarousel";
import HaycreekScrollAnimation from "../haycreekScrollAnimation";
import Emailbanner from "../emailBanners";

//images
import heroImg from "../images/hayCreek/Main Images/heroImg.jpg";
import bannerImg from "../images/hayCreek/Main Images/Collage_WhoWeAre_2.jpg";
import videoBg from "../images/hayCreek/Main Images/HC_Third Photo.png";
import bgImg from "../images/hayCreek/Main Images/HC_Fourth Photo.jpg";

//emailBanner1
import emailImg1_1 from "../images/hayCreek/Email Frames/Castle_Email 1.png";
import emailImg1_2 from "../images/hayCreek/Email Frames/Castle_Email_2.png";
import emailImg1_3 from "../images/hayCreek/Email Frames/Castle_Email 3.png";
import emailBg1 from "../images/hayCreek/Main Images/HC_Fifth Photo.jpg";

//emailBanner2
import emailImg2_1 from "../images/hayCreek/Email Frames/LSL_Email_1.png";
import emailImg2_2 from "../images/hayCreek/Email Frames/LSL_Email_2.png";
import emailImg2_3 from "../images/hayCreek/Email Frames/LSL_Email_3.png";
import emailBg2 from "../images/hayCreek/Main Images/HC_Sixth Photo.jpg";

//emailBanner3
import emailImg3_1 from "../images/hayCreek/Email Frames/MVG_Email 1.png";
import emailImg3_2 from "../images/hayCreek/Email Frames/MVG_Email 2.png";
import emailImg3_3 from "../images/hayCreek/Email Frames/MVG_Email 3.png";
import emailBg3 from "../images/hayCreek/Main Images/HC_Seventh Photo.jpg";

//emailBanner4
import emailImg4_1 from "../images/hayCreek/Email Frames/HH_Email 1.png";
import emailImg4_2 from "../images/hayCreek/Email Frames/HH_Email 2.png";
import emailImg4_3 from "../images/hayCreek/Email Frames/HH_Email 3.png";
import emailBg4 from "../images/hayCreek/Main Images/HC_Fifth Photo.jpg";

//emailBanner5
import emailImg5_1 from "../images/hayCreek/Email Frames/GS_Email 1.png";
import emailImg5_2 from "../images/hayCreek/Email Frames/GS_Email 2.png";
import emailImg5_3 from "../images/hayCreek/Email Frames/GS_Email 3.png";
import emailBg5 from "../images/hayCreek/Main Images/HC_Sixth Photo.jpg";

//emailBanner6
import emailImg6_1 from "../images/hayCreek/Email Frames/BWI_Email 1.png";
import emailImg6_2 from "../images/hayCreek/Email Frames/BWI_Email 2.png";
import emailImg6_3 from "../images/hayCreek/Email Frames/BWI_Email 3.png";
import emailBg6 from "../images/hayCreek/Main Images/HC_Seventh Photo.jpg";

//videos
import video1 from "../videos/haycreek/IG_Story_1.mp4";
import video2 from "../videos/haycreek/IG_Story_2.mp4";
import video3 from "../videos/haycreek/IG_Story_3.mp4";

//Variables or Constants

//emailbanners
const emailBanner6 = [emailImg6_1, emailImg6_2, emailImg6_3];
const emailBanner5 = [emailImg5_1, emailImg5_2, emailImg5_3];
const emailBanner4 = [emailImg4_1, emailImg4_2, emailImg4_3];
const emailBanner3 = [emailImg3_1, emailImg3_2, emailImg3_3];
const emailBanner2 = [emailImg2_1, emailImg2_2, emailImg2_3];
const emailBanner1 = [emailImg1_1, emailImg1_2, emailImg1_3];

//video array
const videos = [
  { videoSrc: video1, title: "Phase 1:", subtitle: "Teaser Release" },
  { videoSrc: video2, title: "Phase 2:", subtitle: "We are Live!" },
  { videoSrc: video3, title: "Phase 3:", subtitle: "Last Chance" },
];

export default function HaycreekSubPage() {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-full overflow-hidden">
        <img src={heroImg} alt="Hero img" />
      </div>
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">
            HAY CREEK CORPORATE
          </h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            Boutique to the bone
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BLACK FRIDAY CAMPAIGN
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Hay Creek Corporate, a hotel management company that distinctly
            understands the power of nostalgia in the world of travel and hast
            the creativity and vision to see what most cannot, tasked us with
            their Black Friday campaign that spread across their hotel
            portfolio.
          </p>
          <h3 className="text-xl text-center font-span mt-8">
            MEASURED SUCCESS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xs md:text-sm p-5 gap-y-3 -mt-4">
            <p className="font-napzer">
              <span className="font-span text-lg">$1,059,233</span> Total
              Revenue Booked
            </p>
            <p className="font-napzer">
              +<span className="font-span text-lg">78.8%</span> YoY Total
              Revenue
            </p>
          </div>
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
          <h3 className="text-3xl md:text-8xl md:absolute md:left-36 md:ml-2 md:mt-6 md:mb-0 2xl:ml-72 mr-44 mt-12 mb-6 font-span">
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
      <HaycreekScrollAnimation backgroundImage={bgImg} />
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
        backgroundImage={emailBg2}
        squareImages={emailBanner2}
        headerText="LODGE AR SCHROON LAKE"
        topStat1="$91,347"
        topStat2="4.8K"
        topStat3="7.64%"
        topStat4="41.7%"
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
        backgroundImage={emailBg4}
        squareImages={emailBanner4}
        headerText="HOTEL HARTNESS"
        topStat1="$97,818"
        topStat2="5.6K"
        topStat3="4.46%"
        topStat4="38.74%"
      />
      <Emailbanner
        backgroundImage={emailBg5}
        squareImages={emailBanner5}
        headerText="GRAND SUMMIT HOTEl"
        topStat1="$112,009"
        topStat2="6.3K"
        topStat3="4.93%"
        topStat4="32.73%"
      />
      <Emailbanner
        backgroundImage={emailBg6}
        squareImages={emailBanner6}
        headerText="BREAKWATER INN & SPA"
        topStat1="$95,182"
        topStat2="4.9K"
        topStat3="1.83%"
        topStat4="45.37%"
      />
      
    </div>
  );
}
