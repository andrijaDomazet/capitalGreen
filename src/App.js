import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Delatnosti from "./containers/delatnosti/Delatnosti";
import Proizvodi from "./containers/Proizvodi/Proizvodi";
import Team from "./containers/Team/Team";
import Kontakt from "./containers/kontakt/Kontakt.js";
import O_nama from "./containers/AboutUs/AboutUs.js";
import Home from "./containers/Home/Home";
// import NoMatch from "./components/NoMatch/NoMatch";
import Bars from "./components/Bars/Bars";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Bars />
        <Switch>
          <Route exact path="https://andrijadomazet.github.io/capitalGreen/" />
          <Route path="/" exact component={Home} />
          <Route path="/o-nama" component={O_nama} />
          <Route path="/delatnosti" component={Delatnosti} />
          <Route path="/proizvodi" component={Proizvodi} />
          <Route path="/nas-tim" component={Team} />
          <Route path="/kontakt" component={Kontakt} />
          <Route component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/" component={null} />
          <Route exact path="/capitalGreen" component={null} />
          <Route exact path="/kontakt" component={null} />
          <Route
            exact
            path="https://andrijadomazet.github.io/capitalGreen/"
            component={null}
          />
          <Route component={Footer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
