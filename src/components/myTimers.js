import React from 'react';
import {connect} from 'react-redux';
import { startTime, toggleStatus } from '../actions';

import Timer from './timer';
export class MyTimers extends React.Component{

  async startTime(name) {    
    await this.props.dispatch(toggleStatus()); 
    this.runTime(name);   
  }

  runTime(name){
    if(this.props.status === true){      
      setTimeout(() => {          
        this.props.dispatch(startTime(name));
        this.runTime();
      }, 1000);
    }
  }

  stopTime(){
    this.props.dispatch(toggleStatus());
  }

  render(){
    let usersTimers = this.props.timers.map((timer,i) => <li className='li-timer' key={i}>
      <Timer
        name={timer.name}
        ticks={timer.ticks} 
        startTime={() => this.startTime(timer.name)}
        stopTime={() => this.stopTime()}
        status={this.props.status}
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
  timers: state.timerReducer.timers,
  status: state.timerReducer.status
})

export default connect(mapStateToProps)(MyTimers);