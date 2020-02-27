import React, {Component} from 'react';
import './App.css';
import UserInput from './User/userInput';
import UserOutput from './User/userOutput';

class App extends Component {
  state = {
    username: 'RyeBread'
  };

  usernameHandler = (input) => {
    this.setState({
      username: input.target.value
    })
  }

  

  render() {
    return (
      <div className='App'>
        <UserInput username={this.state.username} inputChanged={this.usernameHandler}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
