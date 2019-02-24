import { LOAD_COFFEE_RUNS, ADD_COFFEE_RUN } from '../actions/actionTypes';

export default (state = [], {type, payload}) => {
    switch(type){
        case ADD_COFFEE_RUN:
            return [
                payload,
                ...state,
            ];
        case LOAD_COFFEE_RUNS:
            return [
                ...state,
                ...payload.data
            ];
        default:
            return state;
    }
};