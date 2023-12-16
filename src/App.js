import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Splash from "./components/pages/splash";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
