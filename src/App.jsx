import React, { Component } from 'react'
import PersonCard from './componets/PersonCard';

class App extends Component {
  render() {
    return (
        <fieldset>
          <legend>App.jsx</legend>
          <PersonCard personName = {"Doe, Jane"} age = { 45 } hairColor = { "Hair Color: Black" } />
          <PersonCard personName = {"Smith, John"} age = { 88 } hairColor = { "Hair Color: Brown" } />
          <PersonCard personName = {"Fillmore, Millard"} age = { 50 } hairColor = { "Hair Color: Brown" } />
          <PersonCard personName = {"Smith, Maria"} age = { 62 } hairColor = { "Hair Color: Brown" } />
        </fieldset>
      
    );
  }
}

export default App;