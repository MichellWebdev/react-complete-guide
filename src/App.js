import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // state is only available in components made with class Component
  // useState is something new where you can do it in functional components
  // also useState and state is not the same thing!
  // state can have any property you want - it doesn't have to be an array

  // if state changes then react dom will re render
  // so if we changed max's age to 29 then only that person would rerender

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
    otherState: 'some other value',
  };

  // usually use Handler at the end to say that this is a method you're not actively calling
  // but you're assigning as an event handler (not required but good practice)
  // when calling it on button DO NOT add () after the function name like you normally would!
  // this would make it execute immideately as we render the component but that's not supposed to happen
  // it's just a reference - it becomes a references because you say this.switchNameHandler
  switchNameHandler = () => {
    // console.log('was clicked!');
    // THIS IS WRONG!!
    // this.state.persons.persons[0].name = 'Maximilian';

    // use setState method - takes an object as an object - will merge whatever we have here to our existing state
    // this overwrites the persons array that already exists
    this.setState({
      persons: [
        {
          name: 'Maximilian',
          age: 28,
        },
        {
          name: 'Manu',
          age: 29,
        },
        {
          name: 'Stephanie',
          age: 27,
        },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
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
