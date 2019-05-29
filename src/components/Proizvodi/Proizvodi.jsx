import React from "react";
import { Button, Table } from "reactstrap";
import Jumbo from "../../Jumbo/Jumbo";
import "./Proizvodi.css";

export default class Proizvodi extends React.Component {
  render() {
    return (
      <div>
        <Jumbo />
        <Table striped className="col-10 align-self-center tabelniPodaci">
          <thead>
            <tr>
              <th>R. br.</th>
              <th className="nazivProizvoda">Naziv proizvoda</th>
              <th>Pakovanje</th>
              <th>MP cena (din)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1.</th>
              <td className="nazivProizvoda">
                ORGANIC MINERAL Ca +NK+Mg+B+ AMINOKISELINE
              </td>
              <td>1/1</td>
              <td>654,55</td>
              <th>
                <Button className="btn btn-secondary btn-sm" color="info">
                  info
                </Button>
              </th>
            </tr>
            <tr>
              <th scope="row">2.</th>
              <td className="nazivProizvoda">
                ORGANIC MINERAL Ca +NK+Mg+B+ AMINOKISELINE
              </td>
              <td>6/1</td>
              <td>3.790,92</td>
              <th>
                <Button className="btn btn-secondary btn-sm" color="info">
                  info
                </Button>
              </th>
            </tr>
            <tr>
              <th scope="row">3.</th>
              <td className="nazivProizvoda">IDRON 20 20 20 +me</td>
              <td>10/1</td>
              <td>2.000,00</td>
              <th>
                <Button className="btn btn-secondary btn-sm" color="info">
                  info
                </Button>
              </th>
            </tr>
            <tr>
              <th scope="row">4.</th>
              <td className="nazivProizvoda">IDRON 10 5 40 +me</td>
              <td>10/1</td>
              <td>200,00</td>
              <th>
                <Button className="btn btn-secondary btn-sm" color="info">
                  info
                </Button>
              </th>
            </tr>
            <tr>
              <th scope="row">5.</th>
              <td className="nazivProizvoda">IDRON 5 45 15 +me</td>
              <td>10/1</td>
              <td>209,09</td>
              <th>
                <Button className="btn btn-secondary btn-sm" color="info">
                  info
                </Button>
              </th>
            </tr>
            <tr>
              <th scope="row">6.</th>
              <td className="nazivProizvoda">IDRON 5 45 15 +me</td>
              <td>10/1</td>
              <td>200,00</td>
              <th>
                <Button className="btn btn-secondary btn-sm" color="info">
                  info
                </Button>
              </th>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
