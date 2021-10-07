import { call, put, takeEvery } from "redux-saga/effects";
import { DATA_SAVED, USER_CREATED, USER_LOGIN } from "../types";

function* saveUserInfo({ payload }) {
  // save token, user id
  localStorage.setItem("token", payload.token)
  localStorage.setItem("userId", payload.id)
  yield put({ type: DATA_SAVED, payload })
}

function* watcherSaga() {
  yield takeEvery([USER_LOGIN, USER_CREATED], saveUserInfo)
}

export default watcherSaga;
