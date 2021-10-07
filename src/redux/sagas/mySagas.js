import { call, put, takeEvery } from "redux-saga/effects";
import { DATA_SAVED, USER_CREATED, USER_LOGIN, USER_SIGN_OUT } from "../types";

function* saveUserInfo({ payload }) {
  // save token, user id
  localStorage.setItem("token", payload.token)
  localStorage.setItem("userId", payload.id)
  yield put({ type: DATA_SAVED, payload })
}

function* clearUserBrowser() {
  localStorage.removeItem("userId")
  localStorage.removeItem("authorId")
  localStorage.removeItem("token")
}

function* watcherSaga() {
  yield takeEvery([USER_LOGIN, USER_CREATED], saveUserInfo)
  yield takeEvery(USER_SIGN_OUT, clearUserBrowser)
}

export default watcherSaga;
