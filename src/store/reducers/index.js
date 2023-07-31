import { combineReducers } from 'redux';
import { flexboxPhotosReducer } from './flexbox-photos';

const rootReducer = combineReducers({
  flexboxPhotos: flexboxPhotosReducer,
});

export default rootReducer;
