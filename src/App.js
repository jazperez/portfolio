import './App.scss';
import Home from "./components/home/Home.js";
import Experience from "./components/experience/Experience.js";
import { Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faLaptopCode, faExternalLinkAlt);

function App() {

  return (
    <main>
      <Switch>
        <Route path="/portfolio" exact component={Home} />
        <Route path="/portfolio/experience" component={Experience} />
      </Switch>
    </main>
  );
}

export default App;