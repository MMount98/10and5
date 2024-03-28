//Components
import ServicesList from "../servicesList";
import NavBar from "../navbar";
import Footer from "../footer";

export default function ServicesPage() {
  return (
    <div className="bg-custom-white">
      <NavBar isTransparent={true} showLogo={true} colorTheme="black" />
      <div className="header flex h-72 md:h-screen -mb-24 md:-mb-56 justify-center items-center overflow-hidden">
        <div className="flex flex-col">
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-span mb-[-0.75rem] sm:mb-[-1rem] md:mb-[-1.5rem] lg:mb-[-2rem] pl-20 sm:pl-36 md:pl-36 lg:pl-36 xl:pl-44 2xl:pl-36">
            SERVING UP
          </div>
          <div className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 2xl:text-9xl font-spanlight italic self-end mb-[-0.5rem] sm:mb-[-.75rem] md:mb-[-1rem] lg:mb-[-1rem]">
            OUR STRENGTHS
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl 2xl:text-10xl font-span">
            ON A SILVER PLATTER
          </div>
        </div>
      </div>
      <div className="md:text-3xl text-2xl  font-span text-center m-12">
        <p className="md:text-xl text-sm md:px-64 md:mt-5 mt-3 font-napzer ">
          There’s something to be said for an agency that doesn’t claim to do it
          all. Identifying strengths and curating our offerings based on those
          specialities is important to us and should be important to you.{" "}
        </p>
      </div>
      <div className="servivesList md:p-5 ">
        <ServicesList
          number="01"
          h3="Branding"
          h4="Brand Positioning / Messaging / Identity Development / Brand Guidelines "
          description="Just like in life, figuring out who you are or who you want to be is the hardest part and ever-evolving.  We actively listen to what our clients  and  their vision  and help bridge the gap from their dream to reality."
        />
        <ServicesList
          number="02"
          h3="Content Creation"
          h4="Storytelling / Copywriting / Creactive Assets"
          description="Content is king and will continue to be the top dog for the foreseeable future.  A brand without compelling  and engaging content is DOA.  We exist to ensure you keep thriving and your audience keeps consuming."
        />
        <ServicesList
          number="03"
          h3="Social Media"
          h4="Campaign Strategy / Story Development / Copywriting / Creative Assets Production"
          description="We don’t chase viral content; our use of social media is to strategically enhance your brand’s identity by fostering a community that genuinely connects with your message."
        />
        <ServicesList
          number="04"
          h3="Websites"
          h4="Design / Development"
          description="Standing out in the crowded online market requires more than a template, your website should reflect your brand’s identity, through customization and strategy."
        />
        <ServicesList
          number="05"
          h3="EXPERIENTIAL  MARKETING"
          h4="Programming Ideation / Special Event Concepts"
          description="Recent research had indicated that consumers are willing to spend on experiences over products and services.  We help create unique programming and events that will resonate with your audience.  "
        />
        <ServicesList
          number="06"
          h3="MARKETING INFRASTRUCTURE"
          h4="Process Tools / Procedure Protocols /  Organizational Tactics "
          description="A great man (Matthew McConaughey) once said , “Create structure to have freedom.”  We are the ultimate puzzle masters, linking every piece together to create a powerhouse of productivity, where every move aligns efforts and maximizes efficiency across all touchpoints."
        />
      </div>
      <Footer />
    </div>
  );
}
