import React, { Component } from 'react'

export class PersonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: this.props.age
    }
  }
  render() {
    const { personName, hairColor } = this.props;
    const { age } = this.state;
    const gettingOld = () => {
      this.setState({
        age: age + 1
      }
      )
    }
    return (
      <fieldset>
        <legend>PERSONCARD</legend>
        <h1> { personName } </h1>
        <h2> Age: { age } </h2>
        <h3> { hairColor } </h3>
        <button onClick = { gettingOld }>Birthday Button for { personName }</button>
      </fieldset>
    );
  }
}

export default PersonCard;