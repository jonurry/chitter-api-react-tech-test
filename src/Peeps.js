import React from 'react';
import Peep from './Peep.js';
import './css/Peeps.css';

export default class Peeps extends React.Component {
  render() {
    const { peeps, onDeletePeep, currentUser } = this.props;
    return (
      <div className="peeps">
        {peeps.map(peep => (
          <Peep
            key={peep.id}
            peep={peep}
            onDeletePeep={onDeletePeep}
            currentUser={currentUser}
          />
        ))}
      </div>
    );
  }
}
