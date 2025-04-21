import NavBar from "../components/NavBar";
import './GenDigitalPage.css';
import { Link } from 'react-router-dom';

export default function cseedPage() {
    return (
        <div>
            <NavBar />
            <div className="centered-container">
                <Link to="/ergoPage" className="next-button">
                    <p>Next project / experience →</p>
                </Link>
                <h1 className="project-h1">U.S. Border Resource Optimization Project</h1>
                <div className="responsive-website-embed">
                <iframe
                    src="https://uwdatathon.github.io/"
                    width="100%"
                    height="600"
                    title="datathon Website"
                    style={{ border: 'none', borderRadius: '12px', overflow: 'auto' }}
                ></iframe>
                </div>
                <h2 className="project-h2">
                <a
                        href="https://uwdatathon.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-btn"
                    >
                        You can Scroll Me ↗  or click to visit website!
                    </a>
                </h2>
                
                <div className="responsive-website-link">
                   
                </div>

                <p className="proj-description">  As part of the UW Datathon ‘24, conducted in-depth analysis of U.S. border crossing data to support resource allocation strategies for Customs and Border Protection (CBP). Identified consistently higher volumes of non-commercial traffic at the U.S.-Mexico border, while the U.S.-Canada border showed distinct seasonal peaks. Incorporated historical weather data to enhance understanding of migration trends and inform the final resource distribution plan.
                </p>
                <img src="datathonpics/datathonPic.png"className="gend-img" alt="datathon Pic 1" />
            </div>
        </div>
    );
  }
  