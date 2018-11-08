import React from 'react';
import Peep from './Peep.js';
import './Peeps.css';

export default class Peeps extends React.Component {
  constructor(props) {
    super(props);
    this.api = props.api;
    this.state = { peeps: [] };
  }
  async componentDidMount() {
    this._isMounted = true;
    const peeps = await this.api.get(
      'https://chitter-backend-api.herokuapp.com/peeps'
    );
    if (this._isMounted) {
      this.setState({ peeps: peeps });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { peeps } = this.state;
    return (
      <div className="peeps">
        {peeps.map(peep => (
          <Peep key={peep.id} peep={peep} />
        ))}
      </div>
    );
  }
}
