import { API_BASE_URL } from '../config'

export const ADD_STOPWATCH = 'ADD_STOPWATCH';
export const addStopwatch = () => ({
    type: ADD_STOPWATCH,   
});

export const START_TIME = 'START_TIME';
export const startTime = (name) => ({
    type: START_TIME,
    name   
});

export const TOGGLE_STATUS = 'TOGGLE_STATUS';
export const toggleStatus = () => ({
    type: TOGGLE_STATUS,   
});

export const fetchTimers = () => (dispatch) => {
  return fetch(`${API_BASE_URL}/api/timers`)
    .then(res => res.json())
}