import { USER_CREATED } from "../types";

const initialState = {
    userData: [],
}

export default function userCreatedReducer(state=initialState, action) {
    switch (action.type) {
        case USER_CREATED:
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}