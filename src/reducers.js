import { 
    CHANGE_ALIGNMENT, 
    ADD_LINK, TOGGLE_LOGO, 
    TOGGLE_HEADER_IMAGE,
    ADD_ROWS,
    ADD_COLUMNS,
    TOGGLE_COPYRIGHT, 
    ADD_COPYRIGHT,
    ALIGNMENT,
    ADD_SOCIAL
} from "./constants";

const headerState = {
    alignment: 'right',
    link1: 'Home',
    link2: 'About',
    link3: 'Contact',
    link4: '',
    includeLogo: false,
    includeHeaderImage: true,
}

export const headerConfig = (state=headerState, action={}) => {
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

const mainState = {
    numberOfRows: '1',
    numberOfColumns: '1'
}

export const mainConfig = (state=mainState, action={}) => {
    switch(action.type) {
        case ADD_ROWS:
            return { 
                ...state,
                numberOfRows: action.payload
            }
        case ADD_COLUMNS:
            return { 
                ...state,
                numberOfColumns: action.payload
            }
        default:
            return state;
    }
}

const footerState = {
    includeCopyright: false,
    copyrightText: 'Copyright',
    copyrightAlignment: 'center',
    socialAlignment: 'center',
    addTwitter: false,
    addFacebook: false,
    addGithub: false,
    addEmail: false
}

export const footerConfig = (state=footerState, action={}) => {
    switch(action.type) {
        case TOGGLE_COPYRIGHT:
            return { 
                ...state,
                includeCopyright: action.payload
            }
        case ADD_COPYRIGHT:
            return { 
                ...state,
                copyrightText: action.payload
            }
        case ALIGNMENT:
            return { 
                ...state,
                [action.name]: action.payload
            }
        case ADD_SOCIAL:
            return { 
                ...state,
                [action.name]: action.payload
            }
        default:
            return state;
    }
}