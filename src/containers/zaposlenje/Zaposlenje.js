import React from "react";
import "./Zaposlenje.scss";
import FaceM from "../../img/men.png";
import FaceW from "../../img/woman.png";

export default function Zaposlenje() {
  return (
    <div className="jobs">
      <div>
        <h1>Naš tim</h1>
        <p>
          Naš tim posvećeno radi kako bi naši klijenti mogli da dobiju najbolju
          uslugu na jednom mestu. Mi smo tu zbog vas.
        </p>
      </div>
      <div className="team__members">
        <div>
          <div className="team__pic">
            <img src={FaceM} alt="profile" />
          </div>

          <div>
            <h2>Predrag Strbac</h2>
            <h3>Direktor</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              doloremque quia tenetur, alias esse autem similique vero quos
              ducimus laudantium!
            </p>
          </div>
        </div>
        <div>
          <div className="team__pic">
            <img src={FaceM} alt="profile" />
          </div>

          <div>
            <h2>Petar Gogić</h2>
            <h3>Savetnik direktora</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              doloremque quia tenetur, alias esse autem similique vero quos
              ducimus laudantium!
            </p>
          </div>
        </div>
        <div>
          <div className="team__pic">
            <img src={FaceW} alt="profile" />
          </div>

          <div>
            <h2>Marija Perić</h2>
            <h3>Sekretarica</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              doloremque quia tenetur, alias esse autem similique vero quos
              ducimus laudantium!
            </p>
          </div>
        </div>
        <div>
          <div className="team__pic">
            <img src={FaceM} alt="profile" />
          </div>

          <div>
            <h2>Stojan Anđelić</h2>
            <h3>Komercijalista</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              doloremque quia tenetur, alias esse autem similique vero quos
              ducimus laudantium!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
