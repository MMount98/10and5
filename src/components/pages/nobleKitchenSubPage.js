import heroImg from "../images/nobleKitchen/NobleKitchenHero.jpg";
import NavBar from "../navbar";

export default function NobleSubPage() {
  return (
    <div>
      <NavBar isTransparent={true} colorTheme="black" />
      <div className="heroImage">
        <img src={heroImg} alt="Front Door of the Noble Kitchen" />
      </div>
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">
            NOBLE KITCHEN + BAR
          </h2>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BRAND STRATEGY / WEBSITE / SOCIAL MEDIA STRATEGY & SYSTEM
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Located in the heart of Brunswick, Maine, Noble Kitchen + Bar is
            built on the simple idea that superior, local ingredients will speak
            for themselves. In that spirit, they craft innovative American
            dishes and cocktails in the heart of Coastal Maine, sourcing the
            freshest sustainable foods in support of the region's families. We
            are tasked to amplify the brands's digital footprint and give their
            website some TLC so that it accurately reflects their offers.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center md:text-13xl text-9xl font-span">
          COMING SOON!
        </h2>
      </div>
      <div className="m-16">
        <h5 className="text-center font-span md:text-2xl text-lg">MORE WORK</h5>
        <div className="md:grid md:grid-cols-2 md:gap-72 md:mt-12 flex flex-col items-center font-span md:text-8xl text-2xl mt-6 uppercase">
          <a href="/haycreek-hotels" className="md:py-0 py-2">
            Hay Creek Corporate
          </a>
          <a href="/hotel-hartness" className="md:py-0 py-2">
            Hotel Hartness
          </a>
        </div>
      </div>
    </div>
  );
}
