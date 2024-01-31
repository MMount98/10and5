import AboutPins from "../aboutPins";
import PortraitGallery from "../portraitGallery";
import FlapClock from "../flapClock";

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

      <div className="divider my-8 md:my-4 md:px-96"></div>
      <h4 className="text-center text-2xl md:text-3xl font-span">
        INTRODUCING OUR VILLAGE
      </h4>

      <PortraitGallery />
      <div className="divider my-8 md:my-4 md:px-96"></div>
      <h5 className="text-center text-2xl md:text-3xl font-span">
        WRITE SOMETHING WITTY HERE
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 px-24 py-10 m-8 md:gap-12 mx-5 md:mx-10">
        <FlapClock timezone={17} location="COLORADO" />
        <FlapClock timezone={18} location="KANSAS"  />
        <FlapClock timezone={19} location="CHICAGO"  />
        <FlapClock timezone={18} location="TENNESSEE"  />
      </div>
    </div>
  );
}
