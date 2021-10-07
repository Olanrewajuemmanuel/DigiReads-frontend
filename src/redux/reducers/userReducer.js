import { AUTHOR_VERIFIED, DATA_SAVED, USER_CREATED, USER_LOGIN, USER_SIGN_OUT } from "../types";

const initialState = {
    userData: [],
    authorData: [],
}

export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case DATA_SAVED:
            return {
                ...state,
                userData: action.payload
            }
        case AUTHOR_VERIFIED:
            return {
                ...state,
                authorData: action.payload
            }
        default:
            return state;
    }
}