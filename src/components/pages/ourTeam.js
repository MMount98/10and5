//Components
import AboutPins from "../aboutPins";
import PortraitGallery from "../portraitGallery";
import FlapClock from "../flapClock";
import CustomBulletList from "../customBulletpointList";
import NavBar from "../navbar";
import Footer from "../footer";

export default function OurTeam() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={false} showLogo={true} colorTheme="black" />
      <div className="mt-[6.89rem]">
        <h1 className="text-center text-2xl md:text-4xl font-span">
          4 Different States, Creatively Connected
        </h1>
        <AboutPins />
        <div className="flex h-72 md:h-screen justify-center items-center overflow-hidden">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <div className="text-4xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-span relative ml-0 sm:ml-6 md:ml-10">
                SMALL
              </div>
              <div className="text-6xl sm:text-10xl md:text-13xl lg:text-13xl xl:text-13xl 2xl:text-13xl font-spanlight italic ml-24 sm:ml-48 md:ml-96 -mt-7 sm:-mt-20 md:-mt-24">
                BUT
              </div>
              <div className="text-6xl sm:text-10xl md:text-13xl lg:text-13xl xl:text-13xl 2xl:text-13xl font-span relative">
                POWERFUL
              </div>
            </div>
          </div>
        </div>

        <div className="divider my-8 md:my-4 md:px-96 divide-custom-black"></div>
        <div className="text-center mx-auto max-w-4xl">
  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-span my-4 mx-4 md:mx-8 lg:mx-12">
    It takes a village to deliver a particular standard of excellence
  </h4>
  <p className="font-Napzer text-xs sm:text-sm md:text-base lg:text-lg my-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
    The agency got its start in 2020, during a time when a vast majority of corporate America was having an existential crisis. Our founder, originally from NYC - with a 20-year corporate background in integrated marketing and communications spanning a range of industries from hospitality to sports, health & wellness, beauty, and retail - was one such person who realized she would be much more valuable to organizations from the outside.
  </p>
  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-span my-8 mx-4 md:mx-8 lg:mx-12">
    Thus our agency was born.
  </h4>
  <p className="font-Napzer text-xs sm:text-sm md:text-base lg:text-lg my-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 text-center">
    Our village is small but mighty, currently spanning three time zones and offering a collection of diverse perspectives, backgrounds, and expertise.
  </p>
  <p className="font-Napzer text-xs sm:text-sm md:text-base lg:text-lg my-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 text-center">
    Having a team that works remotely doesn't mean we're out of touch or live on our own islands. Living in different parts of the country allows us to bring an appreciation for varying communities and cultures while offering the necessary expertise to initiate a fresh approach to the creative process.
  </p>
  <p className="font-Napzer text-xs sm:text-sm md:text-base lg:text-lg my-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 text-center">
    Being a boutique agency, our specialty is working with emerging companies and brands who are seeking true partners to help shape their brands and tell their stories.
  </p>
</div>


        <div className="divider my-8 md:my-4 md:px-96 divide-custom-black"></div>
        <h5 className="text-center text-2xl md:text-3xl font-span">
          OUR VILLAGE
        </h5>

        <PortraitGallery />
        
      </div>
      <Footer />
    </div>
  );
}
