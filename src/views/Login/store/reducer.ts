import {
    UPDATE_FORM,
} from "./actionTypes.ts";

const initialState = {
    phone: '',
    username: '',
    password: '',
    checkCode: '',
}

export interface LoginState {
    phone: '',
    username: '',
    password: '',
    checkCode: '',
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_FORM: {
            localStorage.setItem('userInfo', JSON.stringify({
                ...state,
                ...action.payload
            }))
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}