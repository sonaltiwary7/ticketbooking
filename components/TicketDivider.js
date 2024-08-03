import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants/theme';

export default function TicketTemplate({ categoryIconPath}){
    return(
        <View >
            <View style={{height: 20, width: '100%',}}>
                <Svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio='none'>
                <Path d="M0 0 H100 V40 Q97 50, 97 100
                H92 Q90 70 88 100 
                H84 Q82 70 80 100
                H76 Q74 70 72 100
                H68 Q66 70 64 100
                H60 Q58 70 56 100
                H52 Q50 70 48 100

                H44 Q42 70 40 100
                H36 Q34 70 32 100
                H28 Q26 70 24 100
                H20 Q18 70 16 100
                H12 Q10 70 8 100
                H3 Q3 50, 0 40 Z" fill={colors.white} />
            </Svg>
            </View>
            <View style={{height: 20, width: '100%',}}>
                <Svg width='100%' height='100%' viewBox="0 0 100 100" preserveAspectRatio='none'>
                <Path d="M0 60 Q3 50, 3 0 
                H8 Q10 30 12 0
                H16 Q18 30 20 0
                H24 Q26 30 28 0
                H32 Q34 30 36 0
                H40 Q42 30 44 0
                H48 Q50 30 52 0
                H56 Q58 30 60 0
                H64 Q66 30 68 0
                H72 Q74 30 76 0
                H80 Q82 30 84 0
                H88 Q90 30 92 0
                H97 Q97 50 100 60 V100 H0 Z" fill={colors.tertiary} />
            </Svg>
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