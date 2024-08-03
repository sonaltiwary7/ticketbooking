import { ticketSample } from '../../constants/mocks';
import {
    OPEN_QRCODE_MODAL,
    CLOSE_QRCODE_MODAL
} from '../ticket/ticketType';

const initialState = {
    tickets: ticketSample,
    showQRCodeModal: false,
    qrCodeData: null
}

const ticketReducer = ( state = initialState, action) => {
    switch(action.type){
        case OPEN_QRCODE_MODAL:
            return {
                ...state,
                showQRCodeModal: true,
                qrCodeData: action.payload
            }
        case CLOSE_QRCODE_MODAL:
            return{
                ...state,
                showQRCodeModal: false,
                qrCodeData: null
            }
        default: 
            return state;
    }
}

export default ticketReducer;