import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import MapIcon from '../../../components/icon/map';
import JamIcon from '../../../components/icon/jam';
import HeaderIbadah from '../../../components/layout/headerIbadah';
import { getIbdah } from '../../../services/desaDigital.services';

export default function Ibadah({ navigation }) {
     const [ibadah, setIbadah] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchIbadah = async () => {
               try {
                    const response = await getIbdah();
                    if (response.code === 200) {
                         setIbadah(response.data || []);
                    } else {
                         console.error('Error fetching fasilitas:', response.message);
                    }
               } catch (error) {
                    console.error('Error fetching fasilitas:', error);
               } finally {
                    setLoading(false);
               }
          };
          fetchIbadah();
     }, []);

     const goDetail = (id) => {
          navigation.navigate('detail-ibadah', { id });
     };

     const renderProduct = ({ item }) => (
          <TouchableOpacity style={style.bg} onPress={() => goDetail(item.id)}>
               <Image source={{ uri: item.gambar }} style={style.img} />
               <Text style={style.title}>{item.namaRumahIbadah}</Text>
               <View style={style.location}>
                    <JamIcon />
                    <Text style={style.txtLocation}>{item.jadwalIbadah}</Text>
               </View>
               <View style={style.location}>
                    <MapIcon />
                    <Text style={style.txtLocation}>{item.lokasi}</Text>
               </View>
               <TouchableOpacity style={style.link} onPress={() => navigation.navigate('detail-ibadah', { id: item.id })}>
                    <Text style={{ color: '#0369A1', margin: 10, textAlign: 'right' }}>Selengkapnya</Text>
               </TouchableOpacity>
          </TouchableOpacity>
     );

     if (loading) {
          return (
               <View style={style.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
               </View>
          );
     }

     return (
          <View style={style.container}>
               <HeaderIbadah navigation={navigation} />
               <View style={style.content}>
                    <FlatList
                         data={ibadah}
                         renderItem={renderProduct}
                         keyExtractor={(item) => item.id.toString()}
                         numColumns={2}
                         contentContainerStyle={style.listContainer}
                    />
               </View>
          </View>
     );
}

const style = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#ffffff',
     },
     content: {
          margin: 10,
          flexDirection: 'column',
          justifyContent: 'center',
     },
     listContainer: {
          justifyContent: 'center',
     },
     title: {
          fontSize: 14,
          margin: 3,
          fontWeight: '800'
     },
     location: {
          flexDirection: 'row',
          alignItems: 'center',
          margin: 3,
     },
     txtLocation: {
          color: '#010101',
          marginLeft: 5,
     },
     bg: {
          flex: 1,
          margin: 5,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          elevation: 2,
     },
     img: {
          width: '100%',
          height: 136,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
     },
     loadingContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
});
