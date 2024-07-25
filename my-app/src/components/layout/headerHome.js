import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function HeaderHome() {
     return (
          <View style={styles.header}>
               <View style={styles.logo}>
                    <Image source={require("../../../assets/logo.png")} />
               </View>
               <View>
               <Text style={styles.title}>
                    DESA DIGITAL
               </Text>  
               </View>
               
          </View>
     )
}

const styles = StyleSheet.create({
     header: {
          backgroundColor: '#40A752',
          flexDirection: 'row',
          paddingVertical: 40,
          alignItems: 'center',
          justifyContent: 'center'

     },
     title: {
          fontSize: 20,
          color: '#ffffff',

     },
     logo: {
          left: 0,
          position:'absolute',
          paddingLeft:20,
          justifyContent:'center'
          }

})
