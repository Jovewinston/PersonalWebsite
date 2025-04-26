import NavBar from "../components/NavBar";
import './GenDigitalPage.css';
import { useEffect, useRef } from "react";  
import { Link } from 'react-router-dom';

export default function BilbyPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="centered-container">
      <Link to="/fileWizPage" className="next-button">
        <p>Next project / experience →</p>
      </Link>
        <h1 className="project-h1">BilbyNotes</h1>
        <h2 className="project-h2">Demo Video (Still in Progress)</h2>

        <div className="responsive-video">
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            width="100%"
          >
            <source src="/videos/demo_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="proj-description">
          Building <strong>Bilby</strong>, a tool that helps students take better notes just by taking screenshots. Let’s say you’re watching a lecture or reading something online — you can screenshot a slide or diagram, and the app will pull out the important info like text, tables, and even images. It then organizes it all into clean, readable notes that automatically get saved to your text editor.

It uses a Chrome extension so you can take screenshots straight from your browser and send them to your notes editor. Down the line, my team wants to add more features that would help someone create a cheat sheet or glossary in just one click, and even feature that help you understand and interact with your notes better.
        </p>
        <br />
      </div>
    </div>
  );
}
