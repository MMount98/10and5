import FlipInAnimation from "../flipInAnimation";
import FadeInAnimation from "../fadeInAnimation";
import ForwardTextAnimation from "../forwardTextAnimation";
import SpiningInAnimation from "../spiningInAnimaiton";

export default function Homepage() {
  return (
    <>
      <div className="h1 text-center font-span text-9xl md:mt-24 md:mb-16">
        <FlipInAnimation text="10 and 5" />
      </div>
      <div className="p1 text-center font-napzer text-2xl">
        <FadeInAnimation text="A non-verbal  cue, we’ve made our mantra." />
      </div>
      <div className="h2 text-center font-span text-9xl md:mt-24 md:mb-16 md:px-96">
        <ForwardTextAnimation text="AN AGENCY ROOTED IN HOSPITALITY" />
      </div>
      <div className="p2 text-center font-napzer text-2xl">
        <FadeInAnimation text="A talented team of individuals with a heart and soul for the service industry.  Experts in emotional connections, we take immense pride in our  understanding of what it takes to make someone feel." />
      </div>
      <div className="h3 text-center font-span text-9xl md:mt-24 md:mb-16 md:px-96">
        <ForwardTextAnimation text="CONNECTED BY CURIOUS CREATIVITY" />
      </div>
      <div className="p3 text-center font-napzer text-2xl">
        <FadeInAnimation text="We take ADHD to another level.  The content we create is fool-proofed by our team of restless creatives. We  create content that will capture  our own hard- to- command attention.  " />
      </div>
      <div className="h4 text-center font-span text-9xl md:mt-24 md:mb-16 md:px-72">
        <ForwardTextAnimation text="IMPASSIONED TO DELIVER LASTING RESULTS" />
      </div>
      <div className="p4 text-center font-napzer text-2xl">
        <FadeInAnimation text="Like goldilocks, we don’t rest until we get it right." />
      </div>
      <div className="h5 text-center font-span text-9xl md:px-48">
        <SpiningInAnimation text="OUR ACCOMMODATIONS" />
      </div>
      <div className="p5 text-center font-napzer text-2xl">
        <FadeInAnimation text=" We know all too well that every brand does not begin their travel journey with us at the same place.  Allow our concierge to curate the perfect blend of services that promise to stimulate engagement,  elevate your presence, and inject new life into your brand.   " />
      </div>
    </>
  );
}
