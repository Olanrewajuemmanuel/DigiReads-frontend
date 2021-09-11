import { all } from "redux-saga/effects"
import mySaga from "./mySagas"

function* rootSaga() {
    yield all([mySaga()])
}

export default rootSaga