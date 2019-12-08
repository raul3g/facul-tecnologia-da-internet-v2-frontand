import { combineReducers } from "redux";

//Importando todos os reducers
import auth from "./auth/reducer";
import order from "./orders/reducer";

export default combineReducers({
  auth,
  order
});
