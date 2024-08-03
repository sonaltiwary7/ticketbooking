import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
 } from 'react-native';
import { colors } from '../constants/theme';

const TravelTicketDetailTemplate = ({ticket, company}) => {
    const ticketType = company.ticketType.find(ticketType => ticketType.id == ticket.ticketTypeId);
    const price = ticket.adult ? ticketType.adultPrice.toString().concat(' (Adult)') : ticketType.kidPrice.toString().concat(' (Kid)');
    return(
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                <View style={styles.contentLayout}>
                    <Text style={styles.ticketLabel}>PURCHASE ON</Text>
                    <Text style={styles.ticketData}>{ticket.purchaseDate}</Text>
                </View>
                <View style={[styles.priceLabel]}>
                    <Text style={{fontSize: 16, fontWeight: 'normal'}}>PRICE : € {price}</Text>
                </View>
            </View>
            <View style={styles.contentLayout}>
                <Text style={{color: colors.primary, fontSize: 22}}>{ticketType.name.toUpperCase()}</Text>
            </View>
            <View style={[styles.contentLayout,{flexDirection: 'row', justifyContent: 'space-between',}]}>
                <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={styles.ticketLabel}>VON : </Text>
                    <Text style={styles.ticketData}>{ticket.from}</Text>
                </View>
                <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={styles.ticketLabel}>ÜBER : </Text>
                    <Text style={styles.ticketData}>{ticket.over}</Text>
                </View>
                <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={styles.ticketLabel}>NACH : </Text>
                    <Text style={styles.ticketData}>{ticket.to}</Text>
                </View>
            </View>
            <View style={styles.contentLayout}>
                <Text style={styles.ticketLabel}>VALIDITY</Text>
                <Text style={styles.ticketData}>{ticketType.validity}</Text>
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

export default TravelTicketDetailTemplate;
