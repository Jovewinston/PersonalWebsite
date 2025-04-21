import NavBar from "../components/NavBar";
import './GenDigitalPage.css';
import { Link } from 'react-router-dom';
export default function Project1Page() {
    return (
        <div>
            <NavBar />
            <div className="centered-container">
                <Link to="/cseedPage" className="next-button">
                <p>Next project / experience →</p>
                </Link>
                <h1 className="project-h1">GenDigital Academy</h1>
                <h2 className="project-h2">Watch my talk @ ASEAN YOUTH SUMMIT+</h2>
                <div className="responsive-video">
                    <iframe
                    src="https://www.youtube.com/embed/7-paLo2pr-w?start=33475"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                <p className="proj-description">Presented <strong>GenDigital Academy’s</strong> work at the <strong>ASEAN+ Youth Summit 2023</strong> and signed a Memorandum of Understanding (MoU) with three Global Shapers Communities—<strong>Singapore, Phnom Penh, and Kuala Lumpur</strong>—to expand digital literacy programs across <strong>ASEAN</strong>. This marked a major milestone in GenDigital’s journey, extending our reach beyond Indonesia, where we’ve already taught over <strong>6,000+ students across 200+ locations.</strong> Led the team in curriculum development and strategic planning to ensure impactful implementation in these new communities.</p>
                <br></br>
                <h2 className="project-h2">Involvement in GenDigital Academy</h2>
                <p className="proj-description">As a current <strong>advisor</strong> and <strong>ex-president</strong> of GenDigital Academy, I’ve led efforts to bring digital literacy to students across Indonesia, from teaching weekly sessions and hosting coding workshops to breaking the national record for the biggest digital literacy teaching session in Indonesia, reaching <strong>4,500+ students in one-sitting</strong>. Through it all, I’ve focused on making tech education inclusive, practical, and empowering for underserved communities mainly in Indonesia and some parts of ASEAN.</p>
                <img src="gendigitalpics/gendpic1.JPG"className="gend-img" alt="GenDigital Pic 1" />
                <img src="gendigitalpics/gendpic7.png" className="gend-img" alt="GenDigital Pic 1" />
                <img src="gendigitalpics/gendpic5.jpg" className="gend-img" alt="GenDigital Pic 1" />
                <img src="gendigitalpics/gendpic6.png" className="gend-img" alt="GenDigital Pic 1" />



            </div>
        </div>
    );
  }
  