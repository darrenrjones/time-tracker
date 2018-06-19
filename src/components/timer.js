import React from 'react';
import { connect } from 'react-redux';

export class Timer extends React.Component{

  getSeconds = () => {
    return ('0' + this.props.ticks % 60).slice(-2);
  }

  getMinutes = () => {
    let min = Math.floor(this.props.ticks / 60) % 60
    if(min.toString().length < 2){
      return '0' + min;
    } else {
      return min;
    }    
  }

  getHours = () => {
    return Math.floor(this.props.ticks /60 /60).toLocaleString('en')    
  }  
  
  render(){
    return(
      <div className='timer-display'>
        <div className='timer-name'>
          {this.props.name}
        </div>
        <div className='timer-clock'>
          {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
        </div>
        <div className="buttoncontainer">
          <button disabled={this.props.status} id="startBtn" className="buttons" onClick={() => this.props.startTime()}>start</button>
          <button disabled={!this.props.status} id="stop" className="buttons" onClick={() => this.props.stopTime()}>stop</button>
          <button id="reset" className="buttons">reset</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  timers: state.timerReducer.timers,
});

export default connect(mapStateToProps)(Timer);

