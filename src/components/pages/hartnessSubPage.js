import heroImage from "../images/hotelhartness/Hotel-Hartness.jpg";

export default function HartnessSubPage() {
  return (
    <div>
      <img src={heroImage} />
      <div className="introText grid grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-5xl">HOTEL HARTNESS</h2>
          <p className="text-3xl font-spanlight">A symphony of artistry</p>
          <p className="text-1xl font-napzer mt-5">
            {" "}
            BRAND STRATEGY / WEBSITE / SOCIAL MEDIA STRATEGY & SYSTEM
          </p>
        </div>
        <div>
          <p className="font-napzer pl-24 text-sm">
            Hotel Hartness is a symphony of southern grace and modern allure{" "}
            <br></br> Nestled in Greenville NC. A home to Patterson Kitchen &
            Bar and The <br></br> Captain's Bar, we were tasked to amplify the
            brands digital voice through <br></br> Each of its touchpoint.
          </p>
          <h3 className="text-xl text-center font-span mt-3">
            MEASURED SUCCESS
          </h3>
          <div className="grid grid-cols-2 text-center text-sm p-5">
            <p className="font-napzer">+<span className="font-span text-lg">60%</span> Social Audience growth</p>
            <p className="font-napzer">+<span className="font-span text-lg">44,344</span> Website Traffic</p>
            <p className="font-napzer"><span className="font-span text-lg">63.60%</span> Interactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
