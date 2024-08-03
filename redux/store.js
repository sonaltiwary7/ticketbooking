import { createStore, combineReducers } from 'redux';
import ticketFilterReducer from './ticketFilter/ticketFilterReducer';
import ticketReducer from './ticket/ticketReducer';

const rootReducer = combineReducers({
    ticket: ticketReducer,
    ticketFilter: ticketFilterReducer
})

const store = createStore(rootReducer);

export default store;