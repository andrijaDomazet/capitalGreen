import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bars from "./components/Bars/Bars";
import Home from "./containers/Home/Home";
import BioloskaZastita from "./containers/BioloskaZastita/BioloskaZastita";
import Kontakt from "./containers/Kontakt/Kontakt";
import Team from "./containers/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Bars />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bioloska-zastita" exact component={BioloskaZastita} />
          <Route path="/nas-tim" component={Team} />
          <Route path="/kontakt" component={Kontakt} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
