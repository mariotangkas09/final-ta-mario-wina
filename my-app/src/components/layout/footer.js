import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer({navigation}) {
     const GoHome = () =>{
          navigation.navigate('home')
     }
     const GoProfilDesa = () =>{
          navigation.navigate('profildesa')
     }
     
     return (
          <View style={styles.Container}>
               <TouchableOpacity onPress={GoProfilDesa}>
                    <View style={styles.menuContainer}>

                         <FontAwesome name="building-o" size={24} color="#B3B9C6" />
                         <Text style={styles.captionMenu}>
                              Profil Desa
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoHome}>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='home' size={24} color='#B3B9C6' />
                         <Text style={styles.captionMenu}>
                              Beranda
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='list' size={24} color="#B3B9C6" />
                         <Text style={styles.captionMenu}>
                              Permohonan
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='user' size={24} color="#B3B9C6" />
                         <Text style={styles.captionMenu}>
                              Profil
                         </Text>
                    </View>
               </TouchableOpacity>

          </View>
     );
}

const styles = StyleSheet.create({
     Container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#ffffff'
     },
     menuContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10
     },
     captionMenu: {
          fontSize: 11,
          color: '#667085'
     }
});
