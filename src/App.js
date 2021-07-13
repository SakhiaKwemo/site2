import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"; 

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

  
  componentDidMount() {
    axios.get("https://djkwemo2.herokuapp.com/table1").then ((response) => {
      this.setLogo(response.data[0]); 
      console.log(response.data[0]);
    });
  };

  render(){

    console.log(this.state.logo.image);

    const icon = (
        <img alt="Girl in a jacket" src = {this.state.logo.image}/>
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
