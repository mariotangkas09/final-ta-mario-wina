import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function HeaderFasilitas() {
     return (
          <View style={styles.header}>
                 <View style={styles.logo}>
                    <Image source={require("../../../assets/logo.png")} />
               </View>
               <View >
                   <Text style={styles.desa}>
                   Fasilitas
                   </Text>
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     header: {
          backgroundColor: '#0369A1',
          flexDirection: 'row',
          paddingVertical: 20,
          alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 20

     },
     desa:{
          display:'flex',
          marginLeft:80,
          color:'#ffffff',
          fontSize:20,
          textAlign:'center',
          width:'100%'
     }
     


})
