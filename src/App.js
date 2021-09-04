import './App.scss';
import profilePicture from './JazPortfolioPic.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePicture} className="profile-pic" alt="Jaz's profile" />
        <div className="welcome-content">
          <span className="title">Hello!</span>
          <span className="menu">
            <a href="experience" className="button blue-background disabled" alt="Experience">Experience</a>
            <a href="https://github.com/jazperez" className="button purple-background" alt="Github profile">Github</a>
            <a href="https://www.linkedin.com/in/jazmin-perez24/" className="button pink-background" alt="Linkedin profile">Linkedin</a>
          </span>
          <p className="bio">I am Jazmin Perez and I am a Software Engineer. I recently graduated from CSU Northridge with a B.S. in Computer Science and a minor in Chicanx Studies. </p>
          <p className="bio">I am an active member of the Society of Women Engineers, Society of Hispanic Engineers and Girls Who Code.</p>
          <p className="bio">I thought it would be fun to learn React, so I created this portfolio. Enjoy!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
