import React, { Component } from 'react';
import './css/App.css';
import Peeps from './Peeps.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.api = props.api;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chitter Tech Test</h1>
        </header>
        <Peeps api={this.api} />
      </div>
    );
  }
}

export default App;
