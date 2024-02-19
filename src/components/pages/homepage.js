import FlipInAnimation from "../flipInAnimation";
import FadeInAnimation from "../fadeInAnimation";

export default function Homepage() {
  return (
    <>
      <div className="text-center font-span text-9xl md:mt-24 md:mb-16">
        <FlipInAnimation text="10 and 5" />
      </div>
      <div className="text-center font-napzer text-2xl">
      <FadeInAnimation text="A non-verbal  cue, we’ve made our mantra." />
      </div>
    </>
  );
}
