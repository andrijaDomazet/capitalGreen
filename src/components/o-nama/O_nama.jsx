import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import MainCarousel from "./Carousel/MainCarousel";

export default function O_nama() {
  return (
    <div>
      <Card>
        <div className="row">
          <div className="col-sm-6">
            <MainCarousel />
          </div>
          <div className="col-sm-6">
            <CardBody style={{ textAlign: "left" }}>
              <CardText>
                AGRO-FertiCrop posluje od 2001. godine. Sedište firme je u
                Subotici. AGRO-FertiCrop na srpskom tržištu sa velikim uspehom
                prezentuje, zastupa i distribuira proizvode vodećih svetskih i
                evropskih kompanija iz oblasti poljoprivrede. To su Yara
                (norveška kompanija koja se bavi proizvodnjom mineralnih
                đubriva), Klasmann-Deilmann (nemačka kompanija koja proizvodi
                supstrate), Memon (holandska kompanija koja proizvodi organska
                đubriva) i K+S Kali (nemački proizvođač magnezijuma i kalijuma).
                Takođe, AGRO-FertiCrop poljoprivrednim proizvođačima nudi
                kvalitetne frigo živiće – sadnice jagoda renomirane kompanije
                Mazzoni – najvećeg italijanskog proizvođača sadnog materijala
                voća i povrća (Bibaum tehnologija jabuka, krušaka i trešanja,
                frigo-živići jagoda), sadnice trešanja, kao i rasad povrća firme
                Grow Rasad. Pored toga što srpsko tržište snabdeva kvalitetnim
                proizvodima navedenih kompanija, AGRO-FertiCrop se trudi da
                stalnim i direktnim kontaktima i posetama poljoprivrednim
                apotekama i poljoprivrednim proizvođačima, brojnim predavanjima
                i prezentacijama, organizovanjem Dana polja, postavljanjem
                velikog broja demonstracionih i proizvodnih ogleda, kao i
                uslugama uzorkovanja zemljišta korišćenjem GPS navigacije i
                davanjem preporuka za đubrenje pomogne srpskim
                poljoprivrednicima u postizanju visokih i stabilnih prinosa
                dobrog kvaliteta.
              </CardText>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  );
}
