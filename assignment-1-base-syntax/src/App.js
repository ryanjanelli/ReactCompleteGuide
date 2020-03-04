import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/userInput';
import UserOutput from './UserOutput/userOutput';

class App extends Component {
  state = {
    username: 'RyeBread'
  };

  usernameChangedHandler = (input) => {
    this.setState({
      username: input.target.value
    })
  }

  

  render() {
    return (
      <div className='App'>
        <UserInput username={this.state.username} inputChanged={this.usernameChangedHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
