import { CHANGE_ALIGNMENT } from "./constants";

const initialState = {
    alignment: 'right'
}

export const changeAlignment = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_ALIGNMENT:
            return { 
                ...state,
                alignment: action.payload
            }
        default:
            return state;
    }
}