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

    Cookies.set("ACCESS", "teste", { domain: ".netlify.app" });

    Cookies.set("token", response, { path: "/", domain: ".netlify.app" });
    Cookies.set("name", "value", { domain: ".netlify.app" });

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

function logoutSaga() {
  try {
    Cookies.remove("token", { path: "/", domain: ".netlify.app" });
    // Cookies.set("token", "", {});
    alert("Limpei")

    // window.location.href = "/";
  } catch (err) {
    console.log("err", err);
    // cookie.remove("token");
  }
}


export default all([
  takeLatest("@authentication/SIGN_IN_REQUEST", signIn),
  // takeLatest("@auth/LOGOUT", logoutSaga),
  takeLatest("@auth/LOGOUT_REQUEST", logoutSaga),
]);
