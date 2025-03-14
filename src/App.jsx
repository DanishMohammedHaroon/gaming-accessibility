import "./App.scss";
import "./styles/partials/_global.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MotorPage from "./pages/MotorPage/MotorPage";
import VisionPage from "./pages/VisionPage/VisionPage";
import GeneralPage from "./pages/GeneralPage/GeneralPage";
import HearingPage from "./pages/HearingPage/HearingPage";
import CognitivePage from "./pages/CognitivePage/CognitivePage";
import NeuroDivergencePage from "./pages/NeurodivergencePage/NeurodivergencePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpeechPage from "./pages/SpeechPage/SpeechPage";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/motor" element={<MotorPage />} />
          <Route path="/neuro" element={<NeuroDivergencePage />} />
          <Route path="/hearing" element={<HearingPage />} />
          <Route path="/cognitive" element={<CognitivePage />} />
          <Route path="/general" element={<GeneralPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/speech" element={<SpeechPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
