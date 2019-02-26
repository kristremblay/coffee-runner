import {ADD_COFFEE_RUN, LOAD_COFFEE_RUNS, CANCEL_COFFEE_RUN} from './actionTypes';

export const addCoffeeRun = content => ({
    type: ADD_COFFEE_RUN,
    payload: {
        ...content,
        ends_at: content.ends_at.date
    }
});

export const loadCoffeeRuns = content => ({
    type: LOAD_COFFEE_RUNS,
    payload: {
        data: content.data
    }
});

export const cancelCoffeeRun = id => ({
    type: CANCEL_COFFEE_RUN,
    payload: {
        id
    }
});