import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/loginScreen';
import DrawerNavigator from './drawer';


const Stack = createStackNavigator();

export default function LoginStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" 
                              component={Login}
                              options={{
                                  headerShown: false,
                                  title: null
                              }} />
                <Stack.Screen name='drawerNavigator' 
                              component={DrawerNavigator}
                              options={{
                                  headerShown: false,
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}