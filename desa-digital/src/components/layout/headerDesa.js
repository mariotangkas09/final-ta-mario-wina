import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import ArrowIcon from '../../components/icon/arrowLeft';

export default function HeaderDesa({ navigation }) {
     const navigateToHome = () => {
          navigation.navigate('home');
     };
     return (
          <View style={styles.header}>
               <View style={styles.logo}>
                    <TouchableOpacity onPress={ navigateToHome}>
                    <ArrowIcon size={34}  color="#ffffff" />
                    </TouchableOpacity>
               </View>
               <View>
                    <Text style={styles.title}>
                         Profil Desa
                    </Text>
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     header: {
          backgroundColor: '#40A752',
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
