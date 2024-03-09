// rootReducer.js
import { combineReducers } from 'redux';
import showsReducer from '../reducer/ShowSlide'

const rootReducer = combineReducers({
  shows: showsReducer,
  // Add other reducers if you have them
});

export default rootReducer;
