import heroImg from "../images/hayCreek/Main Images/heroImg.jpg";

export default function HaycreekSubPage() {
  return (
    <div>
      <div>
        <img src={heroImg} alt="Hero img" />
      </div>
      <div className="introText grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h2 className="font-span text-3xl md:text-5xl">
            HAY CREEK CORPORATE
          </h2>
          <p className="text-xl md:text-3xl font-spanlight italic">
            Boutique to the bone
          </p>
          <p className="text-sm md:text-1xl font-napzer mt-5">
            BLACK FRIDAY CAMPAIGN
          </p>
        </div>
        <div>
          <p className="font-napzer md:pl-24 text-xs md:text-sm mt-5 md:mt-0">
            Hay Creek Corporate, a hotel management company that distinctly
            understands the power of nostalgia in the world of travel and hast
            the creativity and vision to see what most cannot, tasked us with
            their Black Friday campaign that spread across their hotel
            portfolio.
          </p>
          <h3 className="text-xl text-center font-span mt-8">
            MEASURED SUCCESS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xs md:text-sm p-5 gap-y-3 -mt-4">
            <p className="font-napzer">
              <span className="font-span text-lg">$1,059,233</span> Total Revenue Booked
            </p>
            <p className="font-napzer">
              +<span className="font-span text-lg">78.8%</span> YoY Total Revenue
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
