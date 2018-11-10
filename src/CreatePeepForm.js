import React from 'react';

export default class CreatePeepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.api = props.api;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const peepText = this.state.value;
    const peep = await this.api.createPeep(peepText);
    this.props.onNewPeep(peep);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Peep:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
