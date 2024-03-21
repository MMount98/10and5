//Components
import ServicesList from "../servicesList";
import NavBar from "../navbar";

export default function ServicesPage() {
  return (
    <>
      <NavBar isTransparent={true} showLogo={true} colorTheme="black" />
      <div className="header">
        <div className="flex flex-col items-center mx-4 md:m-12 2xl:pt-56 xl:pt-36 lg:pt-44 md:pt-44 pt-24">
          <div>
            <h3 className="text-4xl 2xl:text-8xl md:text-6xl md:absolute md:left-36 md:ml-2 md:mt-6 md:mb-0 2xl:ml-44 xl:ml-56 lg:ml-44 mr-44 xl:mt-0 mt-12 mb-6 font-span uppercase">
              Serving Up
            </h3>
          </div>
          <div>
            <h3 className="text-4xl 2xl:text-9xl xl:text-7xl font-spanlight italic pl-12 md:mt-12 md:ml-36 lg:mr-36 2xl:ml-96 2xl:mr-1 -mt-8 uppercase">
              Our Strengths
            </h3>
          </div>
          <div>
            <h3 className="text-4xl 2xl:text-13xl xl:text-9xl font-span uppercase">
              on a Silver Platter
            </h3>
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
          descrpition="Just like in life, figuring out who you are or who you want to be is the hardest part and ever-evolving.  We actively listen to what our clients  and  their vision  and help bridge the gap from their dream to reality."
        />
        <ServicesList
          number="02"
          h3="Content Creation"
          h4="Storytelling / Copywriting / Creactive Assets"
          descrpition="Content is king and will continue to be the top dog for the foreseeable future.  A brand without compelling  and engaging content is DOA.  We exist to ensure you keep thriving and your audience keeps consuming."
        />
        <ServicesList
          number="03"
          h3="Social Media"
          h4="Campaign Strategy / Story Development / Copywriting / Creative Assets Production"
          descrpition="We don’t chase viral content; our use of social media is to strategically enhance your brand’s identity by fostering a community that genuinely connects with your message."
        />
        <ServicesList
          number="04"
          h3="Websites"
          h4="Design / Development"
          descrpition="Standing out in the crowded online market requires more than a template, your website should reflect your brand’s identity, through customization and strategy."
        />
        <ServicesList
          number="05"
          h3="EXPERIENTIAL  MARKETING"
          h4="Programming Ideation / Special Event Concepts"
          descrpition="Recent research had indicated that consumers are willing to spend on experiences over products and services.  We help create unique programming and events that will resonate with your audience.  "
        />
        <ServicesList
          number="06"
          h3="MARKETING INFRASTRUCTURE"
          h4="Process Tools / Procedure Protocols /  Organizational Tactics "
          descrpition="A great man (Matthew McConaughey) once said , “Create structure to have freedom.”  We are the ultimate puzzle masters, linking every piece together to create a powerhouse of productivity, where every move aligns efforts and maximizes efficiency across all touchpoints."
        />
      </div>
    </>
  );
}
