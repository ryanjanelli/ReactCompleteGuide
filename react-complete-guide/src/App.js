import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ryan', age: 28 },
      { name: 'Mike', age: 29 },
      { name: 'Sean', age: 30 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Rock Climbing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // the below code is equivalent to the above code. Clearly less efficient. 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Is this working now?`))
  }
}

export default App;
