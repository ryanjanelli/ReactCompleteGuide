import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

// React.Fragment does the same thing as Aux under the hood

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  // constructer and componentDidMount code above the modern way to set focus

  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className={classes.Person}>
      <Aux>
        <AuthContext.Consumer>
        {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Plese log in</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type='text'
          onChange={this.props.changed}
          value={this.props.name}
          />
      </Aux>
      // </div>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
// PropTypes help people unfamiliar with code to pass the correct types to props
// Will throw errors if improper type is assigned to a certain prop

export default withClass(Person, classes.Person);
