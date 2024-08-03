import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableHighlight, 
} from 'react-native';
import TicketTemplate from '../components/TicketTemplate';
import TravelTicketTemplate from '../components/TravelTicketTemplate';
import ShowTicketTemplate from '../components/ShowTicketTemplate';
import PartyTicketTemplate from '../components/PartyTicketTemplate';
import VisitTicketTemplate from '../components/VisitTicketTemplate';
import QRCode from 'react-native-qrcode-svg';

import { companies } from '../constants/mocks';
import { useNavigation } from '@react-navigation/native';


const RenderTicket = (props) => {
    
    const navigation = useNavigation();
    const ticket = props.ticket;
    const openQRCodeModal = props.openQRCodeModal;
    const company = companies.find(company => company.id == ticket.companyId);

    const categoryIcons={
        "1": require("../assets/show.png"),
        "2": require("../assets/visit.png"),
        "3": require("../assets/travel.png"),
        "4": require("../assets/party.png")
    }

    const ticketStatus = {
        true  : require("../assets/used.png"),
        false : require("../assets/expired.png"),
    }
    return(
        <View style={[styles.shadow, {margin: 16,}]}>
        <TicketTemplate categoryIconPath={categoryIcons[company.categoryId]} />
        <View style={styles.ticketView}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems:'center',}}>
                <TouchableHighlight onPress={() => openQRCodeModal(JSON.stringify(ticket))}>
                    <View>
                        <QRCode value={Object.entries(ticket)} size={50} />
                        <View style={[styles.qrCodeOverlay, {opacity: ticket.valid ? 0 : 0.5,}]} />
                    </View>
                </TouchableHighlight>
                {
                    !ticket.valid &&
                    <Image source={ ticketStatus[ticket.used] } style={styles.validImage} />
                }
                <View style={{marginTop: 10,}}>
                    <Text style={styles.ticketNo}>No. {ticket.ticketId}</Text>
                </View>
            </View>
            {
                company.categoryId == 1 &&
                    <TouchableHighlight onPress={() => navigation.navigate('ticketDetail', {ticket: ticket, company: company } )} style={{ display:'flex', flex: 2.8,}} >
                        <ShowTicketTemplate ticket={ticket} />
                    </TouchableHighlight>
            }
            {
                company.categoryId == "2" &&
                    <TouchableHighlight onPress={() => navigation.navigate('ticketDetail', {ticket: ticket, company: company})} style={{ display:'flex', flex: 2.8,}} >
                        <VisitTicketTemplate ticket={ticket} />
                    </TouchableHighlight>
            }
            {
                company.categoryId == "3" &&
                    <TouchableHighlight onPress={() => navigation.navigate('ticketDetail', {ticket: ticket, company: company})} style={{ display:'flex', flex: 2.8,}} >
                        <TravelTicketTemplate ticket={ticket} />
                    </TouchableHighlight>
            }
            {
                company.categoryId == "4" &&
                    <TouchableHighlight onPress={() => navigation.navigate('ticketDetail', {ticket: ticket, company: company})} style={{ display:'flex', flex: 2.8,}} >
                        <PartyTicketTemplate ticket={ticket} />
                    </TouchableHighlight>
            }
        </View>
    </View>
    )
};
const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    ticketView: {
        position: 'absolute', 
        display: 'flex', 
        flexDirection:'row', 
        left:0, 
        right:0, 
        height: '100%'
    },
    qrCodeOverlay: {
        backgroundColor: 'white', 
        position: 'absolute', 
        height: 50, 
        width: 50,
    },
    validImage: { 
        width: 67, 
        height: 67, 
        resizeMode: 'contain', 
        position:'absolute', 
        top: 10, 
        left: 10
    },
    ticketNo: {
        fontSize: 10,
        fontWeight: '300',
        marginVertical: 0
    },
});

export default RenderTicket;
