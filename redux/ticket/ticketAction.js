import { 
    OPEN_QRCODE_MODAL,
    CLOSE_QRCODE_MODAL
} from '../ticket/ticketType';

export const openQRCode = (data = null) => {
    return {
        type: OPEN_QRCODE_MODAL,
        payload: data
    }
}

export const closeQRCode = () => {
    return{
        type: CLOSE_QRCODE_MODAL
    }
}
