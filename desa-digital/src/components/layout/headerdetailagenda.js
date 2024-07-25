import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import ArrowIcon from '../../components/icon/arrowLeft';

export default function DetailAgenda({ navigation }) {
     const goHome = () => {
          navigation.navigate('agenda');
     };
     return (
          <View style={styles.header}>
               <View style={styles.logo}>
                    <TouchableOpacity onPress={goHome}>
                    <ArrowIcon size={34}  color="#ffffff" />
                    </TouchableOpacity>
               </View>
               <View>
                    <Text style={styles.title}>
                         Detail Agenda Desa
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
          justifyContent: 'center'

     },
     title: {
          fontSize: 20,
          color: '#ffffff',

     },
     logo: {
          left: 0,
          position: 'absolute',
          paddingLeft: 20,
          justifyContent: 'center'
     }

})
