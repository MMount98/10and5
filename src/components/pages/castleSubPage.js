//Images
import heroImage from "../images/castleHotel/Hero Image.jpg";
import secondImage from "../images/castleHotel/2nd Photo.png";
import thridImage from "../images/castleHotel/3rd Photo.jpg"

//Components
import TextScroll from "../textScroll";

export default function CastleSubPage() {
  return (
    <div>
      <img
        src={heroImage}
        alt="landscape photo of the front of hotel hartness"
      />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">CASTLE HOTEL & SPA</h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            A world away from home
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRANDING / ADVERTISING CAMPAIGNS / STRATEGY / COPYWRITING
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Castle Hotel & Spa is a one-of-a-kind renovated castle oasis perched
            majestically atop one of the highest points in the region
            overlooking the historic Hudson River in lower Hudson Valley of
            Westchester County, New York. We are partneted with Castle Hotel &
            Spa as their in-house creative agency, with that task of
            establishing social presense, increasing brand awareness, social
            engagement and growth.
          </p>
          <h3 className="text-xl text-center font-span mt-8">
            MEASURED SUCCESS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xs md:text-sm p-5 gap-y-3 -mt-4">
            <p className="font-napzer">
              +<span className="font-span text-lg">60%</span> Social Audience
              growth
            </p>
            <p className="font-napzer">
              +<span className="font-span text-lg">44,344</span> Website Traffic
            </p>
            <p className="font-napzer">
              <span className="font-span text-lg">63.60%</span> Interactions
            </p>
          </div>
        </div>
      </div>
      <div className="textdivder flex justify-center items-center">
        <img
          src={secondImage}
          alt="The handpainted archways in the castle"
          className="w-72 p-3 md:w-full"
        />
      </div>
      <div className="flex flex-col items-center mx-4 md:m-12">
        <div>
          <h3 className="text-2xl md:text-8xl md:absolute md:left-64 md:ml-2 md:mt-6 2xl:ml-72 mr-36 mt-6 font-span">
            THE GRAND
          </h3>
        </div>
        <div>
          <h3 className="text-3xl md:text-9xl font-spanlight italic ml-24 md:mt-12 md:ml-96 -mt-8">
            DAME OF
          </h3>
        </div>
        <div>
          <h3 className="text-4xl md:text-13xl font-span md:mt-12">WESTCHESTER.</h3>
        </div>
      </div>
      <TextScroll imageUrl={thridImage} text="THE ROYAL TREATMENT IS OUR GOLD STANDARD" />
    </div>
  );
}
