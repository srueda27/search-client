import photos from "../apis/photos";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_PHOTO,
  LIST_PHOTOS,
  GET_PHOTO
} from "./types"

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createPhoto = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await photos.post('/photos', { ...formValues, userId });

  dispatch({
    type: CREATE_PHOTO,
    payload: response.data
  });

  history.push('/')
};

export const listPhotos = () => async dispatch => {
  const response = await photos.get('/photos');

  dispatch({
    type: LIST_PHOTOS,
    payload: response.data
  });
};

export const getPhoto = photoId => async dispatch => {
  const response = await photos.get(`/photos/${photoId}`);

  dispatch({
    type: GET_PHOTO,
    payload: response.data
  });
};

