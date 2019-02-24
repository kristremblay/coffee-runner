import { LOAD_ACCOUNT_INFO } from '../actions/actionTypes';

export default (state = {}, {type, payload}) => {
    switch(type){
        case LOAD_ACCOUNT_INFO:
            return {
                ...payload.data
            };
        default:
            return state;
    }
};