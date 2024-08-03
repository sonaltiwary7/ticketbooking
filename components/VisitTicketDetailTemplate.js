import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
 } from 'react-native';
import { colors } from '../constants/theme';

const VisitTicketDetailTemplate = ({ticket, company}) => {
    const totalAdultCost = ticket.adultNo*company.adultPrice;
    const totalKidCost = ticket.kidNo*company.kidPrice;
    const totalCost = totalAdultCost + totalKidCost;
    return(
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                <View style={styles.contentLayout}>
                    <Text style={styles.ticketLabel}>PURCHASE ON</Text>
                    <Text style={styles.ticketData}>{ticket.purchaseDate}</Text>
                </View>
                <View style={[styles.priceLabel]}>
                    <Text style={{fontSize: 16, fontWeight: 'normal'}}>PRICE : € {totalCost}</Text>
                </View>
            </View>
            <View style={styles.contentLayout}>
                <Text style={styles.ticketLabel}>VALIDITY</Text>
                <Text style={styles.ticketData}>{company.validity}</Text>
            </View>
            <View style={[styles.contentLayout, {display: 'flex', flexDirection: 'row', justifyContent:'space-between'}]}>
                <View>
                    <Text style={styles.ticketLabel}>OPENING HOUR</Text>
                    <Text style={styles.ticketData}>{company.openAt} - {company.closeAt}</Text>
                </View>
                <View>
                    <Text style={styles.ticketLabel}>LAST ENTRY</Text>
                    <Text style={styles.ticketData}>{company.lastEntry}</Text>
                </View>
                <View>
                    <Text style={styles.ticketLabel}>GENERAL ADMISSION</Text>
                    <Text style={styles.ticketData}>SINGLE ENTRY</Text>
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
                <View style={{flex: 3,}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                        <Text style={styles.ticketLabel}>{ticket.adultNo} X Adult</Text>
                        <Text style={styles.ticketLabel}>{ticket.adultNo} X {company.adultPrice}  :  {totalAdultCost}€</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
                        <Text style={styles.ticketLabel}>{ticket.kidNo} X Kid   </Text>
                        <Text style={styles.ticketLabel}>{ticket.kidNo} X {company.kidPrice}  :  {totalKidCost}€</Text>
                    </View>
                    <Text style={[styles.ticketLabel, {alignSelf:'center'}]}> ----------------------------------- </Text>
                    <Text style={[styles.ticketLabel, {alignSelf:'flex-end'}]}> Total   :  {totalCost}€       </Text>
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

export default VisitTicketDetailTemplate;
