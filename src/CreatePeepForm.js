import React from 'react';

export default class CreatePeepForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { peep } = event.target.elements;
    const newPeep = await this.props.createPeep(peep.value);
    this.props.onNewPeep(newPeep);
    peep.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Peep:
          <input name="peep" type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
