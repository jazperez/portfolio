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
                        <p className="bio">My name is Jazmín Pérez and I am a Software Engineer based in San Francisco.<br></br>I graduated from CSU Northridge with a B.S. in Computer Science and a minor in Chicana/o/x Studies in 2021.</p>
                        <p className="bio">I am an active participant and leader in the Society of Women Engineers, Society of Hispanic Engineers and Girls Who Code.</p>
                        <p className="bio">Some of my interests include <strong>full-stack development</strong>, <strong>robotics</strong>, <strong>JavaScript game development</strong> and <strong>learning new languages</strong>.</p>
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
                        <p className="bio">My name is Jazmín Pérez and I am a Software Engineer based in San Francisco.<br></br>I graduated from CSU Northridge with a B.S. in Computer Science and a minor in Chicana/o/x Studies in 2021.</p>
                        <p className="bio">I am an active participant and leader in the Society of Women Engineers, Society of Hispanic Engineers and Girls Who Code.</p>
                        <p className="bio">Some of my interests include <strong>full-stack development</strong>, <strong>robotics</strong>, <strong>JavaScript game development</strong> and <strong>learning new languages</strong>.</p>
                    </div>
                </header>
            </div>
        );
    }
}

export default Home;