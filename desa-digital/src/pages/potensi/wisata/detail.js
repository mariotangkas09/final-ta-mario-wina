import React, { useEffect, useState } from 'react';
import HeaderDetailWisata from '../../../components/layout/headerDetailWisata';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import MapIcon from '../../../components/icon/map';
import JamIcon from '../../../components/icon/jam';
import { getWisataById } from '../../../services/desaDigital.services';

export default function DetailWisata({ navigation, route }) {
     const { id } = route.params;
     const [dataWisata, setDataWisata] = useState(null);

     useEffect(() => {
          const fetchWisata = async () => {
               try {
                    const detail = await getWisataById(id);
                    if (detail && detail.data && detail.data.length > 0) {
                         setDataWisata(detail.data[0]);
                    } else {
                         console.error('Error fetching wisata: Data not found in response');
                    }
               } catch (error) {
                    console.error('Error fetching wisata:', error);
               }
          };
          fetchWisata();
     }, [id]);
     if (!dataWisata) {
          return <Text>Loading...</Text>;
     }
     console.log('Data wisata:', dataWisata);
     return (
          <View style={style.container}>
               <HeaderDetailWisata navigation={navigation} /> 
               <ScrollView>
                    <Image source={{ uri: dataWisata.gambar }} style={style.img} />
               <View style={style.content}>
                   
                    <View style={style.contentType}>
                         <Text style={style.title}>
                              {dataWisata && dataWisata[0] && (
                                   <Text style={style.title}>
                                        {dataWisata[0].namaObjekWisata}
                                   </Text>
                              )}
                         </Text>

                         <View style={style.categoriBg}>
                              <Text style={style.category}>
                                   {dataWisata.kategori}
                              </Text>
                         </View>
                         <View style={style.locationBox}>
                              <MapIcon size={21} />
                              <Text style={style.txtLocation}>
                                   {dataWisata.lokasi}
                              </Text>
                         </View>
                         <View style={style.timeBox}>
                              <JamIcon size={21} />
                              <Text style={style.txtTime}>
                                   {dataWisata.waktuOperasi} - Buka : {dataWisata.jamBuka} - {dataWisata.jamTutup} WIB
                              </Text>
                         </View>
                         <Text style={style.deskripsi}>
                              {dataWisata.deskripsi}
                         </Text>
                    </View>
               </View>      
               </ScrollView>
              
          </View>

     )
}

const style = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#ffffff'

     },
     content: {
          margin: 10,
          flexDirection: 'column',
          justifyContent: 'center',
     },
     img: {
          width: 'full',
          height: 203,
     },
     title: {
          fontSize: 17,
          fontWeight: 'bold'
     },
     categoriBg: {
          backgroundColor: "#F98125",
          width: 100,
          borderRadius: 3,
          marginTop: 10
     },
     category: {
          color: '#ffffff',
          padding: 3,
          textAlign: 'center'
     },
     locationBox: {
          display: 'flex',
          flexDirection: 'row',
          marginTop: 10
     },
     txtLocation: {
          fontSize: 11,
          color: '#333333',
          fontWeight: '500',
          marginLeft: 5
     },
     timeBox: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
     },
     txtTime: {
          fontSize: 11,
          color: '#333333',
          fontWeight: '500',
          marginLeft: 5
     },
     deskripsi: {
          fontSize: 12,
          textAlign: 'justify',
          marginTop: 10
     }

})
