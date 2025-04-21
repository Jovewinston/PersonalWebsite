// src/components/HeroSection.jsx
import NavBar from "./NavBar";
import './HeroSection.css'; // make sure to import your CSS

export default function () {
  return (
    <div className="hero" id="home">
      <div className="overlay"></div>
      <NavBar />
      <div className="hero-text">
      <div className="typing-container">
        <h1 className="first-name typing">Jove Winston</h1>
      </div>
      <h1 className="last-name"><i>Pendapotan</i></h1>
      </div>
    </div>
  );
}



