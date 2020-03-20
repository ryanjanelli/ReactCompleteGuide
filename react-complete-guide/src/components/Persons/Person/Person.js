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

  static contextType = AuthContext;
  // the above can only be set up on class based components. CANNOT be used in functional components
  // recommended method for handling context as it allows access in many locations
  // examples where it can be used: componentDidMount, inside render(){return JSX code}

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)

  }

  // constructer and componentDidMount code above the modern way to set focus

  render() {
    console.log('[Person.js] rendering...');
    return (
      // <div className={classes.Person}>
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Plese log in</p>}
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
