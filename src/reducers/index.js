import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./authReducer";
import photoReducer from "./photoReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  photos: photoReducer
});
