//Components
import ServicesList from "../servicesList";
import NavBar from "../navbar";

export default function ServicesPage() {
  return (
    <>
      <NavBar isTransparent={true} showLogo={true} colorTheme="black" />
      <div className="header">
        <h1 className="text-4xl md:text-9xl font-span ml-4 md:ml-10 mt-40 md:mt-80">
          It Takes a Village to
        </h1>
        <h1 className="text-3xl md:text-9xl font-span ml-4 md:ml-10 ">
          Connect with Your Audience
        </h1>
      </div>
      <div className="md:text-3xl text-2xl  font-span text-center m-12">
        <h2 className="md:px-0 px-6">
        Serving Up Our Strengths on a Silver Platter
        </h2>
        <p className="md:text-xl text-sm md:px-64 md:mt-5 mt-3 font-napzer ">There’s something to be said for an agency that doesn’t claim to do it all. Identifying strengths and curating our offerings based on those specialities is important to us and should be important to you. </p>
      </div>
      <div className="servivesList md:p-5 ">
        <ServicesList
          h3="Branding"
          h4="Brand Positioning | Messaging | Identity Development | Brand Guidelines "
          descrpition="Just like in life, figuring out who you are or who you want to be is the hardest part and ever-evolving.  We actively listen to what our clients  and  their vision  and help bridge the gap from their dream to reality."
        />
        <ServicesList
          h3="Content Creation"
          h4="STORYTELLING / COPYWRITING / CREATIVE ASSETS"
          descrpition="Content is king and will continue to be the top dog for the foreseeable future.  A brand without compelling  and engaging content is DOA.  We exist to ensure you keep thriving and your audience keeps consuming."
        />
        <ServicesList
          h3="Social Media"
          h4="Campaign Strategy | Story Development | Copywriting | Creative Assets Production"
          descrpition="We don’t chase viral content; our use of social media is to strategically enhance your brand’s identity by fostering a community that genuinely connects with your message."
        />
        <ServicesList
          h3="Websites"
          h4="DESIGN / DEVELOPMENT"
          descrpition="Standing out in the crowded online market requires more than a template, your website should reflect your brand’s identity, through customization and strategy."
        />
        <ServicesList
          h3="EXPERIENTIAL MARKETING"
          h4="Programming Ideation | Special Event Concepts"
          descrpition="Recent research had indicated that consumers are willing to spend on experiences over products and services.  We help create unique programming and events that will resonate with your audience.  "
        />
        <ServicesList
          h3="MARKETING INFRASTRUCTURE"
          h4="Process Tools | Procedure Protocols |  Organizational Tactics "
          descrpition="A great man (Matthew McConaughey) once said , “Create structure to have freedom.”  We are the ultimate puzzle masters, linking every piece together to create a powerhouse of productivity, where every move aligns efforts and maximizes efficiency across all touchpoints."
        />
      </div>
    </>
  );
}
