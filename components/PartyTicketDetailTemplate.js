import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
 } from 'react-native';
import { colors } from '../constants/theme';

const PartyTicketDetailTemplate = ({ticket, company}) => {
    return(
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                <View style={styles.contentLayout}>
                    <Text style={styles.ticketLabel}>PURCHASE ON</Text>
                    <Text style={styles.ticketData}>{ticket.purchaseDate}</Text>
                </View>
                <View style={[styles.priceLabel]}>
                    <Text style={{fontSize: 16, fontWeight: 'normal'}}>PRICE : € {company.price}</Text>
                </View>
            </View>
            <Text style={[styles.ticketLabel, {alignSelf:'center'}]}>ARTIST</Text>
            <Text style={{color: colors.primary, fontSize: 27, textDecorationLine: 'underline', alignSelf:'center', marginBottom: 10}}>{company.artist.toUpperCase()}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
                <Text style={styles.ticketLabel}>DATE : {company.date}      </Text>
                <Text style={styles.ticketLabel}>TIME : {company.startTime} - {company.endTime}</Text>
            </View>
            <Text style={[styles.ticketLabel, styles.contentLayout, {alignSelf:'center', }]}>{company.address}</Text>
            <View style={{flexDirection: 'row', marginBottom: 20, justifyContent:'center'}}>
                <Image source={require('../assets/snacks.png')} style={{height: 31, width: 31, marginHorizontal: 10,}}/>
                <Image source={require('../assets/camera.png')} style={{height: 31, width: 31, marginHorizontal: 10,}}/>
                <Image source={require('../assets/snacks.png')} style={{height: 31, width: 31, marginHorizontal: 10,}}/>
                <Image source={require('../assets/camera.png')} style={{height: 31, width: 31, marginHorizontal: 10,}}/>
            </View>
            <View>
                <Text style={[styles.ticketLabel,{marginBottom: 10}]}>Note: This ticket is non-refundable and non-transfarrable</Text>
                <Text style={[styles.ticketLabel]}>Terms and condition of this ticket are available in the website or from any ticket or information desk.</Text>
                <Text style={{fontSize: 12, color: colors.link}}>Go to website</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    priceLabel: {
        backgroundColor: colors.primary, 
        borderRadius: 3, 
        height: 32, 
        justifyContent:'center', 
        paddingHorizontal: 10,
    },
});

export default PartyTicketDetailTemplate;
