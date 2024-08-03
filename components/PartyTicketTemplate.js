import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';
import { companies } from '../constants/mocks';
import { colors } from '../constants/theme';

const PartyTicketTemplate = ({ticket,}) => {
    const company = companies.find(company => company.id == ticket.companyId);
    return(
        <View  style={{flex: 1,}}>
                <View style={{ margin: 10, marginLeft: 20, flex: 1, justifyContent:'space-between'}}>
                    <View style={{width: 160,}}>
                        <Text style={styles.ticketTitle}>{company.name}</Text>
                    </View>
                    <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                        <Text style={{fontSize: 12, color: colors.primary}}>artist: </Text>
                        <Text style={{fontSize: 14, color: colors.primary,}}>{company.artist.toUpperCase()}</Text>
                    </View>
                    <View>
                        <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: colors.primary}}>date : </Text>
                            <Text style={{fontSize: 14, color: colors.primary}}>{company.date}</Text>
                        </View>
                        <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Text style={{fontSize: 12, color: colors.primary}}>time : </Text>
                            <Text style={{fontSize: 14, color: colors.primary}}>{company.startTime}-{company.endTime}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{color: colors.primary, fontSize: 12}}>{company.address}</Text>
                    </View>
                </View>
                <View style={styles.priceLabel}>
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>PRICE : €{company.price}</Text>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    priceLabel: {
        position: 'absolute', 
        top: 10, 
        right: 10, 
        backgroundColor: colors.primary, 
        borderRadius: 3, 
        height: 25, 
        justifyContent:'center', 
        paddingHorizontal: 5,
    },
    ticketTitle: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: 'bold'
    },
});
export default PartyTicketTemplate;
