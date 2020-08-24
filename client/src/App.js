import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/register" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;