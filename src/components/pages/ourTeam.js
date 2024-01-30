import AboutPins from "../aboutPins";
import PortraitGallery from "../portraitGallery";

export default function OurTeam() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-3xl font-span">
        4 Different States, Creatively Connected
      </h1>
      <AboutPins />
      <h2 className="text-center text-2xl md:text-3xl font-span">WHO ARE WE</h2>
      <div className="flex flex-col items-center mx-4 md:m-12">
        <div>
          <h3 className="text-5xl md:text-8xl md:absolute md:left-80 md:ml-8 font-span">SMALL</h3>
        </div>
        <div>
          <h3 className="text-6xl md:text-9xl font-span italic mt-6 md:mt-12">BUT</h3>
        </div>
        <div>
          <h3 className="text-6xl md:text-9xl font-span">POWERFUL</h3>
        </div>
      </div>
    
      <div className="divider my-8 md:my-4 md:px-96"></div>
      <h4 className="text-center text-2xl md:text-3xl font-span">INTRODUCING OUR VILLAGE</h4>
      
      <PortraitGallery />
      <div className="divider my-8 md:my-4 md:px-96"></div>
      <h5 className="text-center text-2xl md:text-3xl font-span">WRITE SOMETHING WITTY HERE</h5>
    </div>
  );
}