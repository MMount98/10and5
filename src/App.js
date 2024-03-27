import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PreviousWork from "./components/pages/previousWork";
import OurTeam from "./components/pages/ourTeam";
import HartnessSubPage from "./components/pages/hartnessSubPage";
import ClineFamilySubPage from "./components/pages/clineFamilySubPage";
import HaycreekSubPage from "./components/pages/haycreekSubPage";
import MVGSubPage from "./components/pages/mvgSubPage";
import CastleSubPage from "./components/pages/castleSubPage";
import ServicesPage from "./components/pages/servicesPage";
import Homepage from "./components/pages/homepage";
import OliveJuiceSubPage from "./components/pages/oliveJuiceSubPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/previousWork" element={<PreviousWork />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/hotel-hartness" element={<HartnessSubPage />} />
          <Route path="/cline-family" element={<ClineFamilySubPage />} />
          <Route path="/haycreek-hotels" element={<HaycreekSubPage />} />
          <Route path="/MVG" element={<MVGSubPage />} />
          <Route path="/castle-hotel" element={<CastleSubPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/olive-juice" element={<OliveJuiceSubPage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
