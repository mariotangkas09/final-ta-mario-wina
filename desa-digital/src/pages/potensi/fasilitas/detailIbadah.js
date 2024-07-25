import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import HeaderDetailWisata from '../../../components/layout/headerDetailWisata';
import MapIcon from '../../../components/icon/map';
import JamIcon from '../../../components/icon/jam';
import { getIbadahDetail } from '../../../services/desaDigital.services';
import HeaderDetailIbadah from '../../../components/layout/headerDetailIbadah';

export default function DetailIbadah({ navigation, route }) {
  const { id } = route.params;
  const [ibadahDetail, setIbadahDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     const fetchDetail = async () => {
       try {
         const detail = await getIbadahDetail(id);
         console.log(detail); 
         setIbadahDetail(detail.data[0]); 
       } catch (error) {
         console.error('Error fetching detail:', error);
       } finally {
         setLoading(false);
       }
     };
     fetchDetail();
   }, [id]);
   
   

  if (loading) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!ibadahDetail) {
    return (
      <View style={style.container}>
        <Text>Data tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <HeaderDetailIbadah navigation={navigation} />
      <Image 
        source={ibadahDetail.gambar ? { uri: ibadahDetail.gambar } : ''} 
        style={style.img} 
      />
      <View style={style.content}>
        <View style={style.contentType}>
          <Text style={style.title}>{ibadahDetail.namaRumahIbadah}</Text>
          <View style={style.categoriBg}>
            <Text style={style.category}>Rumah Ibadah</Text>
          </View>
          <View style={style.locationBox}>
            <MapIcon size={21} />
            <Text style={style.txtLocation}>{ibadahDetail.lokasi}</Text>
          </View>
          <View style={style.timeBox}>
            <JamIcon size={21} />
            <Text style={style.txtTime}>{ibadahDetail.jadwalIbadah}</Text>
          </View>
          <Text style={style.deskripsi}>{ibadahDetail.deskripsi}</Text>
        </View>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 203,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  categoriBg: {
    backgroundColor: "#03A9F4",
    width: 110,
    borderRadius: 3,
    marginTop: 10,
  },
  category: {
    color: '#ffffff',
    padding: 3,
    textAlign: 'center',
  },
  locationBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  txtLocation: {
    fontSize: 11,
    color: '#333333',
    fontWeight: '500',
    marginLeft: 5,
  },
  timeBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  txtTime: {
    fontSize: 11,
    color: '#333333',
    fontWeight: '500',
    marginLeft: 5,
  },
  deskripsi: {
    fontSize: 12,
    textAlign: 'justify',
    marginTop: 10,
  },
});
