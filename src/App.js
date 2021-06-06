import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Portofolio from './components/Portofolio/Portofolio';

function App() {
  return(
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Switch>

          <Route
            exact
            path='/'
            component={Home}
          />

          <Route
            exact
            path='/about'
            component={About}
          />

          <Route
            exact
            path='/portofolio'
            component={Portofolio}
          />

          <Route
            exact
            path='/contact'
            component={Contact}
          />

        </Switch>
      </div>
    </HashRouter>
  );
}
export default App;
