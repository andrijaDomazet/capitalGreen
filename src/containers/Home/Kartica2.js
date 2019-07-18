import React from "react";
import "./Home.scss";

// const podaciKartica2 = [
//   { telefon: +381645222333 },
//   { tekst: "Uvek smo spremni da poboljšamo i unapredimo Vašu proizvodnju." }
// ];

export default function Kartica2(props) {
  return (
    <div className="kartica2">
      <div>
        <div
          className="kartica2-phone"
          // onClick={this.props.history.push("/path")}
        >
          <span className="btn-phone">
            <i className="fas fa-phone-square" />
          </span>
          + 381 64 5 222 333
        </div>
        <div className="kartica2-tekst">
          Uvek smo spremni da poboljšamo i unapredimo Vašu proizvodnju.
          <span> Pozovite nas sada!</span>
        </div>
      </div>
    </div>
  );
}
