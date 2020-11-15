import React from "react";
import "./Team.scss";
import FaceM from "../../img/men.png";
import FaceW from "../../img/woman.png";
import Banner from "../../components/Banner/Banner";

export default function Team() {
  return (
    <div className="team">
      <Banner index="1" />
      <div className="team__members">
        <div>
          <div className="member__pic">
            <img src={FaceM} alt="profile" />
          </div>
          <div className="member__data">
            <h2>Predrag Štrbac</h2>
            <h3>Direktor</h3>
            <div>
              <span>Tel: +381 64 5 222 333</span>
              <span>Mail: strbac@capitalgreen.rs</span>
            </div>
            <p>
              U Capital Green-u je od samog početka, radi na razvoju i
              unapređenju kompanije. Dobra komunikacija sa klijentom i veliko
              radno iskustvo omogućavaju mu rešavanje svakog zahteva na najbolji
              i najefikasniji način.
            </p>
          </div>
        </div>
        <div>
          <div className="member__pic">
            <img src={FaceM} alt="profile" />
          </div>
          <div className="member__data">
            <h2>Andrija Domazet</h2>
            <h3>Zamenik direktora</h3>
            <div>
              <span>Tel: +381 64 229 68 68</span>
              <span>Mail: domazet@capitalgreen.rs</span>
            </div>
            <p>
              Ima aktivnu ulogu u strateškom poslovanju kompanije, sa fokusom na
              razvoj i optimizaciju. Za cilj ima i analizu poslovanja klijenata,
              a sve kako bi se u budućnosti njihova poljoprivredna proizvodnja u
              što većoj meri unapredila.
            </p>
          </div>
        </div>
        <div>
          <div className="member__pic">
            <img src={FaceW} alt="profile" />
          </div>
          <div className="member__data">
            <h2>Marija Perić Živanovic</h2>
            <h3>Administracija i finansije</h3>
            <div>
              <span>Mail: peric@capitalgreen.rs</span>
            </div>
            <p>
              Indirektno učestvuje u razvoju kompanije, podržvajući svoje kolege
              i stvarajući povoljne uslove za rad. Ima za cilj da pruži pomoć i
              pordršku klijentima, a sve kako bi komunikacija bila na što boljem
              nivou.
            </p>
          </div>
        </div>
        <div>
          <div className="member__pic">
            <img src={FaceM} alt="profile" />
          </div>
          <div className="member__data">
            <h2>Laslo Gabor</h2>
            <h3>Komercijalista</h3>
            <div>
              <span>Mail: gabor@capitalgreen.rs</span>
            </div>
            <p>
              Vrhunski komercijalista, sa izraženom sposobnošću da prepozna
              različite zahteve koji se javljaju u toku poljoprivredne
              proizvodnje. Uz njegovu asistenciju klijenti kompanije su uvek
              zadovoljni.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}