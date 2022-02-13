import _ from "lodash";
import {
  LIST_PHOTOS,
  GET_PHOTO,
  CREATE_PHOTO
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LIST_PHOTOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case GET_PHOTO:
    case CREATE_PHOTO:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}