export default function splash() {
  return (
    <>
      <div className="flex flex-col mx-6 md:mx-24">
        <div className="text-3xl md:text-9xl text-white font-oswald tracking-tighter">
          <h1>It's not about the hours <br /> that we keep,</h1>
        </div>
        <div className="text-xl md:text-4xl relative md:bottom-20 md:left-96 pl-4 md:pl-44 mt-2 font-architects text-white">
          <h1>but our mantra for making <br />lasting impressions. </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-10 my-8">
        <h1 className="border border-white px-4 py-2 md:px-20 md:py-4 font-bricolage mb-2 md:mb-0">BRAND IDENTITY</h1>
        <h1 className="border border-white px-4 py-2 md:px-20 md:py-4 font-bricolage mb-2 md:mb-0">CONTENT STRATEGY</h1>
        <h1 className="border border-white px-4 py-2 md:px-20 md:py-4 font-bricolage">CREATIVE DEVELOPMENT</h1>
      </div>
    </>
  );
}

