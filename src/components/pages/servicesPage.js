//Components
import ServicesList from "../servicesList";

export default function ServicesPage() {
  return (
    <>
      <div className="header">
        <h1 className="text-4xl md:text-9xl font-span ml-4 md:ml-10 mt-40 md:mt-80">
          It Takes a Village to
        </h1>
        <h1 className="text-3xl md:text-9xl font-span ml-4 md:ml-10 ">
          Connect with Your Audience
        </h1>
      </div>
      <div>
        <h2 className="md:text-3xl text-2xl font-span text-center m-12">SERVICES</h2>
      </div>
      <div className="servivesList">
        <ServicesList
          h3="Branding"
          h4="The Foundation"
          h5="BRANDING POSTIONING / IDENTITY DEVELOPMENT / DESIGN"
          descrpition="Who you are or what you want to be in the market is the hardest part. Branding is not a one-time effort; it is about laying the foundation and creating systems in place for you to introduce who you are and what you stand for to the people that matter the most: your audience."
        />
        <ServicesList
          h3="Content"
          h4="Stories That Connect"
          h5="STORYTELLING / COPYWRITING / CREATIVE ASSETS"
          descrpition="Content is King and will continue to be the channel you use to leave a lasting impression. No fluff or oversell, only sincere and creative stories that turn any email, blog, social, or website content into an engaging message."
        />
        <ServicesList
          h3="Social Media"
          h4="Not About Going Viral"
          h5="STRATEGY / CAMPAIGN IDEATION / CONTENT CALENDARS / 
          INFLUENCER PARTNERSHIPS / OPTIMIZATION AND REPORTING"
          descrpition="We don’t chase viral content; our use of social media is to strategically enhance your brand’s identity by fostering a community that genuinely connects with your message."
        />
        <ServicesList
          h3="Websites"
          h4="Designed Not Duplicated"
          h5="DESIGN / DEVELOPMENT"
          descrpition="Standing out in the crowded online market requires more than a template, your website should reflect your brand’s identity, through customization and strategy."
        />
        <ServicesList
          h3="Experiential"
          h4="More Than Entertainment"
          h5="SPECIAL EVENT CONCEPTS / PROGRAMMING IDEATION"
          descrpition="Go beyond exceptional service; create lasting and memorable impressions with uniquely tailored experiences that build on your brand’s vision and prompt engagement."
        />
      </div>
    </>
  );
}
