import React, { Component } from 'react';
import MyTimers from './myTimers';

// import './styles/reset.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TimeTracker</h1>
        <form action="submit">
          <input type="text" placeholder='title'/>
          <button>Create</button>
        </form>
        <h2>My Timers</h2>
        <MyTimers />
        
      </div>
    );
  }
}

export default App;
