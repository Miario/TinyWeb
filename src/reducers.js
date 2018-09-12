import { CHANGE_ALIGNMENT, ADD_LINK, TOGGLE_LOGO, TOGGLE_HEADER_IMAGE } from "./constants";

const navState = {
    alignment: 'right',
    link1: 'Home',
    link2: 'About',
    link3: 'Contact',
    link4: '',
    includeLogo: false,
    includeHeaderImage: true,
}

export const navConfig = (state=navState, action={}) => {
    switch(action.type) {
        case CHANGE_ALIGNMENT:
            return { 
                ...state,
                alignment: action.payload
            }
        case ADD_LINK:
            return { 
                ...state,
                [action.name]: action.payload
        }
        case TOGGLE_LOGO:
            return { 
                ...state,
                includeLogo: action.payload
        }
        case TOGGLE_HEADER_IMAGE:
            return { 
                ...state,
                includeHeaderImage: action.payload
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