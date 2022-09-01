import React, { Component } from 'react'
import PersonCard from './componets/PersonCard';

class App extends Component {
  render() {
    return (
        <fieldset>
          <legend>App.jsx</legend>
          <PersonCard personName = {"Doe, Jane"} age = { "Age: 45" } hairColor = { "Hair Color: Black" } />
          <PersonCard personName = {"Smith, John"} age = { "Age: 88" } hairColor = { "Hair Color: Brown" } />
          <PersonCard personName = {"Fillmore, Millard"} age = { "Age: 50" } hairColor = { "Hair Color: Brown" } />
          <PersonCard personName = {"Smith, Maria"} age = { "Age: 62" } hairColor = { "Hair Color: Brown" } />
        </fieldset>
      
    );
  }
}

export default App;