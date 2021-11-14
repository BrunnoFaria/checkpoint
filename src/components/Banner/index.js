import { Component } from "react";
import './style.scss';

import foto from './img/foto.jpg';

export default class Banner extends Component {
  render() {
    return(
      <section className="container-fluid section d-flex justify-content-center align-items-center">
        <div className="container-lg mx-auto flex-end d-flex justify-content-between">
          <div className="text-light fs-5 text-shadow">Profissional comprometido com a promoção do próprio conhecimento. Uma pessoa em constante adaptação aos cenários mais diversos e que encontre alternativas a qualquer bomba que se jogue na minha mão.</div>
          <img id="foto" src={foto} width="400" />
        </div>
      </section>
    )
  }
}