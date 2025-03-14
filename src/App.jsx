import "./App.scss";
import "./styles/partials/_global.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpeechPage from "./pages/SpeechPage/SpeechPage";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/speech" element={<SpeechPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
