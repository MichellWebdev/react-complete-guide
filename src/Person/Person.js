import React from 'react';

const Person = props => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

// children is a referred name - it's any elements between the opening and closing tags of the component where it's called
// it can be anything - just text, more jsx or anything else
// an empty paragraph will be rendered and can be seen in elements in the console if the component doesn't have any extra value in the props.children
// of course it can be any other html tag - it's not neccessarily a p tag - just the tag you wrap around the props.children

export default Person;
