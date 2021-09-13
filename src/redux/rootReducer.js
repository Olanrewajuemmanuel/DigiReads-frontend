import { combineReducers } from "redux"
import userCreatedReducer from "./reducers/userCreated"

let rootReducer = combineReducers({
    userCreatedReducer,
})

export default rootReducer