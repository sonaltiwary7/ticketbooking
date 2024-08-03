import { SET_TICKET_FILTER } from './ticketFilterType';

export const setTicketFilter = filter => ({
    type:  SET_TICKET_FILTER,
    filter
})
export const ticketFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_EXPIRED: 'SHOW_EXPIRED',
    SHOW_VALID: 'SHOW_VALID'
}