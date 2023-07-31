import {
  GET_FLEXBOX_PHOTOS,
  GET_FLEXBOX_PHOTOS_ERROR,
  GET_FLEXBOX_PHOTOS_SUCCESS,
  GET_GRID_PHOTOS, GET_GRID_PHOTOS_ERROR,
  GET_GRID_PHOTOS_SUCCESS,
} from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_FLEXBOX_PHOTOS:
    return { ...state, loading: true };

  case GET_FLEXBOX_PHOTOS_SUCCESS:
    return { ...state, data: action.payload, loading: false };

  case GET_FLEXBOX_PHOTOS_ERROR:
    return { ...state, error: action.payload, loading: false };

  case GET_GRID_PHOTOS:
    return { ...state, loading: true };

  case GET_GRID_PHOTOS_SUCCESS:
    return { ...state, data: action.payload, loading: false };

  case GET_GRID_PHOTOS_ERROR:
    return { ...state, error: action.payload, loading: false };

  default:
    // Нет изменений
    return state;
  }
};
