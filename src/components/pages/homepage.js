//customCSS File
import "../customCSS/underlineAnimation.css";

export default function Homepage() {
  return (
    <>
      <div className="ourServices text-center md:px-64 px-8 md:mx-5 mb-3 mt-3">
        <h2 className="font-span md:text-2xl text-1xl">OUR SERVICES</h2>
        <p className="font-napzer py-5 md:text-md text-sm">
          One-size-fits-all solutions don’t cut it, that’s why we provide a
          tailored suite of meticulously curated services designed to meet your
          unique needs. We don’t stop at superficial marketing ploys. Our focus
          is on the real people that engage with your brand, which is why our
          goal is to forge genuine connections with your audience.
        </p>
        <div className="font-napzer md:text-sm text-xs">
          <a href="/services" className="underlineAnimation">
            <span>VIEW SERVICES</span>
          </a>
        </div>
      </div>
      <div className="blackBox text-center px- bg-custom-black">
        <h3 className="font-span md:text-7xl text-custom-white">
          HOSPITALITY GOT US<br></br>
          <span className="font-spanlight italic">STARTED,</span> YOUR AUDIENCE
          <span className="md:text-9xl text-2xl">
            <br></br>KEEPS US <span className="font-spanlight italic">GOING.</span>
          </span>
        </h3>
      </div>
    </>
  );
}
