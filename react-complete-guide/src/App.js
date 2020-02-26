import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Ryan" age="28"/>
        <Person name="Mike" age="29"> My Hobbies: Rock Climbing</Person>
        <Person name="Sean" age="30"/>
      </div>
    );
    // the below code is equivalent to the above code. Clearly less efficient. 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Is this working now?`))
  }
}

export default App;
