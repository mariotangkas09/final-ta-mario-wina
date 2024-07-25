import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import HeaderWisata from '../../components/layout/headerwisata'
import { FontAwesome } from '@expo/vector-icons'
export default function Wisata({ navigation }) {


     const cardWisata = () => {
          const boxCard = [];
          for (let i = 0; i < 7; i++) {
               boxCard.push(
                    <View style={styles.cardContainer} key={i}>
                         <View style={styles.cardContent}>
                              <Image source={require('../../../assets/wisata/wisata.png')} />
                              <View style={styles.boxUmkm}>
                                   <Text style={styles.titleCard}>
                                        Tomok Keren
                                   </Text>
                                   <View style={styles.infoCard}>
                                        <FontAwesome name='user' color='grey' size={15} />
                                        <Text style={styles.info}>
                                             Admin Desa
                                        </Text>
                                   </View>
                                   <View style={styles.infoCard}>
                                        <FontAwesome name='clock-o' color='grey' size={15} />
                                        <Text style={styles.info}>
                                             12.00 - 17.00
                                        </Text>
                                   </View>
                                   <View style={styles.infoCard}>
                                        <FontAwesome name='eye' color='grey' size={15} />
                                        <Text style={styles.info}>
                                             12.000
                                        </Text>
                                   </View>
                              </View>
                         </View>

                    </View>
               );
          }
          return boxCard;
     };
     return (
          <View style={{ backgroundColor: '#ffffff' }}>
               <HeaderWisata navigation={navigation} />
               <ScrollView horizontal={true}>
                    <View style={styles.menuContainer}>
                         <TouchableOpacity style={styles.menuText}>
                              <Text style={styles.Text}>
                                   Berita Wisata
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.menuText}>
                              <Text style={styles.Text}>
                                   Potensi Wisata
                              </Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.menuText}>
                              <Text style={styles.Text}>
                                   Budaya Lokal
                              </Text>
                         </TouchableOpacity>
                    </View>
               </ScrollView>
               <View style={styles.boxSearch}>
                    <TextInput placeholder='Cari' style={styles.textInput} />
                    <FontAwesome name='search' size={18} color='grey' style={styles.search} />
               </View>
               <ScrollView style={styles.scrollView}>
                    {cardWisata()}
               </ScrollView>
          </View>
     )
}

const styles = StyleSheet.create({
     menuContainer: {
          flexDirection: 'row',
          backgroundColor: '#40A752',
          height: 40
     },
     menuText: {
          marginHorizontal: 35
     },
     Text: {
          color: '#ffffff',
          fontSize: 14,

     },
     search: {
          position: 'absolute',
          right: 15,
          top: 10
     },
     textInput: {
          borderColor: '#B3B9C6',
          borderWidth: 1,
          height: 40,
          borderRadius: 8,
          width: '100%',
          padding: 8
     },
     boxSearch: {
          flexDirection: 'row',
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 25
     },
     cardContainer: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
          marginTop: 10,
          shadowColor: '#000',
          marginLeft: 2,
          marginRight: 2,
          shadowOffset: {
               width: 2,
               height: 1
          },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 3,
          marginLeft: 20,
          marginRight: 20
     },
     boxUmkm: {
          marginLeft: 10
     },
     cardContent: {
          flexDirection: 'row',
          padding: 10
     },
     titleCard: {
          fontSize: 14,
          color: '#40A752',
          fontWeight: '900'
     },
     infoCard: {
          flexDirection: "row",
          alignItems: 'center',
          marginTop: 10
     },
     info: {
          color: 'grey',
          fontSize: 10,
          marginLeft: 10
     },
     scrollView: {
          height: '100%'
     }
})