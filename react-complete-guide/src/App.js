import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ryan', age: 28 },
      { name: 'Mike', age: 29 },
      { name: 'Sean', age: 30 }
    ],
    derp: 'derp',
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was clicked');
    // DO NOT CHANGE STATE LIKE THIS --- this.state.persons[0].name = 'Ryebreadington' ---
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Michael', age: 29 },
        { name: 'Seannifer', age: 30 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Ryan', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Sean', age: 30 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              clickRef={this.switchNameHandler.bind(this, 'Michaelalala')}
              changed={this.nameChangedHandler}
            >
              My Hobbies: Rock Climbing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* the below onClick is less efficient than the .bind(this, arg) technique */}
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}  
      </div>
    );
    // the below code is equivalent to the above code. Clearly less efficient.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Is this working now?`))
  }
}

export default App;
