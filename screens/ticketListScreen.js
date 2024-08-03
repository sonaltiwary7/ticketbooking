import React, {useState} from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    Text, 
    StyleSheet, 
    Animated, 
    FlatList, 
    Modal, 
    TouchableHighlight, 
    Dimensions,
} from 'react-native';
import { Button, } from 'react-native-elements';
import { colors } from '../constants/theme';
import RenderTicket from '../components/RenderTicket';
import QRCode from 'react-native-qrcode-svg';
import { ticketFilters, setTicketFilter, closeQRCode, openQRCode } from '../redux';

const { height, } = Dimensions.get('window');

function TicketListScreen(props){
    const [xValue, setXValue] = useState(new Animated.Value(16));
    const [width, setWdith] = useState(new Animated.Value(70));

    _slideToValid = () => {
        props.filterTicket(ticketFilters.SHOW_VALID);
        Animated.parallel([
            Animated.timing(width, {
                toValue: 70,
                duration: 300,
            }).start(),
            Animated.timing(xValue, {
                toValue: 16,
                duration: 300,
            }).start()
        ]);
    }
    _slideToExpired = () => {
        props.filterTicket(ticketFilters.SHOW_EXPIRED);
        Animated.parallel([
            Animated.timing(width, {
                toValue: 90,
                duration: 300,
            }).start(),
            Animated.timing(xValue, {
                toValue: 107,
                duration: 300,
            }).start()
        ]);
    }
    _slideToAll = () => {
        props.filterTicket(ticketFilters.SHOW_ALL);
        Animated.parallel([
            Animated.timing(width, {
                toValue: 50,
                duration: 300,
            }).start(),
            Animated.timing(xValue, {
                toValue: 217,
                duration: 300,
            }).start()
        ]);
    }

    return (
        <View style={{display: 'flex', flex: 1}}>
            <View style={{backgroundColor: colors.secondary, width: '100%', height: 170}}>
            </View>
            <View style={{position: 'absolute', backgroundColor: colors.transparent, width: '100%', height: '100%',}}>
                <View style={{paddingHorizontal: 16, marginBottom: 14}}>
                    <Text style={styles.pageTitle}>Tickets</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 16,}}>
                        <Button title="Valid" 
                                buttonStyle={[styles.ticketCategoryBtn, {width: 70}]} 
                                titleStyle={{fontSize: 20, color: colors.primary,}} 
                                onPress={_slideToValid}/>
                        <Button title="Expried" 
                                buttonStyle={[styles.ticketCategoryBtn, {width: 90}]} 
                                titleStyle={{fontSize: 20, color: colors.primary}} 
                                onPress={_slideToExpired}/>
                        <Button title="All" 
                                buttonStyle={[styles.ticketCategoryBtn, {width: 50}]} 
                                titleStyle={{fontSize: 20, color: colors.primary}} 
                                onPress={_slideToAll}/>
                </View>
                <View style={{height: 3, width: '100%', backgroundColor: colors.secondaryLight,}}>
                        <Animated.View style={{poition: 'absolute', height: 3, width: width, backgroundColor: colors.primary, marginRight: 20, left: xValue }} />
                </View>
                <View style={{flex: 1}}>
                        <FlatList scrollEnabled
                                  data={props.tickets}
                                  keyExtractor= {(item, index) => `${index}-ticket`}
                                  showsVerticalScrollIndicator= {false}
                                  renderItem={({item})=> <RenderTicket ticket={item} openQRCodeModal={props.openQRCodeModal} />} />
                </View>
            </View>
            <Modal transparent={true} 
                   visible={props.qrCodeModalVisible}
                   animationType={'fade'}>
                <TouchableHighlight onPress={props.closeQRCodeModel} style={{backgroundColor:'#000000aa', flex: 1,}}>
                    <View style={{ flex: 1,}} />
                </TouchableHighlight>
                <View style={styles.qrCodeView}>
                    <QRCode value={props.qrCodeData}  size={250}/>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: colors.primary,
    },
    ticketCategoryBtn : {
        backgroundColor: colors.transparent, 
        paddingLeft: 0, 
        justifyContent:'flex-start', 
        marginRight: 20,
    },
    qrCodeView: { 
        position: 'absolute', 
        backgroundColor:'white', 
        width:'90%', 
        height: '50%', 
        alignSelf: 'center',
        justifyContent:'center', 
        alignItems:'center', 
        top: height * 0.25,
        borderRadius: 13, 
    }
});


const filterTickets = (tickets, filter) => {
    switch(filter){
        case ticketFilters.SHOW_ALL:
            return tickets;
        case ticketFilters.SHOW_VALID:
            return tickets.filter(ticket => ticket.valid == true);
        case ticketFilters.SHOW_EXPIRED:
            return tickets.filter(ticket => ticket.valid == false);
        default:
            throw new  Error('Unknown filter:' + filter)
    }
}

const mapStateToProps = state => {
    return {
        qrCodeModalVisible : state.ticket.showQRCodeModal,
        tickets: filterTickets(state.ticket.tickets, state.ticketFilter.filter),
        qrCodeData: state.ticket.qrCodeData
    }
}

const mapDisptachToProps = dispatch => {
    return{
        filterTicket: filter => dispatch(setTicketFilter(filter)),
        openQRCodeModal: data => dispatch(openQRCode(data)),
        closeQRCodeModel: () => dispatch(closeQRCode())
    }
}

export default connect(
    mapStateToProps, 
    mapDisptachToProps
)(TicketListScreen);