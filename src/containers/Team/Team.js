import React from "react";
import "./Team.scss";
import FaceM from "../../img/men.png";
import FaceW from "../../img/woman.png";
import Banner from "../../components/Banner/Banner";

const meta = {
  title: "Bioloska zastita",
  description:
    "Naš tim iskusnih poljoprivrednih stručnjaka posvećeno radi kako bi naši klijenti mogli da dobiju najbolju uslugu na jednom mestu. Tim stručnjaka koji se brine o Vašoj proizvodnji.",
  canonical: "https://capitalgreen.rs/#/nas-tim",
  meta: {
    charset: "utf-8",
    name: {
      keywords:
        "capital green tim, direktor, komercijalista, biznis plan, bioloska zastita, pooljoprivreda",
    },
  },
};

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
            <h3>Predrag Štrbac</h3>
            <h4>Direktor</h4>
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
            <h3>Andrija Domazet</h3>
            <h4>Zamenik direktora</h4>
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
            <h3>Marija Perić Živanovic</h3>
            <h4>Administracija i finansije</h4>
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
            <h3>Laslo Gabor</h3>
            <h4>Komercijalista</h4>
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
