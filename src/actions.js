import { CHANGE_ALIGNMENT } from './constants';

export const navAlign = (text) => ({
    type: CHANGE_ALIGNMENT,
    payload: text
})