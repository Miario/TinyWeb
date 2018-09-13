import { CHANGE_ALIGNMENT, ADD_LINK, TOGGLE_LOGO, TOGGLE_HEADER_IMAGE, TOGGLE_COPYRIGHT } from './constants';

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

export const toggleCopyright = (boolean) => ({
    type: TOGGLE_COPYRIGHT,
    payload: boolean
})