import NavBar from "../components/NavBar";
import './GenDigitalPage.css';
import { Link } from 'react-router-dom';
export default function ergoPage() {
    return (
        <div>
            <NavBar />
            <div className="centered-container">
                <Link to="/notdPage" className="next-button">
                    <p>Next project / experience →</p>
                </Link>
                <h1 className="project-h1">Ergo</h1>
                <h2 className="project-h2">
                3rd Place AI Hackathon Winner
                </h2>
                <img src="ergopics/ergoPic.png"className="gend-img" alt="datathon Pic 1" />
                <p className="proj-description">  Co-developed <strong>Ergo</strong>, the concept for an innovative AI-driven system offers personalized recommendations for ergonomic products, marking a significant leap forward in how we approach workplace health and personal well-being. <strong>Youngest team to win the hackathon.</strong>
                </p>
            </div>
        </div>
    );
  }
  