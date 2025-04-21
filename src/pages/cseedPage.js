import NavBar from "../components/NavBar";
import './GenDigitalPage.css';
import { Link } from 'react-router-dom';

export default function cseedPage() {
    return (
        <div>
            <NavBar />
            <div className="centered-container">
                <Link to="/datathonPage" className="next-button">
                    <p>Next project / experience →</p>
                </Link>
                <h1 className="project-h1">cseed buildspace @ UW</h1>
                <h2 className="project-h2">
                <a
                        href="https://www.cseed.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-btn"
                    >
                        Visit our website ↗
                    </a>
                </h2>
                
                <div className="responsive-website-link">
                   
                </div>

                <p className="proj-description">  At <strong>cseed buildspace</strong>, I co-direct a 6-week program where students come together to build anything they're passionate about from software projects to building their own YouTube Channel from the ground up. Each week, we host build sessions that include short ice breakers, focused build time, and a final Demo Day to showcase everyone’s projects. As a co-director, I help shape the program experience and ensure participants get the support they need to bring their ideas to life. We have over <strong>600+ members</strong> in our cseed community and have succesfully supported the creation of <strong>70+ innovative projects</strong> by engineering and design students.
                </p>
                <img src="cseedpics/cseedpic1.jpg"className="gend-img" alt="cseed Pic 1" />
                <img src="cseedpics/cseedpic2.jpg"className="gend-img" alt="cseed Pic 2" />
                <img src="cseedpics/cseedpic3.jpg"className="gend-img" alt="cseed Pic 3" />
                <img src="cseedpics/cseedpic4.jpg"className="gend-img" alt="cseed Pic 4" />

            </div>
        </div>
    );
  }
  