import React from 'react';

const userInput = props => {
    const inputStyle = {
        textAlign: 'center',
        margin: 50,
      }
  return (
    <input
      style={inputStyle}
      type='text'
      onChange={props.inputChanged}
      value={props.username}
    />
  );
};

export default userInput;
