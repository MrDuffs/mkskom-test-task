export const GET_FLEXBOX_PHOTOS = 'GET_FLEXBOX_PHOTOS';
export const GET_FLEXBOX_PHOTOS_SUCCESS = 'GET_FLEXBOX_PHOTOS_SUCCESS';
export const GET_FLEXBOX_PHOTOS_ERROR = 'GET_FLEXBOX_PHOTOS_ERROR';

export const GET_GRID_PHOTOS = 'GET_GRID_PHOTOS';
export const GET_GRID_PHOTOS_SUCCESS = 'GET_GRID_PHOTOS_SUCCESS';
export const GET_GRID_PHOTOS_ERROR = 'GET_GRID_PHOTOS_ERROR';

export const SEARCH_PHOTOS = 'SEARCH_PHOTOS';
export const SEARCH_PHOTOS_SUCCESS = 'SEARCH_PHOTOS_SUCCESS';
export const SEARCH_PHOTOS_ERROR = 'SEARCH_PHOTOS_ERROR';

export const getFlexboxPhotos = () => async (dispatch) => {
  dispatch({ type: 'GET_FLEXBOX_PHOTOS' });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    dispatch({
      type: 'GET_FLEXBOX_PHOTOS_SUCCESS',
      payload: data.slice(0, 16),
    });
  } catch (e) {
    dispatch({ type: 'GET_FLEXBOX_PHOTOS_ERROR', payload: e });
  }
};

export const getGridPhotos = () => async (dispatch) => {
  dispatch({ type: 'GET_GRID_PHOTOS' });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    dispatch({
      type: 'GET_GRID_PHOTOS_SUCCESS',
      payload: data.slice(0, 5),
    });
  } catch (e) {
    dispatch({ type: 'GET_GRID_PHOTOS_ERROR', payload: e });
  }
};

export const searchPhotos = (albumId, layout) => async (dispatch) => {
  dispatch({ type: 'SEARCH_PHOTOS' });

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    const data = await response.json();

    if (layout === 'flex') {
      dispatch({
        type: 'SEARCH_PHOTOS_SUCCESS',
        payload: data.slice(0, 16),
      });
    } else {
      dispatch({
        type: 'SEARCH_PHOTOS_SUCCESS',
        payload: data.slice(0, 5),
      });
    }
  } catch (e) {
    dispatch({ type: 'SEARCH_PHOTOS_ERROR', payload: e });
  }
};
