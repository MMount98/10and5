import heroImg from "../images/Mountain View Grand - Selected Work/MVG Hero Image.png";
import img1 from "../images/clineFamily/Cline Final Logo Section.png";
import img2 from "../images/clineFamily/Cline Expaned Logo Section.png";
import img3 from "../images/clineFamily/Custom pages section.png";

import NavBar from "../navbar";
import Footer from "../footer";

export default function ClineFamilySubPage() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={true} colorTheme="white" showLogo={true} />
      <img src={heroImg} alt="hero image" />
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl uppercase">
            cline family hotels
          </h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            THe Tonopah Townie
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5 uppercase">
            BRANDing / logo design / website refresh
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            When approached to help the Cline family market their hotels in
            Tonapah, NV, we knew right away that a last name that is synonymous
            with award-wining wine and wine cellars in Sonoma, should be
            leveraged. Starting with an umbrella company rebrand, 10and5
            Creative injected life and personality into their three distinct
            properties located uniquely in the desert.
          </p>
        </div>
      </div>
      <div className="logoIntro text-center">
        <h3 className="uppercase font-napzer text-xl">originally</h3>
        <h3 className="uppercase italic font-spanlight text-4xl lg:text-6xl ">
          the tonopah collection
        </h3>
        <p className="font-napzer text-lg lg:text-xl">
          Comprised of Belvada Hotel, Mizpah Hotel and Tonopah Brewing Company
        </p>
        <p className="font-napzer text-lg my-8 px-8 lg:px-96 2xl:px-148">
          Introducing the powerhouse behind the revitalizing properties; Fred
          and Nancy Cline, 10and5 Creative saw an opportunity using the equity
          in the Cline Family name thus Cline Family Hotels was born.{" "}
        </p>
        <div className="divider px-8 lg:px-96 color-custom-black"></div>
        <h3 className="uppercase font-napzer text-xl">rebranding</h3>
        <h3 className="uppercase italic font-spanlight text-4xl lg:text-6xl">
          cline family hotels
        </h3>
        <p className="font-napzer text-lg">
          Housing Belvada Hotel, Mizpah Hotel and Tonopah Brewing Company
        </p>
      </div>
      <div className="logoImages my-12">
        <img
          src={img1}
          alt="logos for cline family"
          className="w-full lg:ml-24"
        />
        <h4 className="text-center font-napzer italic lg:text-xl">
          Designed with expansion in mind.
        </h4>
        <img src={img2} alt="logos for cline family" className="w-full" />
      </div>
      <div className="logoIntro text-center">
        <h3 className="uppercase font-span text-4xl lg:text-6xl ">
          mizpah hotel
        </h3>
        <p className="font-napzer text-md lg:text-xl italic uppercase">
          website redesign / brand positioning
        </p>
        <p className="font-napzer text-lg lg:text-xl uppercase mt-8">
          brand re-positioning{" "}
        </p>
        <p className="font-napzer text-lg my-8 px-8 lg:px-96 2xl:px-148">
          Dubbed as the #1 Haunted Hotel in America by USA Today’s 10 Best
          Readers’ Choice Awards, 10and5creative saw an opportunity to lean in
          and differentiate the hotel’s position in a crowded hospitality space.
          By embracing its rich history and paranormal activity, the hotel’s new
          website aims to attract a diverse audience of adventure-seekers,
          history enthusiasts, and paranormal junkies, ultimately driving
          increased bookings and brand recognition
        </p>
      </div>
      <img
        src={img3}
        alt="collage of the custome built site for mizpah hotel"
      />
      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/castle-hotel" className="md:py-0 py-2 text-right">
            Castle <br></br> hotel & Spa
          </a>
          <a href="/haycreek-hotels" className="md:py-0 py-2">
            Haycreek <br></br> corporate
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
