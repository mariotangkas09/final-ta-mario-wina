import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeaderUMKM from '../../components/layout/headerumkm';

export default function UMKM({navigation}) {
     const [searchUmkm, setSearchUmkm] = useState('');
     const [btnKlick, setBtnKlick] = useState(false);

     const handleKlick = () => {
          setBtnKlick(!btnKlick);
     };

     const cardUmkm = () => {
          const boxCard = [];
          for (let i = 0; i < 7; i++) {
               boxCard.push(
                    <View style={styles.cardContainer} key={i}>
                         <View style={styles.cardContent}>
                              <Image source={require('../../../assets/umkm/kopi.png')} />
                              <View style={styles.boxUmkm}>
                                   <Text style={styles.titleCard}>
                                        Kopi
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
               <HeaderUMKM navigation={navigation}/>
               <View style={styles.content}>
                    <View style={styles.contentUmkm}>
                         <View style={styles.boxSearch}>
                              <TextInput placeholder='Cari' style={styles.textInput} value={searchUmkm} onChangeText={text => setSearchUmkm(text)} />
                              <FontAwesome name='search' size={18} color='grey' style={styles.search} />
                         </View>
                         <ScrollView horizontal={true} style={[styles.scrollView, { paddingBottom: 10 }]} >
                              <View style={styles.boxBtn}>
                                   <TouchableOpacity style={[styles.btnSemua, btnKlick && { backgroundColor: '#40A752' }]} onPress={handleKlick}>
                                        <Text style={[styles.txtBtn, btnKlick && { color: '#ffffff' }]}>
                                             Semua
                                        </Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={[styles.btnUmkm]}>
                                        <Text style={styles.txtBtn}>
                                             Pangan
                                        </Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.btnUmkm}>
                                        <Text style={styles.txtBtn}>
                                             Kerajinan Tangan
                                        </Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity style={styles.btnUmkm}>
                                        <Text style={styles.txtBtn}>
                                             Pertanian
                                        </Text>
                                   </TouchableOpacity>
                              </View>
                         </ScrollView>
                         <ScrollView style={styles.scrollView}>
                              {cardUmkm()}
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
          marginBottom: 10
     },
     search: {
          position: 'absolute',
          right: 15,
          top: 10
     },
     btnUmkm: {
          borderColor: '#40A752',
          borderWidth: 1,
          height: 35,
          marginHorizontal: 10,
          borderRadius: 8
     },
     boxBtn: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 20
     },
     txtBtn: {
          color: '#40A752',
          textAlign: 'center',
          paddingVertical: 5,
          paddingHorizontal: 10
     },
     btnSemua: {
          borderColor: '#40A752',
          borderWidth: 1,
          borderRadius: 8,
          height: 35
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
          marginBottom: 20
     },

});
