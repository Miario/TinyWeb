import { CHANGE_ALIGNMENT, ADD_LINK, TOGGLE_LOGO } from './constants';

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