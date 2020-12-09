import React from "react";
import "./App.scss";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "Capital green doo",
  description:
    "Kompanija Capital green doo posluje u oblasti poljoprivrede i ekskluzivni je uvoznik đubriva Organic mineral.",
  canonical: "https://capitalgreen.rs/",
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
        <h1>CAPITAL GREEN doo</h1>
      </div>
    </DocumentMeta>
  );
}

export default App;
