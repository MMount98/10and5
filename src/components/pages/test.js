import SideScrollSection from "../sideScrollAnimation";
import NavBar from "../navbar";

// Images
import heroImg from "../images/Mountain View Grand - Selected Work/MVG_Hero Image.jpg";
import secImg from "../images/Mountain View Grand - Selected Work/MVG_Yellow llama 1.jpg";

export default function Test() {
  return (
    <>
      <div className="my-96">hi</div>
      <div className="my-96">hi</div>
      <div className="my-96">
        <SideScrollSection>
          <img src={heroImg} alt="Description" className="w-auto" />
          <div className="text-xl text-white">Your text here</div>
        </SideScrollSection>
        <div className="my-96">hi</div>
        <div className="my-96">hi</div>
      </div>
    </>
  );
}
