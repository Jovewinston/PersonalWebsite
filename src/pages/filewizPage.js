import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import './GenDigitalPage.css';
import { Link } from 'react-router-dom';

export default function FilewizPage() {
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
      <Link to="/GenDigitalPage" className="next-button">
        <p>Next project / experience →</p>
      </Link>
        <h1 className="project-h1">FileWiz</h1>
        <h2 className="project-h2">Demo Video (Turn Audio On!)</h2>
        <div className="responsive-video">
          <video
            ref={videoRef}
            controls
            autoPlay
            width="100%"
          >
            <source src="/videos/filewiz_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="proj-description">
          <strong>FileWiz</strong>, a Windows extension that adds tools like <strong>Remove Background and Image Modifier</strong> directly to the right-click <strong>context menu on Windows</strong> (because Windows don't have this unlike Mac per 2024). To make installation effortless, it's a streamlined setup that automates the download and registry configuration process. By modifying directly the Windows Registry, it enabled seamless integration of these tools into the system menu. FileWiz <strong>eliminates the need to access external websites for simple file tasks</strong>, significantly improving these quick actions task completion time and security!
        </p>
      </div>
    </div>
  );
}
