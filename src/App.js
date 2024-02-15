import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Splash from "./components/pages/splash";
import PreviousWork from "./components/pages/previousWork";
import OurTeam from "./components/pages/ourTeam";
import HartnessSubPage from "./components/pages/hartnessSubPage";
import NobleSubPage from "./components/pages/nobleKitchenSubPage";
import HaycreekSubPage from "./components/pages/haycreekSubPage";
import MVGSubPage from "./components/pages/mvgSubPage";
import CastleSubPage from "./components/pages/castleSubPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/previousWork" element={<PreviousWork />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/hotel-hartness" element={<HartnessSubPage />} />
          <Route path="/noble-kitchen" element={<NobleSubPage />} />
          <Route path="/haycreek-hotels" element={<HaycreekSubPage />} />
          <Route path="/MVG" element={<MVGSubPage />} />
          <Route path="/castle-hotel" element={<CastleSubPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
