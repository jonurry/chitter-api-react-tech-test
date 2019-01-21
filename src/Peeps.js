import React from 'react';
import Peep from './Peep.js';
import './css/Peeps.css';

export default class Peeps extends React.Component {
  render() {
    const { peeps, onDeletePeep, onLikePeep, currentUser } = this.props;
    return (
      <div className="peeps">
        {peeps.map(peep =>
          typeof peep !== 'undefined' ? (
            <Peep
              key={peep.id}
              peep={peep}
              onDeletePeep={onDeletePeep}
              onLikePeep={onLikePeep}
              currentUser={currentUser}
            />
          ) : (
            ''
          )
        )}
      </div>
    );
  }
}
