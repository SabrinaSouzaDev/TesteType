import React from 'react';

import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors, parameters} from "../global/styles"
import {Icon} from 'react-native-elements'

export default function Header(){
    
    
    return(

        <View style={styles.header}>
          <Icon
          size={28} 
          onPress = {() => {}}
          nome = "arrow-left"
          type='material-community'
          color= {colors.headerTextColor}
          >
            <View >
                <Text style={styles.headerText}>Ipheira</Text>
            </View>

          </Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
    },

    headerText: {
        color:colors.headerText,
        fontSize:22,
        fontWeight:"bold"
    }
});