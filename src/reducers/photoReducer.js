import _ from "lodash";
import {
  LIST_PHOTOS,
  LIST_PHOTOS_TITLE,
  GET_PHOTO,
  CREATE_PHOTO,
  CLEAR_LIST
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LIST_PHOTOS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case GET_PHOTO:
    case CREATE_PHOTO:
      return { ...state, [action.payload.id]: action.payload };
    case LIST_PHOTOS_TITLE:
      return { ..._.mapKeys(action.payload, 'id') }
    case CLEAR_LIST:
      return {}
    default:
      return state;
  }
}