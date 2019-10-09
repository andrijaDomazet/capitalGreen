import React from "react";
import "./Home.scss";

export default function Kartica2(props) {
  return (
    <div className="kartica2">
      <div className="kartica2-phone">
        <span className="btn-phone">
          <i className="fas fa-phone-square" />+ 381 64 5 222 333{" "}
        </span>
      </div>
      <div className="kartica2-tekst">
        Uvek smo spremni da poboljšamo i unapredimo Vašu proizvodnju.
        <span> Pozovite nas sada!</span>
      </div>
    </div>
  );
}
