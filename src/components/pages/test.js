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
          <img src={heroImg} alt="Description" className="w-auto h-96" />
          <div className="grid grid-cols-2 my-12">
            <div class="">
              <p>
                magnificently reborn, The Press Hotel is proudly rooted in
                Portland’s past. The structure we call home was once the Gannett
                Building, the historic headquarters of the Portland Press
                Herald—the state’s largest newspaper.
              </p>
            </div>
            <div>
              <p>
                magnificently reborn, The Press Hotel is proudly rooted in
                Portland’s past. The structure we call home was once the Gannett
                Building, the historic headquarters of the Portland Press
                Herald—the state’s largest newspaper.
              </p>
            </div>
          </div>
          <img src={heroImg} alt="Description" className="ml-96 w-auto h-96" />
        </SideScrollSection>
        <div className="my-96">hi</div>
        <div className="my-96">hi</div>
      </div>
    </>
  );
}
