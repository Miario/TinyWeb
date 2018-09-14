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
} from './constants';

export const navAlign = (text) => ({
    type: CHANGE_ALIGNMENT,
    payload: text
})

export const addLink = (text, name) => ({
    type: ADD_LINK,
    payload: text,
    name: name
})

export const toggleLogo = (boolean) => ({
    type: TOGGLE_LOGO,
    payload: boolean
})

export const toggleHeaderImage = (boolean) => ({
    type: TOGGLE_HEADER_IMAGE,
    payload: boolean
})

export const addRows = (number) => ({
    type: ADD_ROWS,
    payload: number
})

export const addColumns = (number) => ({
    type: ADD_COLUMNS,
    payload: number
})

export const toggleCopyright = (boolean) => ({
    type: TOGGLE_COPYRIGHT,
    payload: boolean
})

export const addCopyright = (text) => ({
    type: ADD_COPYRIGHT,
    payload: text
})

export const alignFooter = (text, name) => ({
    type: ALIGNMENT,
    payload: text,
    name: name
})

export const addSocial = (boolean, name) => ({
    type: ADD_SOCIAL,
    payload: boolean,
    name: name
})