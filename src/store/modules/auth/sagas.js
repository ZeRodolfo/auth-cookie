import { push } from "connected-react-router";
import { call, all, takeLatest, put, select } from "redux-saga/effects";
import Cookies from "js-cookie";
import * as api from "./repository";

function* signIn({ payload }) {
  try {
    const { data: response } = yield call(api.signIn, {
      user: payload.email,
      password: payload.password,
    });

    Cookies.set("authentication", response, { path: "/", domain: "localhost" });
    Cookies.set("name", "value", { domain: "homol.jobs" });

    const host = "";
    let urlResult;
    if (host === "https://homol.solides.jobs") {
      urlResult = `homol.solides.jobs`;
    } else if (host === "https://solides.jobs") {
      urlResult = `solides.jobs`;
    } else {
      urlResult = "127.0.0.1";
    }

    Cookies.set("ACCESS", "teste", { domain: urlResult });

    console.log("response", response);
    yield put({
      type: "@authentication/SET_IS_AUTHENTICATE_SUCCESS",
      payload: true,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: "@authentication/SET_IS_AUTHENTICATE_SUCCESS",
      payload: false,
    });
  }
}

export default all([
  takeLatest("@authentication/SIGN_IN_REQUEST", signIn),
  // takeLatest("@auth/LOGOUT", logoutSaga),
]);
