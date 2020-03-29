import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Delatnosti from "./containers/delatnosti/Delatnosti";
import Proizvodi from "./containers/Proizvodi/Proizvodi";
import Zaposlenje from "./containers/zaposlenje/Zaposlenje";
import Kontakt from "./containers/kontakt/Kontakt.js";
import O_nama from "./containers/AboutUs/AboutUs.js";
import Home from "./containers/Home/Home";
// import NoMatch from "./components/NoMatch/NoMatch";
import Bars from "./components/Bars/Bars";

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
          <Route path="/zaposlenje" component={Zaposlenje} />
          <Route path="/kontakt" component={Kontakt} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
