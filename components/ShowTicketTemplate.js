import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';
import { companies } from '../constants/mocks';
import { colors } from '../constants/theme';

const ShowTicketTemplate = ({ticket}) => {
    const company = companies.find(company => company.id == ticket.companyId);
    const show = company.shows.find(show => show.id == ticket.showId)
    return(
        <View style={{flex: 1}} >
            <View style={{ margin: 10, marginLeft: 20, flex: 1, justifyContent:'space-between'}}>
                <View style={{width: 160,}}>
                    <Text style={styles.ticketTitle}>{company.name}</Text>
                </View>
                <View style={{display:'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                    <Text style={styles.ticketData}>show : </Text>
                    <Text style={{fontSize: 14, color: colors.primary}}>{show.name.toUpperCase()}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row',}}> 
                    <View style={{marginRight: 30,}}>
                        <Text style={styles.ticketData}>theater</Text>
                        <Text style={styles.ticketData}>{ticket.theater}</Text>
                    </View>
                    <View style={{marginRight: 20,}}>
                        <Text style={styles.ticketData}>seat</Text>
                        <Text style={styles.ticketData}>{ticket.row}/{ticket.column}</Text>
                    </View>
                    <View style={{marginLeft: 'auto'}}>
                        <Text style={styles.ticketData}>date : {show.date}</Text>
                        <Text style={styles.ticketData}>time : {show.time}</Text>
                    </View>
                </View>
                <View style={{}}>
                    <Text style={styles.ticketData}>{company.address}</Text>
                </View>
            </View>
            <View style={styles.priceLabel}>
                <Text style={{fontSize: 12, fontWeight: 'normal'}}>PRICE : €{show.price}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    ticketTitle: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: 'bold'
    },
    ticketData: {
        fontSize: 12, 
        color: colors.primary,
    },
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
});

export default ShowTicketTemplate;
