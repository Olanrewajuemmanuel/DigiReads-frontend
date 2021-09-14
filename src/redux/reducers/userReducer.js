import { USER_CREATED, USER_LOGIN, USER_SIGN_OUT } from "../types";

const initialState = {
    userData: [],
}

export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case USER_CREATED:
            return {
                ...state,
                userData: action.payload
            }
        case USER_LOGIN:
            return {
                ...state,
                userData: action.payload
            }
        case USER_SIGN_OUT:
            return {
                ...state,
                userData: []
            }
        default:
            return state;
    }
}