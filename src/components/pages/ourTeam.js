//Components
import AboutPins from "../aboutPins";
import PortraitGallery from "../portraitGallery";
import FlapClock from "../flapClock";
import CustomBulletList from "../customBulletpointList";

export default function OurTeam() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl font-span">
        4 Different States, Creatively Connected
      </h1>
      <AboutPins />
      <h2 className="text-center text-2xl md:text-4xl font-span">WHO ARE WE</h2>
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
        <h4 className="text-2xl md:text-3xl font-span md:mb-4 mb-4">WHY?</h4>
        <p className="font-Napzer md:text-lg text-sm md:px-96 px-24">
          {" "}
          10 and 5 originated from a guideline used in the hospitality industry
          to ensure that guests received the proper level of attention, care and
          service. It's purpose is to create a welcoming and engaging
          environment for the guests, here is how it works:
        </p>
      </div>

      <div className="text-left md:px-96">
        <CustomBulletList />
      </div>
      <p className="font-Napzer md:text-lg text-sm md:px-96 px-24 text-center">
        {" "}
        Why are we bringing this back? Because the ultimate aim is making the
        pople that interact with your brand have genuine interactions, memorable
        experiences and fast real realtionships with you.
      </p>
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
  );
}
