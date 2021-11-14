import { Component } from "react";
import github from './img/github.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark d-flex justify-content-between">
        <div className="container-md d-flex justify-content-center my-3">
          <a 
            href="https://github.com/BrunnoFaria" 
            target="_blank" 
            className="d-flex align-items-center text-light">
            <img src={github} style={{width: '26px'}} className="me-2"/>
            Github
          </a>
        </div>
      </footer>
    );
  }
}