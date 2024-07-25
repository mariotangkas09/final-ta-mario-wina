import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeaderKegiatan from '../../components/layout/headerkegiatan';
export default function KegiatanDesa({ navigation }) {
     const [searchKegiatan, setSearchKegiatan] = useState('');

     const cardKegitan = () => {
          const boxCard = [];
          for (let i = 0; i < 7; i++) {
               boxCard.push(
                    <View style={styles.cardContainer} key={i}>
                         <View style={styles.cardContent}>
                              <Image source={require('../../../assets/kegiatan/gtr.png')} />
                              <View style={styles.boxUmkm}>
                                   <Text style={styles.titleCard}>
                                        Gotong-royong
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
                              </View>
                         </View>

                    </View>
               );
          }
          return boxCard;
     };

     return (
          <View style={styles.container}>
               <HeaderKegiatan navigation={navigation} />
               <View style={styles.content}>
                    <View style={styles.contentUmkm}>
                         <View style={styles.boxSearch}>
                              <TextInput placeholder='Cari' style={styles.textInput} value={searchKegiatan} onChangeText={text => setSearchKegiatan(text)} />
                              <FontAwesome name='search' size={18} color='grey' style={styles.search} />
                         </View>

                         <ScrollView style={styles.scrollView}>
                              {cardKegitan()}
                         </ScrollView>

                    </View>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#ffffff'
     },
     content: {
          flex: 1,
          padding: 20
     },
     textInput: {
          borderColor: '#111111',
          borderWidth: 1,
          height: 40,
          borderRadius: 8,
          width: '100%',
          padding: 8
     },
     contentUmkm: {
          flex: 1
     },
     boxSearch: {
          flexDirection: 'row',
          marginBottom: 30
     },
     search: {
          position: 'absolute',
          right: 15,
          top: 10
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
     },

     cardContent: {
          flexDirection: 'row',
          padding: 10
     },
     titleCard: {
          fontSize: 14,
          color: 'grey',
          fontWeight: '600'
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
          marginBottom: 20
     },
     boxUmkm: {
          marginLeft: 10
     }
});
