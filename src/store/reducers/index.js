import { combineReducers } from 'redux';
import { photosReducer } from './photos';

const rootReducer = combineReducers({
  photosList: photosReducer,
});

export default rootReducer;
