//Components
import AboutPins from "../aboutPins";
import PortraitGallery from "../portraitGallery";
import FlapClock from "../flapClock";
import CustomBulletList from "../customBulletpointList";
import NavBar from "../navbar";

export default function OurTeam() {
  return (
    <>
      <NavBar isTransparent={true} showLogo={true} colorTheme="black" />
      <div className="md:mt-72 mt-44">
        <h1 className="text-center text-2xl md:text-4xl font-span">
          4 Different States, Creatively Connected
        </h1>
        <AboutPins />
        <h2 className="text-center text-2xl md:text-4xl font-span">
          WHO ARE WE
        </h2>
        <div className="flex flex-col items-center mx-4 md:m-12">
          <div>
            <h3 className="text-5xl md:text-8xl md:absolute md:left-80 md:ml-8 2xl:ml-72 font-span">
              SMALL
            </h3>
          </div>
          <div>
            <h3 className="text-6xl md:text-9xl font-spanlight italic mt-6 md:mt-12">
              BUT
            </h3>
          </div>
          <div>
            <h3 className="text-6xl md:text-9xl font-span">POWERFUL</h3>
          </div>
        </div>
        <div className="divider my-8 md:my-4 md:px-96 divide-custom-black"></div>
        <div className="text-center">
          <h4 className="text-2xl md:text-3xl font-span md:mb-4 mb-4 md:px-0 px-10">
            It takes a village to deliver a particular standard of excellence
          </h4>
          <p className="font-Napzer md:text-lg text-sm md:px-80 2xl:px-112 px-2">
            The agency got its start in 2020, during a time when a vast majority
            of corporate America was having an existential crisis. Our founder,
            originally from NYC - with a 20-year corporate background in
            integrated marketing and communications spanning a range of
            industries from hospitality to sports, health & wellness, beauty,
            and retail - was one such person who realized she would be much more
            valuable to organizations from the outside.
          </p>
          <h4 className="text-2xl md:text-3xl font-span md:my-10 my-8">
            Thus our agency was born.
          </h4>
          <p className="font-Napzer md:text-lg text-sm md:px-80 2xl:px-148 md:my-5 my-4 px-4 text-center">
            {" "}
            Our village is small but mighty, currently spanning three time zones
            and offering a collection of diverse perspectives, backgrounds, and
            expertise.
          </p>
          <p className="font-Napzer md:text-lg text-sm md:px-80 2xl:px-148 md:my-5 my-4  px-4 text-center">
            {" "}
            Having a team that works remotely doesn't mean we're out of touch or
            live on our own islands. Living in diffrent parts of the country
            allows us to bring an appreciation for varying communities and
            cultures while offering the necessary expertise to initiate a fresh
            approach to the creative process.
          </p>
          <p className="font-Napzer md:text-lg text-sm md:px-80 2xl:px-148 md:my-5 my-4 px-4 text-center">
            {" "}
            Being a boutique agency, our specialty is working with emerging
            companies and brands who are seeking true partnes to help shape
            their brands and tell their stories.
          </p>
        </div>

        <div className="divider my-8 md:my-4 md:px-96 divide-custom-black"></div>
        <h5 className="text-center text-2xl md:text-3xl font-span">
          OUR VILLAGE
        </h5>

        <PortraitGallery />

        <h6 className="text-center text-2xl md:text-3xl font-span">
          OUR VIRTUAL VILLAGE
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 px-24 py-10 m-8 md:gap-12 mx-5 md:mx-10">
          <FlapClock timezone={17} location="COLORADO" />
          <FlapClock timezone={16} location="WASHINGTON" />
          <FlapClock timezone={19} location="ILLINOIS" />
          <FlapClock timezone={18} location="MISSOURI" />
        </div>
      </div>
    </>
  );
}
