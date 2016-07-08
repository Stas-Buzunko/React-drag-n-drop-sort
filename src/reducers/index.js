import { combineReducers } from 'redux';
import images from './image_reducer';

const rootReducer = combineReducers({
  images
});

export default rootReducer;
