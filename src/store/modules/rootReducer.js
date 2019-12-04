import { combineReducers } from "redux";

//Importando todos os reducers
import auth from "./auth/reducer";

export default combineReducers({
  auth
});
