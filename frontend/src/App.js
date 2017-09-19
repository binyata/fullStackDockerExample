import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textExample: 'Loading Data...'
    };
  }

  componentDidMount() {
    var url = 'http://localhost:8080/api/test';
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(responseState => {
        this.setState({
          textExample: responseState.data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Api Result: { this.state.textExample } 
        </p>
      </div>
    );
  }
}

export default App;
