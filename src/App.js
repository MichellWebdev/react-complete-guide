import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {
  // useState = a react hook. It lets us manage state in funcitonal components and it's declared like a function useState();
  // it returns an array with exactly 2 elements ALWAYS 2 elements!
  // first element is always the current state
  // second element is the function that allows to update the current state and then react rerenders the component

  // in the class based component state and useState is not the same. in class based component when using state
  // you merge the old state with the new state and if you had fx persons array and also "otherState" after the array
  // but don't include that "otherState" in the set state - it disappears because useState does NOT merge the old and the new
  // useState replaces the old state with the new state, so you have to manually make sure you add all states to the new state as well
  // BUT! you do not manually merge all states - you instead use multiple different useState() functions
  // whereas you in class based components only have ONE state property and this.state automatically merges

  // const [] = array destructuring - allows to pull elements out of the array you get back from the right side of = sign

  const [personsState, setPersonsState] = useState({
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
  });

  // useState can also pass just strings it doesn't have to be an object
  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersonsState({
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
      otherState: personsState.otherState,
    });
  };

  return (
    <div className='App'>
      <h1>Hi I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        My hobbies: Racing
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};

export default App;

// state to be used in class based components

// state = {
//   persons: [
//     {
//       name: 'Max',
//       age: 28,
//     },
//     {
//       name: 'Manu',
//       age: 29,
//     },
//     {
//       name: 'Stephanie',
//       age: 26,
//     },
//   ],
//   otherState: 'some other value',
// };

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       {
//         name: 'Maximilian',
//         age: 28,
//       },
//       {
//         name: 'Manu',
//         age: 29,
//       },
//       {
//         name: 'Stephanie',
//         age: 27,
//       },
//     ],
//   });
// };
