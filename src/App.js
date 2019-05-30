import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navibar from "./Navibar/Navibar.js";
import Jumbo from "./Jumbo/Jumbo.js";
import Delatnosti from "./components/delatnosti/Delatnosti";
import Proizvodi from "./components/Proizvodi/Proizvodi";
import Zaposlenje from "./components/zaposlenje/Zaposlenje";
import Kontakt from "./components/kontakt/Kontakt";
import O_nama from "./components/o-nama/O_nama";
import Home from "./components/home/Home";
import TopBar from "./components/TopBar/TopBar";
// import Kartice from "./Kartice/Kartice.js";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Navibar />
        {/* <Home /> */}
        {/* <Jumbo /> */}
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/o-nama" component={O_nama} />
        <Route path="/delatnosti" component={Delatnosti} />
        <Route path="/proizvodi" component={Proizvodi} />
        <Route path="/zaposlenje" component={Zaposlenje} />
        <Route path="/kontakt" component={Kontakt} />
      </Switch>
    </Router>
  );
}

export default App;
