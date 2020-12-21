import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DocumentMeta from "react-document-meta";
import Bars from "./components/Bars/Bars";
import Home from "./containers/Home/Home";
import BioloskaZastita from "./containers/BioloskaZastita/BioloskaZastita";
import Kontakt from "./containers/Kontakt/Kontakt";

const meta = {
  title: "Capital green doo",
  description:
    "Kompanija Capital green doo posluje u oblasti poljoprivrede i ekskluzivni je uvoznik đubriva Organic mineral.",
  canonical: "https://capitalgreen.rs/",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "capital green,capital green srbija,djubrivo,poljoprivreda,bioloska zastita,paprika,pradajz,zelena salata",
    },
  },
};
function App() {
  return (
    <DocumentMeta {...meta}>
      <BrowserRouter>
        <div className="app">
          <Bars />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bioloska-zastita" exact component={BioloskaZastita} />
            <Route path="/kontakt" component={Kontakt} />
          </Switch>
        </div>
      </BrowserRouter>
    </DocumentMeta>
  );
}

export default App;
