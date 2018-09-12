import { CHANGE_ALIGNMENT, ADD_LINK } from './constants';

export const navAlign = (text) => ({
    type: CHANGE_ALIGNMENT,
    payload: text
})

export const addLink = (text, name) => ({
    type: ADD_LINK,
    payload: text,
    name: name
})