import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import HeaderBerita from "../../components/layout/headernerita";
import { getBerita } from "../../services/desaDigital.services";
export default function Berita({ navigation }) {
     const [berita, setBerita] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');
     useEffect(() => {
          const fetchBerita = async () => {
               try {
                    const allBerita = await getBerita();
                    
                    setBerita(allBerita);
               } catch (error) {
                    console.error('Error fetching user list:', error);
               }
          }
          fetchBerita();
     }, [])

     const formatDate = (tgl) => {
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(tgl).toLocaleDateString('id-ID', options);
     };

     const cleanHTMLTags = (html) => {
          const cleanText = html.replace(/<[^>]+>/g, '');
          return cleanText;
     };

     const truncateText = (text, maxLength) => {
          if (text.length <= maxLength) return text;
          return text.substr(0, maxLength) + '...';
     };
     const filteredBerita = berita.filter(item =>
          item.judul_berita.toLowerCase().includes(searchQuery.toLowerCase())
     );
     return (
          <View style={styles.container}>
               <HeaderBerita navigation={navigation} />
               <View style={styles.content}>
                    <View style={styles.boxSearch}>
                         <TextInput placeholder='Cari' style={styles.textInput}   onChangeText={text => setSearchQuery(text)}/>
                         <FontAwesome name='search' size={18} color='grey' style={styles.search} />
                    </View>
                    <ScrollView >
                         <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',marginBottom:10,alignItems:'center' }}>
                         {filteredBerita.map(beritaData => (
                                        <View style={styles.cardNews} key={beritaData.id}>
                                             <View style={{ paddingLeft: 16, paddingTop: 7, paddingBottom: 7 }}>
                                             <Image source={{ uri: `https://api-admin.desasosordolok.id/images/cover/${beritaData.cover}` }} style={{ width: 95, height: 95, borderRadius: 5 }} />
                                             </View>
                                             <View style={styles.contentNews}>
                                                  <Text style={styles.judul}>{beritaData.judul_berita}</Text>
                                                  <Text style={styles.waktu}>{formatDate(beritaData.tgl_publikasi)}</Text>
                                                  <Text style={styles.deskripsi}>{truncateText(cleanHTMLTags(beritaData.isi_berita), 32)}</Text>
                                                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: 195 }}>
                                                  <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('detail-berita', { id: beritaData.id })}>
                                                            <Text style={styles.btnText}>Selengkapnya</Text>
                                                       </TouchableOpacity>
                                                  </View>
                                             </View>
                                        </View>
                                   ))}
                         </View>
                    </ScrollView>
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff'
     },
     content: {
          flex: 1,
          marginBottom: 10,
          display:'flex',
          justifyContent:'center',
          marginLeft: 15,
          marginRight: 15
     },
     textInput: {
          borderColor: '#111111',
          borderWidth: 0.5,
          height: 40,
          borderRadius: 30,
          width: '100%',
          padding: 8,
          paddingLeft:20
     },
     boxSearch: {
          flexDirection: 'row',
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 15, marginBottom: 5
     },
     search: {
          position: 'absolute',
          right: 25,
          top: 10
     },
     judul: {
          fontSize: 12,
          fontWeight: '800',
     },
     waktu: {
          fontSize: 9,
          color: 'rgba(103, 106, 108, 0.7)',
     },
     deskripsi: {
          fontSize: 12,
          width: 195
     },
     btn: {
          backgroundColor: '#0890EA',
          width: 100,
          height: 25,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
     },
     btnText: {
          color: '#ffffff',
          fontSize: 12,
     },
     cardNews: {
          width: 325,

          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          elevation: 2,
          marginTop: 15,
          borderRadius: 5
     },
     contentNews: {
          marginLeft: 5,
          width: 195,
          paddingRight: 16,
          paddingTop: 7,
          paddingBottom: 7
     }
})
