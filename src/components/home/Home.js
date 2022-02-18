import './home.scss';
import profilePicture from "./JazPortfolioPic.png";
import { init } from "ityped";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
    const textRef = useRef();
    const [isScreenNarrow, setIsScreenNarrow] = useState(null);

    function checkMediaSize() {
        const mediaWatcher = window.matchMedia("(max-width: 700px)");
        if (mediaWatcher.matches) {
            setIsScreenNarrow(true);
        } else {
            setIsScreenNarrow(false);
        }
    }

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            backSpeed: 80,
            strings: ["Hello!", "¡Hola!", "¡Niltze!"],
        });
        checkMediaSize();
    }, []);

    if (isScreenNarrow) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={profilePicture} className="profile-pic" alt="Jaz's profile" />
                    <div className="welcome-content">
                        <span className="title">
                            <span className="greeting" ref={textRef}></span>
                        </span>
                        <span className="menu">
                            <Link to="/portfolio/experience" className="menu-button blue-background" alt="Experience">
                                <FontAwesomeIcon icon="laptop-code" />
                            </Link>
                            <a href="https://github.com/jazperez" className="menu-button purple-background" alt="Github profile">
                                <FontAwesomeIcon icon={['fab', 'github-square']} />
                            </a>
                            <a href="https://www.linkedin.com/in/jazmin-perez24/" className="menu-button pink-background nav-end" alt="Linkedin profile">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                        </span>
                        <p className="bio">I am Jazmin Perez and I am a Software Engineer. <br></br>I recently graduated from CSU Northridge with a B.S. in Computer Science and a minor in Chicanx Studies. </p>
                        <p className="bio">I am an active member of the Society of Women Engineers, Society of Hispanic Engineers and Girls Who Code.</p>
                        <p className="bio">I thought it would be fun to learn React, so I created this portfolio. Enjoy!</p>
                    </div>
                </header>
            </div>
        );
    }
    else {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={profilePicture} className="profile-pic" alt="Jaz's profile" />
                    <div className="welcome-content">
                        <span className="title">
                            <span className="greeting" ref={textRef}></span>
                        </span>
                        <span className="menu">
                            <Link to="/portfolio/experience" className="button blue-background" alt="Experience">Experience</Link>
                            <a href="https://github.com/jazperez" className="button purple-background" alt="Github profile">Github</a>
                            <a href="https://www.linkedin.com/in/jazmin-perez24/" className="button pink-background" alt="Linkedin profile">Linkedin</a>
                        </span>
                        <p className="bio">I am Jazmin Perez and I am a Software Engineer. <br></br>I recently graduated from CSU Northridge with a B.S. in Computer Science and a minor in Chicanx Studies. </p>
                        <p className="bio">I am an active member of the Society of Women Engineers, Society of Hispanic Engineers and Girls Who Code.</p>
                        <p className="bio">I thought it would be fun to learn React, so I created this portfolio. Enjoy!</p>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;