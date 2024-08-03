import { SET_TICKET_FILTER } from './ticketFilterType';
import { ticketFilters } from './ticketFilterAction';

const initialState = {
    filter: ticketFilters.SHOW_VALID
}

const ticketFilterReducer = (state = initialState , action) => {
    switch(action.type){
        case SET_TICKET_FILTER:
            return {
                filter: action.filter
            }
        default:
            return state
    }
}

export default ticketFilterReducer;