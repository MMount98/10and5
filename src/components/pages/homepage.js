//Components/Animations
import FlipInAnimation from "../flipInAnimation";
import FadeInAnimation from "../fadeInAnimation";
import ForwardTextAnimation from "../forwardTextAnimation";
import SpiningInAnimation from "../spiningInAnimaiton";
import OutToInAnimation from "../outToInAnimation";
import PopUpTextAnimation from "../popUpTextAnimation";
import NavBar from "../navbar";

export default function Homepage() {
  return (
    <>
      <NavBar colorTheme="black" isTransparent={false} showLogo={false} />
      <div className=" bg-custom-white -mb-24 mt-36">
        <div className="flippingInAnimation md:my-12 text-custom-black md:mb-56 xl:mb-64 pt-44 md:pt-0">
          <div className="h1 text-center font-span md:text-20xl text-10xl md:mt-24 md:mb-5 ">
            <FlipInAnimation text="10and5" time={1} />
          </div>
          <div className="h1 text-center font-napzer md:text-10xl text-6xl md:-mt-36 -mt-12 mb-16 md:mb-0">
            <FlipInAnimation text="C R E A T I V E" time={2} />
          </div>
          <div className="p1 text-center font-napzer md:text-2xl">
            <FadeInAnimation text="A non-verbal  cue, we’ve made our mantra." />
          </div>
        </div>
        <div className="forwardAnimation-1 md:my-12 text-custom-black md:mb-56 xl:mb-64">
          <div className="h2 text-center font-span md:text-9xl text-4xl md:mt-24 md:mb-16 mt-72 ">
            <ForwardTextAnimation text="AN AGENCY br ROOTED  IN  HOSPITALITY" />
          </div>
          <div className="p2 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text="A talented team of individuals with a heart and soul for the service industry.  Experts in emotional connections, we take immense pride in our  understanding of what it takes to make someone feel." />
          </div>
        </div>
        <div className="forwardAnimation-2 md:my-12 text-custom-black md:mb-56 xl:mb-64">
          <div className="h3 text-center font-span md:text-8xl text-4xl md:mt-24 mt-56 md:mb-16 xl:px-64">
            <ForwardTextAnimation text="CONNECTED  BY br CURIOUS   CREATIVITY" />
          </div>
          <div className="p3 text-center font-napzer md:text-3xl md:px-72 px-6 mt-8 md:mt-0">
            <FadeInAnimation text="The content we create is fool-proofed by our team of restless creatives. We  create content that will capture  our own hard-to-command attention.  " />
          </div>
        </div>
        <div className="forwardAnimation-3 md:my-12 text-custom-black md:mb-56 xl:mb-64">
          <div className="h4 text-center font-span md:text-8xl text-4xl md:mt-24 mt-56 md:mb-16 xl:px-64">
            <ForwardTextAnimation text="IMPASSIONED  TO  DELIVER br LASTING  RESULTS" />
          </div>
          <div className="p4 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text="Like goldilocks, we don’t rest until we get it right." />
          </div>
        </div>
        <div className="spingingAnimation md:my-12 text-custom-black md:mb-56 xl:mb-64">
          <div className="h5 text-center font-span md:text-8xl text-2xl md:mt-24 mt-44 md:mb-16 xl:px-36">
            <SpiningInAnimation text="OUR ACCOMMODATIONS" />
          </div>
          <div className="p5 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text=" We know all too well that every brand does not begin their travel journey with us at the same place.  Allow our concierge to curate the perfect blend of services that promise to stimulate engagement,  elevate your presence, and inject new life into your brand.   " />
          </div>
        </div>
        <div className="outToInAnimation md:my-12 text-custom-black md:mb-56 xl:mb-24">
          <div className="h6 text-center font-span md:text-8xl text-4xl md:mt-24 mt-72 md:mb-16 xl:px-64">
            <OutToInAnimation text="WHAT’S    IN   A    NAME?" />
          </div>
          <div className="p6 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text="That which we call a creative agency By any other name would smell as sweet." />
          </div>
          <div className="p6 text-center font-span lg:text-5xl md:text-3xl md:px-96 px-6 md:py-5 mt-8 md:mt-0 font-extrabold">
            <FadeInAnimation text="But would it, Dear Shakespeare?" />
          </div>
          <div className="p6 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text="We don’t know if other agencies smell sweeter, but we do know that our name speaks volumes about our mission." />
          </div>
          <div className="flex justify-center my-6">
            <div className="font-napzer md:text-3xl  lg:mt-4">
              <FadeInAnimation text="The 10/5 rule, also known as " />
            </div>
            <div className="font-span lg:text-6xl md:text-3xl md:mt-0 lg:pl-4">
              <FadeInAnimation text="the zone of hospitality" />
            </div>
          </div>
          <div className="p6 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text=" is an iconic training technique that originated in the hospitality industry as a way to ensure that staff consistently demonstrate a friendly and attentive demeanor towards guests:" />
          </div>
          <div className="p6 text-center font-span lg:text-5xl md:text-3xl md:px-96 px-6 md:py-5 mt-8 md:mt-0 font-extrabold">
            <FadeInAnimation text="When within 10 feet of someone, make eye contact." />
          </div>
          <div className="p6 text-center font-span lg:text-5xl md:text-3xl md:px-96 px-6 md:py-5 mt-8 md:mt-0 font-extrabold">
            <FadeInAnimation text="When within 5 feet of someone, initiate a greeting." />
          </div>
          <div className="p6 text-center font-napzer md:text-3xl md:px-96 px-6 mt-8 md:mt-0">
            <FadeInAnimation text=" This rules effectiveness lies in its simplicity and practicality as it provides a brilliant framework for initiating a sense of connection and engagement with others. " />
          </div>
          <div className="p6 text-center font-span lg:text-5xl md:text-3xl md:px-96 px-6 md:py-5 mt-8 md:mt-0 font-extrabold">
            <FadeInAnimation text="It's on these fundamental principles we've built our agency" />
          </div>
        </div>

        <div className="popUpAnimation md:my-24 md:py-8 text-custom-black">
          <div className="h7 text-center font-span md:text-6xl text-xl md:pb-36 pb-44 md:mt-1 2xl:mb-14 xl:mb-10 lg:mb-8 md:mb-2 mb-0 mt-44 2xl:px-96 lg:px-44 ">
            <PopUpTextAnimation
              text="“People will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
- Maya Angelou"
            />
          </div>
        </div>
      </div>
    </>
  );
}
