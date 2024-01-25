import ScrollSlider from "../scrollSlider";
import hartnessImg1 from "../images/Hotel Hartness 1.jpg";
import hartnessImg2 from "../images/Hotel Hartness 2.jpg";

export default function previousWork()  {
  return (
    <div>
      <div>
        <h1 className="text-9xl font-span ml-10 mt-80">Selected Work </h1>
        <h2 className="ml-10 text-3xl font-oswald">Using our Hospitality Expertise + Our Mantra to approach each project creatively</h2>
      </div>
      <ScrollSlider
        className="scroll-snap-element"
        topText='HOTEL'
        bottomText="HARTNESS"
        image1={hartnessImg1}
        image2={ hartnessImg2 }
      />
         <ScrollSlider
        className="scroll-snap-element"
        topText='MOUNTAIN'
        bottomText="VIEW GRAND"
        image1={hartnessImg1}
        image2={ hartnessImg2 }
      />
      
    </div>
  );
};

