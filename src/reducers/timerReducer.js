import { ADD_STOPWATCH, START_TIME, TOGGLE_STATUS } from '../actions';

const initialState  = {

  username: 'user1',
  userId: '',
  timers: [
    {name: 'name11', ticks: 3599, status: false},
    {name: 'name12', ticks: 359999, status: false},
    {name: 'name13', ticks: 59, status: false},
  ],
  
}



export default function timerReducer(state=initialState, action){

  if (action.type === START_TIME){
    console.log(`timer ${action.name} ticked`);
    const tickTimers = state.timers.map((timer) => {
      if(timer.name === action.name){
        return {name: timer.name, ticks: timer.ticks + 1, status:timer.status}
      } else {
        return timer;
      }
    })
    return {
      ...state,
      timers: tickTimers
    }
  }
  if(action.type === ADD_STOPWATCH){
    console.log('added stopwatch');    
    return null;
  } 
  if (action.type === TOGGLE_STATUS){
    console.log('status toggled');
    const toggleTimerStatus = state.timers.map((timer) => {
      if(timer.name === action.name){
        return {name: timer.name, ticks: timer.ticks, status: !timer.status}
      } else {
        return timer;
      }
    })
    return {
      ...state,
      timers: toggleTimerStatus
    }
  }

  return state;
};