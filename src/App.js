import { Component } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return(
      <>
        <NavBar/>
        <Banner/>
        <Main/>
        <Footer/>
      </>
    )
  }
}