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
    rows: [
        { 
            rowID: '100',
            columns: 
            [
                { columnID: '101', value: 'data'},
                { columnID: '102', value: 'data'},
                { columnID: '103', value: 'data'},
                { columnID: '104', value: 'data'}
            ]
        },
        { 
            rowID: '200',
            columns: 
            [
                { columnID: '201', value: 'data'},
                { columnID: '202', value: 'data'},
                { columnID: '203', value: 'data'},
                { columnID: '204', value: 'data'}
            ]
        },
        { 
            rowID: '300',
            columns: 
            [
                { columnID: '301', value: 'data'},
                { columnID: '302', value: 'data'},
                { columnID: '303', value: 'data'},
                { columnID: '304', value: 'data'}
            ]
        },
        { 
            rowID: '400',
            columns: 
            [
                { columnID: '401', value: 'data'},
                { columnID: '402', value: 'data'},
                { columnID: '403', value: 'data'},
                { columnID: '404', value: 'data'}
            ]
        },
        { 
            rowID: '500',
            columns: 
            [
                { columnID: '501', value: 'data'},
                { columnID: '502', value: 'data'},
                { columnID: '503', value: 'data'},
                { columnID: '504', value: 'data'}
            ]
        }
    ],
    numberOfColumns1: '1',
    numberOfColumns2: '1',
    numberOfColumns3: '1',
    numberOfColumns4: '1',
    numberOfColumns5: '1'
}

export const mainConfig = (state=mainState, action={}) => {
    switch(action.type) {
        case ADD_ROWS:
            return { 
                ...state,
                numberOfRows: action.payload,
            }
        case ADD_COLUMNS:
        return { 
            ...state,
            [action.name]: action.payload,
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