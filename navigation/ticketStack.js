import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../constants/theme';
import { Button, Image } from 'react-native-elements';

import TicketList from '../screens/ticketListScreen';
import TicketDetail from '../screens/ticketDetailScreen';

const TicketStackNavigator = createStackNavigator();

export default function TicketStack({navigation}){
    return(
        <TicketStackNavigator.Navigator initialRouteName='ticketList'>
            <TicketStackNavigator.Screen name='ticketList' 
                                         component={TicketList}
                                         options={{
                                             title: null,
                                             headerLeft: () => <MenuButton navigation= {navigation} />,
                                             headerStyle: {
                                               backgroundColor: colors.secondary,
                                               shadowOpacity: 0,
                                               elevation: 0,
                                             }
                                         }} />
            <TicketStackNavigator.Screen name='ticketDetail' 
                                         component={TicketDetail}
                                         options={{
                                             title: null,
                                             headerBackTitle: ' ',
                                             headerTintColor: colors.white,
                                             headerStyle: {
                                                 backgroundColor: colors.secondary,
                                                 shadowOpacity: 0,
                                                 elevation: 0,
                                             }
                                         }} />
        </TicketStackNavigator.Navigator>
    );
}

function MenuButton({navigation}){
    return(
        <Button icon={<Image source={require('../assets/menu.png')} 
                             style={{width:26, height: 17.33}} 
                             placeholderStyle={{backgroundColor: 'transparent'}} />} 
                buttonStyle={{ backgroundColor: 'transparent', marginLeft: 16, padding: 0}}
                onPress={() => navigation.openDrawer()}/>
    )
}
