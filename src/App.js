import './App.scss';
import About from "./components/about/About.js";
import Navbar from './components/navbar/Navbar';
import Experience from "./components/experience/Experience.js";
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faLaptopCode, faExternalLinkAlt);

const App = () => {

  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
}

export default App;