import "./App.scss";
import "./styles/partials/_global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
// import MotorPage from "./pages/MotorPage/MotorPage";
// import NeuroDivergencePage from "./pages/NeurodivergencePage/NeurodivergencePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CognitivePage from "./pages/CognitivePage/CognitivePage";
import HearingPage from "./pages/HearingPage/HearingPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* temporary route */}
          {/* <Route path="/motor" element={<MotorPage />} />
          <Route path="/neuro" element={<NeuroDivergencePage />} />
          <Route path="/cognitive" element={<CognitivePage />} /> */}
          <Route path="/" element={<HearingPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
