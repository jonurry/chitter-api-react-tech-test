import React from 'react';

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
      <div>
        {peeps.map(peep => (
          <div key={peep.id}>{peep.body}</div>
        ))}
      </div>
    );
  }
}
