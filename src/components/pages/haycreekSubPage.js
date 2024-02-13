//images
import heroImg from "../images/hayCreek/Main Images/heroImg.jpg";
import bannerImg from "../images/hayCreek/Main Images/Collage_WhoWeAre_2.jpg";

//videos
import video1 from "../videos/haycreek/IG_Story 1.mp4"
import video2 from "../videos/haycreek/IG_Story 2 .mp4"
import video3 from "../videos/haycreek/IG_Story 3.mp4"

export default function HaycreekSubPage() {
  return (
    <div>
      <div>
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
      <div className="bannerImg md:-mt-0 -mt-10">
        <img
          src={bannerImg}
          alt="a collage of images used in the black friday campagin for haycreek hotels"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12">
        <div>
          <h3 className="text-4xl md:text-8xl md:absolute md:left-36 md:ml-2 md:mt-6 md:mb-0 2xl:ml-72 mr-44 mt-12 mb-6 font-span">
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
    </div>
  );
}
