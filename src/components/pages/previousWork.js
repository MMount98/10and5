import ScrollSlider from "../scrollSlider";
import hartnessImg1 from "../images/Hotel Hartness 1.jpg";
import hartnessImg2 from "../images/Hotel Hartness 2.jpg";

export default function previousWork()  {
  return (
    <div>
      <ScrollSlider
        className="scroll-snap-element"
        topText='Hotel'
        bottomText="Hartness"
        image1={hartnessImg1}
        image2={ hartnessImg2 }
      />
      
    </div>
  );
};

