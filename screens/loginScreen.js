import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView } from 'react-native';  
import { Button, Image, Input } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../constants/theme';

function LoginScreen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image source={require('../assets/logo.png')}
                    style={{ width: 200, height: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                    placeholderStyle={{backgroundColor:'transparent'}} />
            </View>
            <KeyboardAvoidingView style={styles.formView} behavior='padding'>
                <Input placeholder='Username' 
                       placeholderTextColor={colors.primary}
                       inputContainerStyle={{borderBottomColor: colors.tertiary}}
                       leftIconContainerStyle={{marginLeft: 0, marginRight: 10,}}
                       inputStyle={{color: colors.primary}}
                       leftIcon={<FontAwesome name="envelope" size={18} color={colors.tertiary} />} />
                <View style={styles.formControl}>
                    <Input placeholder='Password' 
                        placeholderTextColor={colors.primary}
                        inputContainerStyle={{borderBottomColor: colors.tertiary}}
                        leftIconContainerStyle={{marginLeft: 0, marginRight: 10, }}
                        inputStyle={{color: colors.primary}}
                        leftIcon={<Ionicons name="md-lock" size={26} color={colors.tertiary} />} />
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>
                <Button title='LOG IN'
                        titleStyle={{fontSize: 17,}}
                        buttonStyle={styles.loginBtn}  
                        onPress={() => navigation.navigate('drawerNavigator')}/>
                <Text style={styles.signupText}>Don't have an account? Sign up</Text>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 34,
        backgroundColor: colors.secondary,
    },
    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formView: {
        flex: 1.2,
    },
    formControl: {
        paddingVertical: 30,
    },
    loginBtn: {
        backgroundColor: colors.tertiary, 
        marginTop: 20, 
        height: 45, 
        borderRadius: 10
    },
    forgotPasswordText: {
        marginVertical: 10, 
        marginHorizontal:8, 
        alignSelf:'flex-end', 
        color: colors.primary
    },
    signupText: {
        alignSelf: 'center', 
        color: colors.primary, 
        marginTop: 20
    },
});

export default LoginScreen;