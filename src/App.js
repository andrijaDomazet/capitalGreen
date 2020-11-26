import React from "react";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import "./App.scss";
import Delatnosti from "./containers/delatnosti/Delatnosti";
import Products from "./containers/Products/Products";
import Team from "./containers/Team/Team";
import Kontakt from "./containers/kontakt/Kontakt.js";
import O_nama from "./containers/AboutUs/AboutUs.js";
import Home from "./containers/Home/Home";
// import NoMatch from "./components/NoMatch/NoMatch";
import Bars from "./components/Bars/Bars";
import Footer from "./components/Footer/Footer";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "Capital green doo",
  description:
    "Kompanija Capital green doo posluje u oblasti poljoprivrede i ekskluzivni je uvoznik đubriva Organic mineral.",
  canonical: "https://capitalgreen.rs",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "capital green,djubrivo,poljoprivreda,zastita, paprika, pradajz, zelena salata",
    },
  },
};
function App() {
  return (
    <DocumentMeta {...meta}>
      <div className="app">
        <HashRouter>
          <Bars />
          <Switch>
            <Route
              exact
              path="https://andrijadomazet.github.io/capitalGreen/"
            />
            <Route path="/" exact component={Home} />
            <Route path="/o-nama" component={O_nama} />
            <Route path="/delatnosti" component={Delatnosti} />
            <Route path="/proizvodi" component={Products} />
            <Route path="/nas-tim" component={Team} />
            <Route path="/kontakt" component={Kontakt} />
            <Route component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/o-nama" component={Footer} />
            <Route exact path="/delatnosti" component={Footer} />
            <Route exact path="/proizvodi" component={Footer} />
            <Route exact path="/nas-tim" component={Footer} />
            <Route component={null} />
          </Switch>
        </HashRouter>
      </div>
    </DocumentMeta>
  );
}

export default App;
