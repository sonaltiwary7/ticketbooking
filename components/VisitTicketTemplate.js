import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Dimensions,
} from 'react-native';
import { companies } from '../constants/mocks';
import { colors } from '../constants/theme';

const VisitTicketTemplate = ({ticket}) => {
    const company = companies.find(company => company.id == ticket.companyId);
    const totalPrice = ticket.kidNo * company.kidPrice + ticket.adultNo * company.adultPrice;
    return(
        <View  style={{ flex: 1,}}>
            <View style={{ margin: 10, marginLeft: 20, flex: 1, justifyContent:'space-between'}}>
                <View style={{width: 160,}}>
                    <Text style={styles.ticketTitle}>{company.name}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', }}> 
                    <View style={{marginRight: 30,}}>
                        <Text style={{fontSize: 12, color: colors.primary}}>opening hour</Text>
                        <Text style={{fontSize: 12, color: colors.primary}}>{company.openAt} - {company.closeAt}</Text>
                    </View>
                    <View style={{marginRight: 20,}}>
                        <Text style={{fontSize: 12, color: colors.primary}}>last entry</Text>
                        <Text style={{fontSize: 12, color: colors.primary}}>{company.lastEntry}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{color: colors.primary, fontSize: 12}}>{company.address}</Text>
                </View>
            </View>
            <View style={styles.priceLabel}>
                <Text style={{fontSize: 12, fontWeight: 'normal'}}>PRICE : €{totalPrice}</Text>
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
export default VisitTicketTemplate;
