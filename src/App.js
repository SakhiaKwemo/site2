import React, {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from "axios"; 
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logo: [], 
    };
  }

  setLogo = (item) => {
    this.setState({
      logo: item
    })
  }

  render(){

    console.log(this.state.logo.image);

    const icon = (
        <img src = "8.png"/>
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Congrats Sakhia, the site is up and running!!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {icon}
        </header>
      </div>
    );
  }
}

export default App;
