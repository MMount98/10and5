import FlipInAnimation from "../flipInAnimation";
import FadeInAnimation from "../fadeInAnimation";
import ForwardTextAnimation from "../forwardTextAnimation";

export default function Homepage() {
  return (
    <>
      <div className="text-center font-span text-9xl md:mt-24 md:mb-16">
        <FlipInAnimation text="10 and 5" />
      </div>
      <div className="text-center font-napzer text-2xl">
      <FadeInAnimation text="A non-verbal  cue, we’ve made our mantra." />
      </div>
      <div className="text-center font-span text-9xl md:mt-24 md:mb-16 md:px-96">
        <ForwardTextAnimation text="AN AGENCY ROOTED IN HOSPITALITY" />
      </div>
      <div className="text-center font-napzer text-2xl">
      <FadeInAnimation text="A non-verbal  cue, we’ve made our mantra." />
      </div>
    </>
  );
}
