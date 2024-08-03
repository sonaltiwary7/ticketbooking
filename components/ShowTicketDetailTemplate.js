import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
 } from 'react-native';
import { colors } from '../constants/theme';

const ShowTicketDetailTemplate = ({ticket, company}) => {
    const show = company.shows.find(show => show.id == ticket.showId);
    return(
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                <View style={styles.contentLayout}>
                    <Text style={styles.ticketLabel}>PURCHASE ON</Text>
                    <Text style={styles.ticketData}>{ticket.purchaseDate}</Text>
                </View>
                <View style={[styles.priceLabel]}>
                    <Text style={{fontSize: 16, fontWeight: 'normal'}}>PRICE : €{show.price}</Text>
                </View>
            </View>

            <Text style={[styles.showName, styles.contentLayout]}>{show.name.toUpperCase()}</Text>
            <View style={[styles.contentLayout, {display: 'flex', flexDirection: 'row', justifyContent:'space-between'}]}>
                <View>
                    <Text style={styles.ticketLabel}>THEATER</Text>
                    <Text style={styles.ticketData}>{ticket.theater}</Text>
                </View>
                <View>
                    <Text style={styles.ticketLabel}>SEAT</Text>
                    <Text style={styles.ticketData}>{ticket.row}/{ticket.column}</Text>
                </View>
                <View>
                    <Text style={styles.ticketLabel}>DATE : {show.date}</Text>
                    <Text style={styles.ticketLabel}>TIME : {show.time}</Text>
                </View>
            </View>
            <View style={styles.contentLayout}>
                <Text style={styles.ticketLabel}>ADDRESS</Text>
                <Text style={styles.ticketData}>{company.address}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View style={{flexDirection: 'row', flex: 2, flexWrap:'wrap'}}>
                    <Image source={require('../assets/snacks.png')} style={{height: 31, width: 31, marginRight: 15, marginBottom: 15}}/>
                    <Image source={require('../assets/camera.png')} style={{height: 31, width: 31, marginRight: 15, marginBottom: 15}}/>
                    <Image source={require('../assets/snacks.png')} style={{height: 31, width: 31, marginRight: 15, marginBottom: 15}}/>
                    <Image source={require('../assets/camera.png')} style={{height: 31, width: 31, marginRight: 15, marginBottom: 15}}/>
                </View>
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
    showName: {
        color: colors.primary, 
        fontSize: 27, 
        textDecorationLine: 'underline', 
        alignSelf:'center',
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
    priceLabel: {
        backgroundColor: colors.primary, 
        borderRadius: 3, 
        height: 32, 
        justifyContent:'center', 
        paddingHorizontal: 10,
    },
});

export default ShowTicketDetailTemplate;
