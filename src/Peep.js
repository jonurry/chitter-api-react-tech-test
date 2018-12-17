import React from 'react';
import DateFormatter from './dateFormatter.js';

export default class Peeps extends React.Component {
  constructor(props) {
    super(props);
    this.peep = props.peep;
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete() {
    this.props.onDeletePeep(this.peep);
  }
  render() {
    const dateFormatter = new DateFormatter();
    const { created_at } = this.props.peep;
    const peepDate = dateFormatter.formatDate(new Date(created_at));
    console.log(peepDate);
    return (
      <div className="peep">
        <div className="peep-text" data-testid="peep-text">
          {this.peep.body}
        </div>
        <div className="peep-name-date" data-testid="peep-name-date">
          <span className="peeper">{this.peep.user.handle}</span> on{' '}
          <span className="peep-date">{peepDate}</span>
        </div>
        <button data-testid="like-button">
          Likes: {this.peep.likes.length}
        </button>
        {this.peep.user.id === 547 ? (
          <button onClick={this.onDelete}>Delete</button>
        ) : (
          ''
        )}
      </div>
    );
  }
}
