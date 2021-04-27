import { all } from "redux-saga/effects";

import authentication from "./auth/sagas";

export default function* rootSaga() {
  return yield all([authentication]);
}
