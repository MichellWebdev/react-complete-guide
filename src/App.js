import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
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

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: newName,
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

  // if you want to use a function fx when clicking each paragraph in person you can make a reference from this component by making
  // using a prop called click and then the name of the reference (in this case the switchNameHandler)
  // that prop will of course need to be on the p paragraph in the person component
  // so you can pass a method as props so that you can call a method which might change state in another component
  // that doesn't or shouldn't have direct access to the state

  // when using arrow functions it explicitly returns a 'return' keyword (so whatever the function should return)

  // onClick={() => this.switchNameHandler()} = when this function is called then call the switchNameHandler function
  // if you don't have the () => in front of this.switchNameHandler there shouldn't be () after the switch function because the it would
  // be called automatically when rendered.
  // but when we have an arrow function inside the onClick and that function will only execute when clicked on so that means the nameHandler
  // should be executed immideately as the onClick is called
  // it can be inefficient though - react can sometimes rerender things too much

  render() {
    return (
      <div className='App'>
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}>
          My hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
