import React from 'react';
import { 
    createDrawerNavigator,
    DrawerItemList,
    DrawerItem, } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import TicketStack from '../navigation/ticketStack';
import { SimpleLineIcons, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { colors } from '../constants/theme';
import { Image } from 'react-native-elements';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerNavigator () {
    return(
        <DrawerNavigation.Navigator initialRouteName='ticketStack' 
                                    drawerContent={props => CustomDrawerContent(props)}
                                    drawerContentOptions={{
                                        activeTintColor: colors.secondary,
                                        activeBackgroundColor: colors.transparent,
                                        labelStyle: {
                                            fontSize: 20,
                                            fontWeight: '400'}
                                      }}
                                    drawerStyle= {{
                                        width: '75%'
                                    }}>
            <DrawerNavigation.Screen name="ticketStack"
                                     options={{
                                         title: 'Home',
                                         drawerIcon: () => <Entypo name="home" size={19} color={colors.tertiary} />,
                                     }} 
                              component={TicketStack} />
        </DrawerNavigation.Navigator>
    )
}

function CustomDrawerContent(props) {
    return (
      <View {...props} style={{}}>
        <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: colors.secondary, height: 286, paddingTop: 50,}}>
            <Image source={require('../assets/logo.png')} style={{height: 120, width: 120,}} />
        </View>
        <View style={{paddingLeft: 20, paddingTop: 30,}}>
            <DrawerItemList {...props} />
            <DrawerItem
            label="Buy Tickets"
            labelStyle= {{ 
                fontSize: 20,
                color: colors.tertiary,
                fontWeight: '300'
            }}
            icon = {() => <Entypo name="ticket" size={19} color={colors.tertiary} />}
            onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
            label="About Us"
            labelStyle= {{ 
                fontSize: 20,
                color: colors.tertiary,
                fontWeight: '300'
            }}
            icon = {() => <SimpleLineIcons name="info" size={19} color={colors.tertiary} />}
            activeTintColor = {colors.secondary}
            onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
            label="Setting"
            labelStyle= {{ 
                fontSize: 20,
                color: colors.tertiary,
                fontWeight: '300'
            }}
            icon = {() => <Ionicons name="md-settings" size={19} color={colors.tertiary} />}
            onPress={() => props.navigation.toggleDrawer()}
            />
            <DrawerItem
            label="Logout"
            labelStyle= {{ 
                fontSize: 20,
                color: colors.tertiary,
                fontWeight: '300'
            }}
            icon = {() => <AntDesign name="logout" size={19} color={colors.tertiary} />}
            onPress={() => props.navigation.navigate('login')}
            />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    companyName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.secondary,
        paddingLeft: 35,
        paddingBottom: 20
    }
});