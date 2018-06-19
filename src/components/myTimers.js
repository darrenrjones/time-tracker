import React from 'react';
import {connect} from 'react-redux';
import { startTime, toggleStatus } from '../actions';

import Timer from './timer';
export class MyTimers extends React.Component{

  async startTime(name) {    
    await this.props.dispatch(toggleStatus(name)); 
    this.runTime(name);   
  }

  runTime(name){
    const timerStatus = this.props.timers.filter((timer) => {
      return timer.name === name
    })               
    if(timerStatus[0].status === true){      
      setTimeout(() => {          
        this.props.dispatch(startTime(name));
        this.runTime(name);
      }, 1000);
    }
  }

  stopTime(name){
    this.props.dispatch(toggleStatus(name));
  }

  render(){
    let usersTimers = this.props.timers.map((timer,i) => <li className='li-timer' key={i}>
      <Timer
        name={timer.name}
        ticks={timer.ticks} 
        startTime={() => this.startTime(timer.name)}
        stopTime={() => this.stopTime(timer.name)}
        status={timer.status}
      />      
    </li>
    )
    return(
      <div className='usersTimers-container'>
        <ul>
          {usersTimers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timers: state.timerReducer.timers
})

export default connect(mapStateToProps)(MyTimers);