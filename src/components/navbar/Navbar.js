import './navbar.scss';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar () {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);

    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(max-width: 800px)");
    
        //watch for updates
        function updateIsNarrowScreen(e) {
            setIsNarrowScreen(e.matches);
        }
        mediaWatcher.addEventListener('change', updateIsNarrowScreen);
    
        // clean up after ourselves
        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
        }
    });

    if (isNarrowScreen) {
        return (
            <ul className="navbar">
            <li className="navbar-title">JP</li>
            <li>
                <a href="https://www.linkedin.com/in/jazmin-perez24/" className="nav-button pink-background nav-end" alt="Linkedin profile">L</a>
            </li>
            <li>
                <a href="https://github.com/jazperez" className="nav-button purple-background" alt="Github profile">G</a>
            </li>
            <li>
                <Link to="/portfolio/experience" className="nav-button blue-background" alt="Experience">E</Link>
            </li>
        </ul>
        );
    } else {
        return (
            <ul className="navbar">
                <li className="navbar-title">Jazmin Perez</li>
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