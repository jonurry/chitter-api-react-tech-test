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
    this.handleLikePeep = this.handleLikePeep.bind(this);
    this.handleNewPeep = this.handleNewPeep.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    let user = await this.api.getSession(HANDLE, PASSWORD);
    let peeps = await this.api.getPeeps();
    if (this._isMounted) {
      this.setState({ peeps: peeps, currentUser: user });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handleDeletePeep(peepId) {
    try {
      await this.api.deletePeep(peepId);
      let newState = this.state.peeps;
      newState = newState.filter(peep => {
        return peep.id !== peepId;
      });
      this.setState({ peeps: newState });
    } catch (error) {
      alert('Cannot delete peep');
    }
  }

  async handleLikePeep(peepId) {
    try {
      let response = await this.api.likePeep(peepId);
      if (typeof response.user !== 'undefined') {
        let newState = this.state.peeps;
        let peepIndex = newState.findIndex(peep => {
          return peep.id === peepId;
        });
        if (
          newState[peepIndex].likes.some(like => {
            return like.user.id !== response.user.id;
          })
        ) {
          newState[peepIndex].likes.push(response);
        }
        this.setState({ peeps: newState });
      }
    } catch (error) {
      alert('Cannot like peep');
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
        <CreatePeepForm
          createPeep={this.api.createPeep}
          onNewPeep={this.handleNewPeep}
        />
        <Peeps
          peeps={this.state.peeps}
          onDeletePeep={this.handleDeletePeep}
          onLikePeep={this.handleLikePeep}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
