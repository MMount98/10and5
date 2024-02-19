//Components/Animations
import FlipInAnimation from "../flipInAnimation";
import FadeInAnimation from "../fadeInAnimation";
import ForwardTextAnimation from "../forwardTextAnimation";
import SpiningInAnimation from "../spiningInAnimaiton";
import OutToInAnimation from "../outToInAnimation";
import PopUpTextAnimation from "../popUpTextAnimation";

export default function Homepage() {
  return (
    <>
      <div className="flippingInAnimation md:my-12">
        <div className="h1 text-center font-span md:text-9xl md:mt-24 md:mb-16">
          <FlipInAnimation text="10 and 5" />
        </div>
        <div className="p1 text-center font-napzer md:text-2xl">
          <FadeInAnimation text="A non-verbal  cue, we’ve made our mantra." />
        </div>
      </div>
      <div className="forwardAnimation-1 md:my-12">
        <div className="h2 text-center font-span md:text-9xl md:mt-24 md:mb-16 md:px-96">
          <ForwardTextAnimation text="AN AGENCY ROOTED IN HOSPITALITY" />
        </div>
        <div className="p2 text-center font-napzer md:text-3xl md:px-96">
          <FadeInAnimation text="A talented team of individuals with a heart and soul for the service industry.  Experts in emotional connections, we take immense pride in our  understanding of what it takes to make someone feel." />
        </div>
      </div>
      <div className="forwardAnimation-2 md:my-12">
        <div className="h3 text-center font-span md:text-9xl md:mt-24 md:mb-16 md:px-96">
          <ForwardTextAnimation text="CONNECTED BY CURIOUS CREATIVITY" />
        </div>
        <div className="p3 text-center font-napzer md:text-3xl md:px-96">
          <FadeInAnimation text="We take ADHD to another level.  The content we create is fool-proofed by our team of restless creatives. We  create content that will capture  our own hard- to- command attention.  " />
        </div>
      </div>
      <div className="forwardAnimation-3 md:my-12">
        <div className="h4 text-center font-span md:text-9xl md:mt-24 md:mb-16 md:px-72">
          <ForwardTextAnimation text="IMPASSIONED TO DELIVER LASTING RESULTS" />
        </div>
        <div className="p4 text-center font-napzer md:text-2xl">
          <FadeInAnimation text="Like goldilocks, we don’t rest until we get it right." />
        </div>
      </div>
      <div className="spingingAnimation md:my-12">
        <div className="h5 text-center font-span md:text-9xl md:px-48">
          <SpiningInAnimation text="OUR ACCOMMODATIONS" />
        </div>
        <div className="p5 text-center font-napzer md:text-3xl md:px-96">
          <FadeInAnimation text=" We know all too well that every brand does not begin their travel journey with us at the same place.  Allow our concierge to curate the perfect blend of services that promise to stimulate engagement,  elevate your presence, and inject new life into your brand.   " />
        </div>
      </div>
      <div className="outToInAnimation md:my-12">
        <div className="h6 text-center font-span md:text-9xl md:px-48">
          <OutToInAnimation text="WHAT’S br IN  A br NAME?" />
        </div>
        <div className="p6 text-center font-napzer md:text-3xl md:px-96">
          <FadeInAnimation text="That which we call a creative agency / By any other name would smell as sweet." />
        </div>
        <div className="p6 text-center font-napzer md:text-3xl md:px-96 font-extrabold">
          <FadeInAnimation text="But would it, Dear Shakespeare?" />
        </div>
        <div className="p6 text-center font-napzer md:text-3xl md:px-96">
          <FadeInAnimation
            text="We don’t know if other agencies smell sweeter, but we do know that our name speaks volumes about our mission and most certainly distinguishes us from the rest.  The 10/5 rule, also know as the “zone of hospitality” is an iconic training technique that provides a very straight forward guideline for fostering positive interactions. It originated in the hospitality industry as a way to ensure that staff consistently demonstrate a friendly and attentive demeanor towards guests.When within 10 feet of someone, make eye contact. When within 5 feet of someone, initiate a greeting or offer assistance. This rules effectiveness lies in its simplicity and practicality as it provides a brilliant framework for initiating a sense of connection and engagement with others. 
            It’s on these fundamental principles that we’ve built our agency. "
          />
        </div>
      </div>
      <div className="popUpAnimation md:my-24">
        <div className="h7 text-center font-span md:text-8xl md:px-48">
          <PopUpTextAnimation
            text="“People will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
- Maya Angelou"
          />
        </div>
      </div>
    </>
  );
}
