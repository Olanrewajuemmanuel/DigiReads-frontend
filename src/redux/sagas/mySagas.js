import { call, put, takeEvery } from "redux-saga/effects";

function getApi(userId) {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/'+userId)
      .then((data) => {
        resolve(data.json())})
      .catch(err => reject(err))
  })
}

function* logSaga() {
  try {
    const data = yield call(getApi, 1)
    yield put({ type: "PAY_SUCCESS", payload: data })
  } catch (error) {
    yield put({ type: "PAY_FAILED", payload: error })
  }
}

function* mySaga() {
  yield takeEvery("PAY_INIT", logSaga);
}

export default mySaga;
