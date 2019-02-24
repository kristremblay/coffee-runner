import { LOAD_ACCOUNT_INFO } from './actionTypes';

export const loadAccountInfo = content => ({
    type: LOAD_ACCOUNT_INFO,
    payload: {
        data: content.data
    }
});