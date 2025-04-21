import './AboutMeSection.css';
import casualPic from './casualPic.png'; 
import ScrollToHashElement from "./ScrollToHashElement"; 
export default function () {
  return (
    
    <section className="section about-section" id="about">
      <ScrollToHashElement />
      <div className="about-content">
        <div className="about-text">
          <p className="about-me">About Me</p>
            <h2>
            <strong>
                <span className="scribble-highlight">Hey there,&nbsp; I’m Jove</span>
            </strong> 
            </h2>
            <p>
            <i>I'm a Computer Science student at UW</i> who builds things mostly because something annoyed me and I figured I could fix it 🛠️. 
          I love turning everyday inefficiencies into <strong>clean, useful tools 📊</strong> — 
          especially if they solve a problem I’ve faced myself 
          (and yours too, if they’re interesting enough). Outside of tech, I’ve been a <i>classical pianist 🎹</i> all my life, which sounds fancy until you realize I mostly 
          use those skills to <strong>play pop songs</strong>. You’d probably find me <strong>shooting hoops 🏀</strong> when I’m stressed — <i>it’s cheaper than therapy.</i>😅
            </p>

        </div>
        <div className="about-image">
            <img src={casualPic} alt="Jove" /> 
        </div>
        <div id="projects"></div>
      </div>
    </section>
  );
}
