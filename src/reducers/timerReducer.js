import { ADD_STOPWATCH, START_TIME, TOGGLE_STATUS } from '../actions';

const initialState  = {

  username: 'user1',
  userId: '',
  timers: [
    {name: 'name11', ticks: 3599},
    {name: 'name12', ticks: 359999},
    {name: 'name13', ticks: 59},
  ],
  status: false,
}

// const initialState  = {

//   username: 'user1',
//   userId: '',
//   name11: 3599,
//   name12: 359999,
//   name13: 59, 
//   status: false,
// }

// const ticker = (state, name) => {
//   state.timers.forEach((timer) => {
//     // if(timer.name === name){
//     //   return {
//     //     timer.ticks = timer.ticks + 1
//     //   }
//     // }
//     console.log(name);
    
//   })
// }


export default function timerReducer(state=initialState, action){
  if (action.type === START_TIME){
    console.log('timer ticked');
    return {
      ...state,
      //increment the ticks for specific user clicked
    }
  }
  if(action.type === ADD_STOPWATCH){
    console.log('added stopwatch');    
    return null;
  } 
  if (action.type === TOGGLE_STATUS){
    console.log('status toggled : ', !state.status);
    return {
      ...state,
      status: !state.status
    }
  }

  return state;
};