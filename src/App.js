import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMeSection from './components/AboutMeSection';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import SkillSection from './components/SkillSection';
import GenDigitalPage from './pages/GenDigitalPage';
import BilbyPage from './pages/bilbyPage';
import CseedPage from './pages/cseedPage';
import FilewizPage from './pages/filewizPage';
import DatathonPage from './pages/datathonPage'
import ErgoPage from './pages/ergoPage';
import BilbyPage from './pages/bilbyPage';
function Home() {
  return (
    <div className="App">
      <HeroSection />
      <AboutMeSection />
      <div className="wave-divider">
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
          <path
            className="wave-path"
            d="M0,85 C360,-80 1080,260 1440,85 L1440,300 L0,300 Z"
            fill="#1b2b41"
          />
        </svg>
      </div>
      <ProjectSection />
      <SkillSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gendigitalPage" element={<GenDigitalPage />} />
        <Route path="/bilbyPage" element={<BilbyPage />} />
        <Route path="/cseedPage" element={<CseedPage />} />
        <Route path="/filewizPage" element={<FilewizPage />} />
        <Route path="/datathonPage" element={<DatathonPage />} />
        <Route path="/ergoPage" element={<ErgoPage />} />





        </Routes>
    </Router>
  );
}

export default App;
