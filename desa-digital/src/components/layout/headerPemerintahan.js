import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import ArrowIcon from '../../components/icon/arrowLeft';

export default function HeaderPemerintahan({ navigation }) {
     const navigateHome = () => {
          navigation.navigate('profile');
     };
     return (
          <View style={styles.header}>
               <View style={styles.logo}>
                    <TouchableOpacity onPress={navigateHome}>
                    <ArrowIcon size={34}  color="#ffffff" />
                    </TouchableOpacity>
               </View>
               <View>
                    <Text style={styles.title}>
                         Struktur Pemerintahan
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
