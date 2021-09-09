import './App.scss';
import Home from "./components/home/Home.js";
import Experience from "./components/experience/Experience.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/experience" component={Experience} />
      </Switch>
    </main>
  );
}

export default App;