import React from 'react';
import DateFormatter from './dateFormatter.js';

export default class Peep extends React.Component {
  constructor(props) {
    super(props);
    this.peep = props.peep;
    this.onDelete = this.onDelete.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onDelete() {
    this.props.onDeletePeep(this.peep.id);
  }

  onLike() {
    this.props.onLikePeep(this.peep.id);
  }

  render() {
    const dateFormatter = new DateFormatter();
    const { created_at } = this.props.peep;
    const peepDate = dateFormatter.formatDate(new Date(created_at));
    return (
      <div className="peep">
        <div className="peep-text" data-testid="peep-text">
          {this.peep.body}
        </div>
        <div className="peep-name-date" data-testid="peep-name-date">
          <span className="peeper">{this.peep.user.handle}</span> on{' '}
          <span className="peep-date">{peepDate}</span>
        </div>
        <button onClick={this.onLike} data-testid="like-button">
          Likes: {this.peep.likes.length}
        </button>
        {this.peep.user.id === this.props.currentUser.user_id ? (
          <button onClick={this.onDelete}>Delete</button>
        ) : (
          ''
        )}
      </div>
    );
  }
}
