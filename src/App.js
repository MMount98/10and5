import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Splash from "./components/pages/splash";
import PreviousWork from "./components/pages/previousWork";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/previousWork" element={<PreviousWork />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
