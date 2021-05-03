import { push } from "connected-react-router";
import { call, all, takeLatest, put } from "redux-saga/effects";
import Cookies from "js-cookie";
import * as api from "./repository";

function* signIn({ payload }) {
  try {
    const { data: response } = yield call(api.signIn, {
      user: payload.email,
      password: payload.password,
    });

    const host = "";
    let urlResult;
    if (host === "https://homol.solides.jobs") {
      urlResult = `homol.solides.jobs`;
    } else if (host === "https://solides.jobs") {
      urlResult = `solides.jobs`;
    } else {
      urlResult = ".netlify.app";
    }

    Cookies.set("ACCESS", "teste", { domain: "jobzera.netlify.app" });

    Cookies.set("token", response, { path: "/", domain: "jobzera.netlify.app" });
    Cookies.set("name", "value", { domain: "jobzera.netlify.app" });

    console.log("response", response);
    yield put({
      type: "@authentication/SET_IS_AUTHENTICATE_SUCCESS",
      payload: true,
    });

    yield put(push("/"));
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
