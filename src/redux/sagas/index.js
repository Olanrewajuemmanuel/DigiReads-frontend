import { all } from "redux-saga/effects"
import watcherSaga from "./mySagas"

function* rootSaga() {
    yield all([watcherSaga()])
}

export default rootSaga