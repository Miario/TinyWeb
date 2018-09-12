import { CHANGE_ALIGNMENT, ADD_LINK } from "./constants";

const initialState = {
    alignment: 'right',
    link1: 'Home',
    link2: 'About',
    link3: 'Contact',
}

export const navConfig = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_ALIGNMENT:
            return { 
                ...state,
                alignment: action.payload
            }
        case ADD_LINK:
            return { 
                ...state,
                [action.name]: action.payload,
        }
        default:
            return state;
    }
}

// export const addNavLink = (state=initialState, action={}) => {
//     switch(action.type) {
//         case CHANGE_ALIGNMENT:
//             return { 
//                 ...state,
//                 alignment: action.payload
//             }
//         default:
//             return state;
//     }
// }