import { combineReducers } from 'redux';
import coffeeRunsReducer from './coffeeRunsReducer';
import accountReducer from './accountReducer';

export default combineReducers({
    account: accountReducer,
    coffeeRuns: coffeeRunsReducer
});

