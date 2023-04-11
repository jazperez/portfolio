import './about.scss';
import profilePicture from "./JazPortfolioPic.png";
import { init } from "ityped";
import { useState, useEffect, useRef } from "react";

const Home = () => {
    const textRef = useRef();
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
        init(textRef.current, {
            showCursor: true,
            backDelay: 2000,
            backSpeed: 80,
            strings: ["Hello!", "¡Hola!", "¡Niltze!"],
        });
        checkMediaSize();
    }, []);

        return (
            <div className="App">
                <div className="about-container">
                    <img src={profilePicture} className="profile-pic" alt="Jaz's profile" />
                    <div className="welcome-content">
                        <span className="title">
                            <span className="greeting" ref={textRef}></span>
                        </span>
                        <p className="bio">My name is Jazmín Pérez and I am a Software Engineer based in San Francisco.<br></br>I graduated from CSU Northridge with a B.S. in Computer Science and a minor in Chicana/o/x Studies in 2021.</p>
                        <p className="bio">I am an active participant and leader in the Society of Women Engineers, Society of Hispanic Professional Engineers and Girls Who Code.</p>
                        <p className="bio">Some of my interests include <strong>full-stack development</strong>, <strong>robotics</strong>, <strong>JavaScript game development</strong> and <strong>learning new languages</strong>.</p>
                    </div>
                </div>
            </div>
        );
}

export default Home;