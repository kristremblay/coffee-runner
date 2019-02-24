import { combineReducers } from 'redux';
import coffeeRunsReducer from './coffeeRunsReducer';
import accountReducer from './accountReducer';

export default combineReducers({
    coffeeRuns: coffeeRunsReducer,
    account: accountReducer
});

