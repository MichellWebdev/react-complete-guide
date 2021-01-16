import React from 'react';

// TWO WAY BINDING
// input field = the input field will change the name to whatever is typed but by having value={props.name}
// we have our own two way binding - the name is changed but we can see the original value inside the input field before we start typing

const Person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
