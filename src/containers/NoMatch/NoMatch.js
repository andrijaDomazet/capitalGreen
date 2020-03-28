import React from "react";
import "./NoMatch.scss";

export default function NoMatch({ location }) {
  return (
    <div className="noMatch">
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  );
}
