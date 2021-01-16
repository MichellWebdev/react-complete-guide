import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // state is only available in components made with class Component
  // useState is something new where you can do it in functional components
  // also useState and state is not the same thing!
  // state can have any property you want - it doesn't have to be an array

  // if state changes then react dom will re render - but only the one where something happens
  // so if we changed max's age to 29 then only that person would rerender (not the whole component)

  state = {
    persons: [
      {
        name: 'Max',
        age: 28,
      },
      {
        name: 'Manu',
        age: 29,
      },
      {
        name: 'Stephanie',
        age: 26,
      },
    ],
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

// this. refers to the class (class App...)

export default App;
