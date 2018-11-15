import React from 'react';
import Peep from './Peep.js';
import './css/Peeps.css';

export default class Peeps extends React.Component {
  constructor(props) {
    super(props);
    this.api = props.api;
  }
  render() {
    const { peeps } = this.props;
    return (
      <div className="peeps">
        {peeps.map(peep => (
          <Peep
            key={peep.id}
            peep={peep}
            onDeletePeep={this.props.onDeletePeep}
          />
        ))}
      </div>
    );
  }
}
