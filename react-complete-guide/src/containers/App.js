import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'qwe1', name: 'Ryan', age: 28 },
      { id: 'asd1', name: 'Mike', age: 29 },
      { id: 'zxc1', name: 'Sean', age: 30 }
    ],
    derp: 'derp',
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // less modern approach that is the same as above
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    // using slice creates a copy of the array so the original is not damaged
    // const persons = this.state.persons.slice();
    // using the spread operator is the ES6 approach
    // ALWAYS UPDATE STATE IN AN IMMUTABLE FASHION
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({ showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
        title={this.props.appTitle}
        personsLength={this.state.persons.length}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}
        /> : null }
        {persons}
      </WithClass>
    );
    // the below code is equivalent to the above code. Clearly less efficient.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Is this working now?`))
  }
}

export default App;
