import {ADD_COFFEE_RUN, LOAD_COFFEE_RUNS} from './actionTypes';

export const addCoffeeRun = content => ({
    type: ADD_COFFEE_RUN,
    payload: {
        id: content.id,
        title: content.title,
        ends_at: content.ends_at.date
    }
});

export const loadCoffeeRuns = content => ({
    type: LOAD_COFFEE_RUNS,
    payload: {
        data: content.data
    }
});