//Images
import HHImg1 from "../images/selectedWorks/Hotel Hartness 1.jpg";
import HHImg2 from "../images/selectedWorks/Hotel Hartness 2.jpg";
import MVGImg1 from "../images/selectedWorks/Mountain View Grand 1.jpg";
import MVGImg2 from "../images/selectedWorks/Mountain View Grand 2.jpg";
import NKImg1 from "../images/selectedWorks/Noble Kitchen 1.jpg";
import NKImg2 from "../images/selectedWorks/Noble Kitchen 2.jpg";
import HKImg1 from "../images/selectedWorks/HayCreek Hotels 1.jpg";
import HKImg2 from "../images/selectedWorks/HayCreek Hotels 2.jpg";
import CasImg1 from "../images/selectedWorks/Castle Hotel & Spa 1.jpg";
import CasImg2 from "../images/selectedWorks/Castle Hotel & Spa 2.jpg";

//Will use once we get wireframes for sub pages
// import CCImg1 from "../images/selectedWorks/Cline Family 1.jpg";
// import CCImg2 from "../images/selectedWorks/Cline Family 2.jpg";
// import GSImg1 from "../images/selectedWorks/Grand Summit 1.jpg";
// import GSImg2 from "../images/selectedWorks/Grand Summit 2.jpg";

//Components
import ScrollSlider from "../scrollSlider";
import NavBar from "../navbar";
import Footer from "../footer";

export default function previousWork() {
  return (
    <div>
      <NavBar isTransparent={true} showLogo={true} colorTheme="black" />
      <div>
        <h1 className="text-6xl md:text-9xl font-span ml-4 md:ml-10 mt-40 md:mt-80">
          Selected Work
        </h1>
        <h2 className="ml-4 md:ml-10 text-2xl md:text-left text-center md:text-3xl font-oswald md:mb-14">
          Using our Hospitality Expertise + Our Mantra to approach each project
          creatively
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
        tagline='Mountain View Grand - Steeped in History, Restored in Luxury'
        link="/MVG"
        image1={MVGImg1}
        image2={MVGImg2}
      />
      <ScrollSlider
        topText="HAY CREEK"
        bottomText="HOTELS"
        tagline="Haycreek Hotels - Boutique to the Bone"
        link="/haycreek-hotels"
        image1={HKImg1}
        image2={HKImg2}
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
        topText="NOBLE"
        bottomText="KITCHEN + BAR"
        tagline="Noble Kitchen + Bar - Coming Soon"
        link="/noble-kitchen"
        image1={NKImg1}
        image2={NKImg2}
      />
      <div className="text-center text-5xl font-span my-12 uppercase md:hidden lg:hidden xl:hidden">
        {/*mobile build*/}
        <ul>
          <li className="p-2 underlineAnimation">
            <a href="/hotel-hartness">Hotel Hartness</a>
          </li>
          <li className="p-2 underlineAnimation">
            <a href="/MVG">
              Mountain <br></br> View Grand
            </a>
          </li>
          <li className="p-2 underlineAnimation">
            <a href="/haycreek-hotels">
              Hay creek <br></br> Hotels
            </a>
          </li>
          <li className="p-2 underlineAnimation">
            <a href="/castle-hotel">
              Castle <br></br> Hotel & Spa
            </a>
          </li>
          <li className="p-2 underlineAnimation">
            <a href="/noble-kitchen">
              Noble <br></br> Kitchen + Bar
            </a>
          </li>
        </ul>
      </div>
     
    </div>
  );
}
