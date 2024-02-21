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

export default function previousWork() {
  return (
    <div>
      <NavBar isTransparent={true} showLogo={true} colorTheme="black" />
      <div>
        <h1 className="text-6xl md:text-9xl font-span ml-4 md:ml-10 mt-40 md:mt-80">
          Selected Work
        </h1>
        <h2 className="ml-4 md:ml-10 text-sm md:text-3xl font-oswald md:mb-14">
          Using our Hospitality Expertise + Our Mantra to approach each project
          creatively
        </h2>
      </div>
      <ScrollSlider
        topText="HOTEL"
        bottomText="HARTNESS"
        link="Hotel Hartness - A symphony of artistry"
        image1={HHImg1}
        image2={HHImg2}
      />
      <ScrollSlider
        topText="MOUNTAIN"
        bottomText="VIEW GRAND"
        link="Mountain View Grand - A place"
        image1={MVGImg1}
        image2={MVGImg2}
      />
         <ScrollSlider
        topText="HAYCREEK"
        bottomText="HOTELS"
        link="Haycreek Hotels - A place"
        image1={HKImg1}
        image2={HKImg2}
      />
         <ScrollSlider
        topText="CASTLE"
        bottomText=" HOTEL & SPA"
        link="Castle Hotel & Spa - A place"
        image1={CasImg1}
        image2={CasImg2}
      />
      <ScrollSlider
        topText="NOBLE"
        bottomText="KITCHEN"
        link="Noble Kitchen- A place"
        image1={NKImg1}
        image2={NKImg2}
      />
    </div>
  );
}
