import { ADD_PICTURE, UPDATE_IMAGES, DELETE_IMAGE } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_PICTURE:
      return [ ...state, action.payload];
    case UPDATE_IMAGES:
      if (action.payload.dragIndex < action.payload.hoverIndex) {
        return [
          ...state.slice(0,action.payload.dragIndex),
          ...state.slice(action.payload.dragIndex+1 , action.payload.hoverIndex+1),
          action.payload.dragImage,
          ...state.slice(action.payload.hoverIndex+1)
        ];
      } else {
        return [
          ...state.slice(0,action.payload.hoverIndex),
          action.payload.dragImage,
          ...state.slice(action.payload.hoverIndex,action.payload.dragIndex),
          ...state.slice(action.payload.dragIndex+1 )
        ];
      }
    case DELETE_IMAGE:
      let index = state.indexOf(action.payload);
      return [
        ...state.slice(0,index),
        ...state.slice(index+1)
      ];
    default:
      return state;
  }
}