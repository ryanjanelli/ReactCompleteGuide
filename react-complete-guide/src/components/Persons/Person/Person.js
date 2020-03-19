import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

// React.Fragment does the same thing as Aux under the hood

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className={classes.Person}>
      <Aux>
        <p onClick={this.props.onClick}>
          I'm {this.props.name} and I am {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.onChange}
          value={this.props.name}
          />
          </Aux>
      // </div>
    );
  }
}

export default withClass(Person, classes.Person);
