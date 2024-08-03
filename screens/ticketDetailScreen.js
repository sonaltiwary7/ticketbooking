import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
 } from 'react-native';
import { colors } from '../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';
import TicketDivider from '../components/TicketDivider';
import VisitTicketDetailTemplate from '../components/VisitTicketDetailTemplate';
import ShowTicketDetailTemplate from '../components/ShowTicketDetailTemplate';
import TravelTicketDetailTemplate from '../components/TravelTicketDetailTemplate';
import PartyTicketDetailTemplate  from '../components/PartyTicketDetailTemplate';
import QRCode from 'react-native-qrcode-svg';

function TicketDetailScreen({route}){
    const ticket = route.params.ticket;
    const company = route.params.company;
    const companyLogo = {
        'bmw' : require('../assets/bmw.jpeg'),
        'gn' : require('../assets/gn.jpeg'),
        'ic' : require('../assets/ic.jpeg'),
        'ny' : require('../assets/ny.jpeg'),
        'rmv' : require('../assets/rmv.jpeg'),
        'sn' : require('../assets/sn.jpeg'),
        'logo' : require('../assets/logo.png'),
    }
    const ticketStatus = {
        true  : require("../assets/used.png"),
        false : require("../assets/expired.png"),
    }
    const logoName = company.logo.split(".")[0]
    return(
        <View style={{display: 'flex', flex: 1,}}>
            <View style={{backgroundColor: colors.secondary, width: '100%', height: 170}}>
            </View>
            <View style={{position: 'absolute', backgroundColor: colors.transparent, width: '100%', height: '100%', display: 'flex', }}>
                <View style={{marginBottom: 14, paddingHorizontal: 16}}>
                    <Text style={styles.pageTitle}>Ticket Details</Text>
                </View>
                <ScrollView style={[styles.shadow, {flex: 1, paddingHorizontal: 16, }]} showsVerticalScrollIndicator={false}>
                    <View style={{display:'flex', flexDirection: 'row', marginTop: 20, paddingHorizontal: 13, zIndex: 2}}>
                        <View style={[styles.shadow, {height: 83, width: 83, borderRadius: 41.5, overflow: 'hidden'}]}>
                            <Image source={companyLogo[logoName]} style={{height: 83, width: 83, }} />
                        </View>
                        <View style={{ alignSelf:'center', top: -5,}}>
                            <Text style={styles.ticketTitle}>{company.name}</Text>
                        </View>
                    </View>
                    <View style={{top: -18}}>
                        <View style={styles.qrCodeView}>
                            <View style={{backgroundColor: colors.white, opacity: ticket.valid ? 1 : 0.5, height: 250, width: 250,}} >
                                <QRCode value={JSON.stringify(ticket)}  size={250}/>
                                
                            </View>
                            {
                                !ticket.valid &&
                                <Image source={ ticketStatus[ticket.used] } style={styles.invalidImage} />
                            }
                            <Text style={{fontSize: 17, color: colors.tertiary, marginTop: 20}}>NO: {ticket.ticketId}</Text>
                        </View>
                        <TicketDivider style={{zIndex: 2,}}/>
                        <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 16, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: colors.tertiary, }}>
                            {
                                company.categoryId == 1 &&
                                    <ShowTicketDetailTemplate ticket={ticket} company={company} />
                            }
                            {
                                company.categoryId == 2 &&
                                    <VisitTicketDetailTemplate ticket={ticket} company={company} />
                            }
                            {
                                company.categoryId == 3 &&
                                    <TravelTicketDetailTemplate ticket={ticket} company={company} />
                            }
                            {
                                company.categoryId == 4 &&
                                    <PartyTicketDetailTemplate ticket={ticket} company={company} />
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

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
    pageTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: colors.primary,
    },
    ticketTitle: {
        paddingLeft: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.white,
        lineHeight: 26,
    },
    contentLayout: {
        marginBottom: 30,
    },
    ticketLabel: {
        color: colors.white,
        fontSize: 12,
    },
    ticketData: {
        color: colors.white,
        fontSize: 16,
    },
    qrCodeView: { 
        width: '100%', 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        backgroundColor: 'white', 
        zIndex: 1, 
        paddingTop: 50, 
        paddingBottom: 30, 
        justifyContent:'center', 
        alignItems: 'center',
    },
    invalidImage: { 
        width: 200, 
        height: 200, 
        resizeMode: 'contain', 
        position:'absolute', 
    },
});

export default TicketDetailScreen;