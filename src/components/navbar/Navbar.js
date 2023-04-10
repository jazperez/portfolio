import './navbar.scss';
import { Link } from "react-router-dom";
import  { useState , useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const [isScreenNarrow, setIsScreenNarrow] = useState(null);

    const checkMediaSize = () => {
        const mediaWatcher = window.matchMedia("(max-width: 700px)");
        if (mediaWatcher.matches) { 
            setIsScreenNarrow(true); 
        } else {
            setIsScreenNarrow(false); 
        }
    }

    useEffect(() => {
        checkMediaSize();
    }, []);

    if (isScreenNarrow) {
        return (
            <ul className="navbar">
                <li className="navbar-title">
                    <Link to="/portfolio/" className="navbar-title-link" alt="JP, back to Home">
                        JP
                    </Link>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jazmin-perez24/" className="nav-button pink-background nav-end" alt="Linkedin profile">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jazperez" className="nav-button purple-background" alt="Github profile">
                        <FontAwesomeIcon icon={['fab', 'github-square']} />
                    </a>
                </li>
                <li>
                    <Link to="/portfolio/experience" className="nav-button blue-background" alt="Experience">
                        <FontAwesomeIcon icon="laptop-code" />
                    </Link>
                </li>
            </ul>
        );
    } else {
        return (
            <ul className="navbar">
                <li className="navbar-title">
                    <Link to="/portfolio/" className="navbar-title-link" alt="Jazmin Perez, back to Home">
                        JP
                    </Link>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jazmin-perez24/" className="nav-button pink-background nav-end" alt="Linkedin profile">Linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/jazperez" className="nav-button purple-background" alt="Github profile">Github</a>
                </li>
                <li>
                    <Link to="/portfolio/experience" className="nav-button blue-background" alt="Experience">Experience</Link>
                </li>
            </ul>
        );
    }
}

export default Navbar;