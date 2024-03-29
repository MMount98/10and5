//Images
import HHImg1 from "../images/selectedWorks/Hotel Hartness 1.jpg";
import HHImg2 from "../images/selectedWorks/Hotel Hartness 2.jpg";
import MVGImg1 from "../images/selectedWorks/Mountain View Grand 2.jpg";
import MVGImg2 from "../images/selectedWorks/MVG Building.png";
import HKImg1 from "../images/selectedWorks/HayCreek Hotels 1.jpg";
import HKImg2 from "../images/selectedWorks/HayCreek Hotels 2.jpg";
import CasImg1 from "../images/selectedWorks/Castle Hotel & Spa 1.jpg";
import CasImg2 from "../images/selectedWorks/Castle Hotel & Spa 2.jpg";
import CCImg1 from "../images/selectedWorks/Cline Family 1.jpg";
import CCImg2 from "../images/selectedWorks/Cline Family 2.jpg";
import OBImg1 from "../images/selectedWorks/Olive Juice 1.png";
import OBImg2 from "../images/selectedWorks/Olive Juice 2.png";

//Will use once we get wireframes for sub pages
// import GSImg1 from "../images/selectedWorks/Grand Summit 1.jpg";
// import GSImg2 from "../images/selectedWorks/Grand Summit 2.jpg";
//import NKImg1 from "../images/selectedWorks/Noble Kitchen 1.jpg";
//import NKImg2 from "../images/selectedWorks/Noble Kitchen 2.jpg";

//Components
import ScrollSlider from "../scrollSlider";
import NavBar from "../navbar";
import Footer from "../footer";

export default function previousWork() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={false} showLogo={true} colorTheme="black" />
      <div className="-mt-56">
        <h1 className="text-6xl md:text-9xl font-span ml-4 md:ml-10 mt-40 md:mt-80 pt-80">
          Selected Work
        </h1>
        <h2 className="ml-4 md:ml-10 text-xl md:text-left text-center md:text-2xl font-napzer md:mb-14">
          Utilizing our Hospitality Expertise and Our Mantra to creatively
          approach each project.
        </h2>
      </div>
      <ScrollSlider
        topText="HOTEL"
        bottomText="HARTNESS"
        tagline="Hotel Hartness - A Symphony of Artistry"
        link="/hotel-hartness"
        image1={HHImg1}
        image2={HHImg2}
      />
      <ScrollSlider
        topText="MOUNTAIN"
        bottomText="VIEW GRAND"
        tagline="Mountain View Grand - Steeped in History, Restored in Luxury"
        link="/MVG"
        image1={MVGImg2}
        image2={MVGImg1}
      />
      <ScrollSlider
        topText="CLINE FAMILY"
        bottomText="HOTELS"
        tagline="Haycreek Hotels - Boutique to the Bone"
        link="/cline-family"
        image1={CCImg1}
        image2={CCImg2}
      />
      <ScrollSlider
        topText="CASTLE"
        bottomText=" HOTEL & SPA"
        tagline="Castle Hotel & Spa - A World Away from Home"
        link="/castle-hotel"
        image1={CasImg1}
        image2={CasImg2}
      />
      <ScrollSlider
        topText="OLIVE JUICE"
        bottomText="BEAUTY BAR"
        tagline="Olive Juice Beauty Bar - We Love You Too!"
        link="/olive-juice"
        image1={OBImg1}
        image2={OBImg2}
      />
      <ScrollSlider
        topText="HAY CREEK"
        bottomText="HOTELS"
        tagline="Hay creek Hotels - Boutique to the Bone"
        link="/haycreek-hotels"
        image1={HKImg1}
        image2={HKImg2}
      />

      <div className="text-center text-5xl font-span my-12 uppercase md:hidden lg:hidden xl:hidden">
        {/*mobile build*/}
        <ul>
          <li className="p-2 ">
            <a href="/hotel-hartness">Hotel Hartness</a>
          </li>
          <li className="p-2 ">
            <a href="/MVG">
              Mountain <br></br> View Grand
            </a>
          </li>
          <li className="p-2 ">
            <a href="/haycreek-hotels">
              Hay creek <br></br> Hotels
            </a>
          </li>
          <li className="p-2">
            <a href="/castle-hotel">
              Castle <br></br> Hotel & Spa
            </a>
          </li>
        </ul>
      </div>
      <div className="clientsList">
        <div className="text-center text-3xl font-span uppercase">
          Our clients
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 text-lg px-10 py-5 mb-16 font-napzer uppercase text-center">
          <ul>
            <li>Belvada Hotel</li>
            <li>exeter inn</li>
            <li>Lodge at schroon lake</li>
            <li>The Wolfboro inn</li>
            <li>The Centennial Hotel</li>
          </ul>
          <ul>
            <li>Castle Hotel & Spa</li>
            <li>Stonebreaker hotel</li>
            <li>Tonopah Brewerey</li>
            <li>The Brunswick hotel</li>
            <li>Gran Summit Attitash</li>
          </ul>
          <ul>
            <li>Mizpah Hotel</li>
            <li>Hotel Canandaigua</li>
            <li>Cove restaurant + bar</li>
            <li>The Belvada hotel</li>
            <li>Olive Juice Beauty bar</li>
          </ul>
          <ul>
            <li>Breakwater hotel & Spa</li>
            <li>20 south battery</li>
            <li>Noble Kitch + bar</li>
            <li>Shelter harbor Inn</li>
            <li>Mountain view grand</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
