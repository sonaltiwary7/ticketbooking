import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants/theme';

export default function TicketTemplate({ categoryIconPath}){
    return(
        <View style={{height: 132, width: '100%'}}>
            <Svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio='none'>
                <Path d="M0 10 Q0 0, 3.5 0 H24 C24.5 8, 27.5 8, 28 0 H96.5 Q100 0, 100 10 V90 Q100 100, 96.5 100 H28 C27.5 92, 24.5 92, 24 100 H3.5 Q0 100, 0 90Z
                M26 10C25 12, 25 16, 26 18C27 16, 27 12, 26 10Z
                M26 22C25 24, 25 28, 26 30C27 28, 27 24, 26 22Z
                M26 34C25 36, 25 40, 26 42C27 40, 27 36, 26 34Z
                M26 46C25 48, 25 52, 26 54C27 52, 27 48, 26 46Z
                M26 58C25 60, 25 64, 26 66C27 64, 27 60, 26 58Z
                M26 70C25 72, 25 76, 26 78C27 76, 27 72, 26 70Z
                M26 82C25 84, 25 88, 26 90C27 88, 27 84, 26 82Z"  fill={colors.white} />
                <Path d="M26 6 Q27.5 5.5, 28 0 H96.5 Q100 0, 100 10 V90 Q100 100, 96.5 100 H28 Q27.5 94.4, 26 94
                V26 90C27 88, 27 84, 26 82
                V26 78C27 76, 27 72, 26 70
                V26 66C27 64, 27 60, 26 58
                V26 54C27 52, 27 48, 26 46
                V26 42C27 40, 27 36, 26 34
                V26 30C27 28, 27 24, 26 22
                V26 18C27 16, 27 12, 26 10
                Z"  fill={colors.tertiary} />
            </Svg>
            <View style={{position: 'absolute', bottom: 0, right: 0,}}>
                <Image source={categoryIconPath} style={{maxWidth: 200, resizeMode:'contain',}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});