import { createStore, applyMiddleware,compose } from 'redux';
import {timerReducer} from './reducers';
import thunk from 'redux-thunk';

const store = createStore(timerReducer,
  compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
), applyMiddleware(thunk));

export default store;