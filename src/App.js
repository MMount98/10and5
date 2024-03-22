import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import PreviousWork from "./components/pages/previousWork";
import OurTeam from "./components/pages/ourTeam";
import HartnessSubPage from "./components/pages/hartnessSubPage";
import NobleSubPage from "./components/pages/nobleKitchenSubPage";
import HaycreekSubPage from "./components/pages/haycreekSubPage";
import MVGSubPage from "./components/pages/mvgSubPage";
import CastleSubPage from "./components/pages/castleSubPage";
import ServicesPage from "./components/pages/servicesPage";
import Homepage from "./components/pages/homepage";
import Test from "./components/pages/test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/previousWork" element={<PreviousWork />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/hotel-hartness" element={<HartnessSubPage />} />
          <Route path="/noble-kitchen" element={<NobleSubPage />} />
          <Route path="/haycreek-hotels" element={<HaycreekSubPage />} />
          <Route path="/MVG" element={<MVGSubPage />} />
          <Route path="/castle-hotel" element={<CastleSubPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
