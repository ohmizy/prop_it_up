import React, { Component } from 'react'

export class PersonCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { personName, age, hairColor } = this.props;
    return (
      <fieldset>
        <legend>PERSONCARD</legend>
        <h1> { personName } </h1>
        <h2> { age } </h2>
        <h3> { hairColor } </h3>
      </fieldset>
    );
  }
}

export default PersonCard;