//images
import heroImg from "../images/hayCreek/Main Images/heroImg.jpg";
import bannerImg from "../images/hayCreek/Main Images/Collage_WhoWeAre_2.jpg";
import videoBg from "../images/hayCreek/Main Images/HC_Third Photo.png";

//videos
import video1 from "../videos/haycreek/IG_Story_1.mp4";
import video2 from "../videos/haycreek/IG_Story_2.mp4";
import video3 from "../videos/haycreek/IG_Story_3.mp4";

//compoents
import VideoOverlayCarousel from "../videoOverlayCarousel";

//video array for video overlay carousel component
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
    </div>
  );
}
