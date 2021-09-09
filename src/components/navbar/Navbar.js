import './navbar.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar () {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(max-width: 800px)");
    
        //watch for updates
        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }
        if(mediaWatcher.addEventListener) {
            mediaWatcher.addEventListener('change', updateIsNarrowScreen);
            return function cleanup() {
                mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
            }
        } else {
            // backwards compatibility
            mediaWatcher.addListener('change', updateIsNarrowScreen);
            return function cleanup() {
                mediaWatcher.removeListener('change', updateIsNarrowScreen);
            }
        }
    });

    if (isNarrowScreen) {
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
                        Jazmin Perez
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