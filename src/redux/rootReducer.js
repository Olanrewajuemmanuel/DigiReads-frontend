import { combineReducers } from "redux"

const initialState = {
    counter: 0,
    data: []
}

const payReducer = (state=initialState, action) => {
    switch (action.type) {
        case "PAY_INIT":
            
            return {
                ...state,
                counter: state.counter + 1,
                
            }
        case "PAY_SUCCESS":
            return {
                ...state,
                counter: state.counter + 1,
                data: action.payload
            }
        case "PAY_FAILED":
            return {
                ...state,
                counter: 0,
                data: action.payload
            }
        default:
            return state 
    }
}
let rootReducer = combineReducers({
    myCount: payReducer,
})

export default rootReducer