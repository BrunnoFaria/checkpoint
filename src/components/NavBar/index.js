import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

export default class NavBar extends Component {
  render() {
    return(
      <header className="bg-dark">
        <nav className="container-lg d-flex align-items-center justify-content-between py-3">
          <a href="#" className="fs-2 text-light font-logo text-decoration-none">Brunno Faria</a>
          <ul className="d-flex align-items my-auto">
            <li className="mx-3 text-light">
              <a href="" className="text-light">Home</a>
            </li>
            <li className="mx-3 text-light">
              <a href="" className="text-light">Contatos</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}