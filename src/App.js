import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  description: "Capital green doo presentacion",
  connonical: "https://capitalgreen.rs",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "capital,green,fertilizer,agriculture,organic",
    },
  },
};
function App() {
  return (
    <DocumentMeta {...meta}>
      <div className="app">
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    </DocumentMeta>
  );
}

export default App;
