import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navi from './components/Navi';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navi />
      <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
      <Footer />


    </div>
  );
}

export default App;
