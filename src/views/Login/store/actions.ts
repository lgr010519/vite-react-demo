import {UPDATE_FORM} from "./actionTypes.ts"

export const updateFormAction = (form: any) => ({
    type: UPDATE_FORM,
    payload: form
})