import React from 'react';

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
    return (
      <div className="peep">
        <div className="peep-text">{this.peep.body}</div>
        <div className="peep-name-date">
          <span className="peeper">{this.peep.user.handle}</span> on{' '}
          <span className="peep-date">
            {formatDate(new Date(this.peep.created_at))}
          </span>
        </div>
        <button>Likes: {this.peep.likes.length}</button>
        {this.peep.user.id === 547 ? (
          <button onClick={this.onDelete}>Delete</button>
        ) : (
          ''
        )}
      </div>
    );
  }
}
const formatDate = date => {
  return `${date.getDate()}-${String(date.getMonth() + 1).padStart(
    2,
    '0'
  )}-${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(
    date.getMinutes()
  ).padStart(2, '0')}`;
};
