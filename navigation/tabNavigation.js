import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../constants/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

function page1(){
    return(
        <View style={{justifyContent: 'center', alignItems:'center'}}>
            <Text>Page 1</Text>
        </View>
    );
}

function page2(){
    return(
        <View style={{justifyContent: 'center', alignItems:'center'}}>
            <Text>Page 2</Text>
        </View>
    );
}

export default function TabNavigation(){
    return(
        <TopTab.Navigator initialRouteName="page1">
            <TopTab.Screen name="page1" component={page1} />
            <TopTab.Screen name="page2" component={page2} />
        </TopTab.Navigator>
    );
}