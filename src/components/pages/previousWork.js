import ScrollSlider from "../scrollSlider";
import hartnessImg1 from "../images/Hotel Hartness 1.jpg";
import hartnessImg2 from "../images/Hotel Hartness 2.jpg";
import MVGImg1 from "../images/Mountain View Grand 1.jpg";
import MVGImg2 from "../images/Mountain View Grand 2.jpg";
import NKImg1 from "../images/Noble Kitchen 1.jpg";
import NKImg2 from "../images/Noble Kitchen 2.jpg";
import CFHImg1 from '../images/Cline Family 1.jpg';
import CFHImg2 from '../images/Cline Family 2.jpg';

export default function previousWork() {
  return (
    <div>
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
        image1={hartnessImg1}
        image2={hartnessImg2}
      />
      <ScrollSlider
        topText="MOUNTAIN"
        bottomText="VIEW GRAND"
        link="Mountain View Grand - A place"
        image1={MVGImg2}
        image2={MVGImg1}
      />
       <ScrollSlider
        topText="NOBLE"
        bottomText="KITCHEN"
        link="Noble Kitchen- A place"
        image1={NKImg2}
        image2={NKImg1}
      />
       
    </div>
  );
}
