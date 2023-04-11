import './App.scss';
import About from "./components/about/About.js";
import Navbar from './components/navbar/Navbar';
import Experience from "./components/experience/Experience.js";
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
}

export default App;