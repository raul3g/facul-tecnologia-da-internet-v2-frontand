import { all } from "redux-saga/effects";

//Importando todos os sagas
import auth from "./auth/sagas";

export default function* rootSaga() {
  return yield all([auth]);
}
