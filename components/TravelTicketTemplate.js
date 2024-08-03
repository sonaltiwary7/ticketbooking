import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
} from 'react-native';
import { companies } from '../constants/mocks';
import { colors } from '../constants/theme';

const TravelTicketTemplate = ({ ticket,}) => {
    const company = companies.find(company => company.id == ticket.companyId);
    const ticketType = company.ticketType.find(ticketType => ticketType.id == ticket.ticketTypeId);
    const price = ticket.adult ? ticketType.adultPrice : ticketType.kidPrice;
    return(
        <View  style={{ flex: 1,}}>
                <View style={{ margin: 10, marginLeft: 20, flex: 1, justifyContent:'space-between'}}>
                    <View style={{width: 160,}}>
                        <Text style={styles.ticketTitle}>{ticketType.name}</Text>
                        <Text style={{fontSize: 12, color: colors.primary}}>{company.name}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <View style={{marginRight: 40}}>
                            <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 12, color: colors.primary}}>von : </Text>
                                <Text style={{fontSize: 14, color: colors.primary,}}>{ticket.from}</Text>
                            </View>
                            <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 12, color: colors.primary}}>über : </Text>
                                <Text style={{fontSize: 14, color: colors.primary,}}>{ticket.over}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 12, color: colors.primary}}>nach : </Text>
                                <Text style={{fontSize: 14, color: colors.primary}}>{ticket.to}</Text>
                            </View>
                            <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text style={{fontSize: 12, color: colors.primary}}>Preisstufe : </Text>
                                <Text style={{fontSize: 14, color: colors.primary}}>{ticket.priceLevel}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems:'flex-end', flexWrap: 'wrap'}}>
                        <Text style={{color: colors.primary, fontSize: 12}}>Gültig am: </Text>
                        <Text style={{color: colors.primary, fontSize: 14}}>{ticket.purchaseDate}</Text>
                    </View>
                </View>
                <View style={styles.priceLabel}>
                    <Text style={{fontSize: 12, fontWeight: 'normal'}}>PRICE : €{price}</Text>
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

export default TravelTicketTemplate;
