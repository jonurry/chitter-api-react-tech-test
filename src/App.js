import React, { Component } from 'react';
import './css/App.css';
import Peeps from './Peeps.js';
import CreatePeepForm from './CreatePeepForm.js';

const HANDLE = 'boggle';
const PASSWORD = 'pa$$word1!';

class App extends Component {
  constructor(props) {
    super(props);
    this.api = props.api;
    this.state = { peeps: [] };
    this.handleDeletePeep = this.handleDeletePeep.bind(this);
    this.handleNewPeep = this.handleNewPeep.bind(this);
  }
  async componentDidMount() {
    this._isMounted = true;
    await this.api.getSession(HANDLE, PASSWORD);
    let peeps = await this.api.getPeeps();
    if (this._isMounted) {
      this.setState({ peeps: peeps });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  async handleDeletePeep(peepToDelete) {
    try {
      await this.api.deletePeep(peepToDelete.id);
      let newState = this.state.peeps;
      newState = newState.filter(peep => {
        return peep.id !== peepToDelete.id;
      });
      this.setState({ peeps: newState });
    } catch (error) {
      alert('Cannot delete peep');
    }
  }
  handleNewPeep(peep) {
    let newState = this.state.peeps;
    newState.unshift(peep);
    this.setState({ peeps: newState });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chitter Tech Test</h1>
        </header>
        <CreatePeepForm api={this.api} onNewPeep={this.handleNewPeep} />
        <Peeps
          api={this.api}
          peeps={this.state.peeps}
          onDeletePeep={this.handleDeletePeep}
        />
      </div>
    );
  }
}

export default App;
