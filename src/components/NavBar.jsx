import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
      <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/#home">Home</Link></li>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#skill">Skills</Link>
          </ul>
      </nav>
    );
  }

