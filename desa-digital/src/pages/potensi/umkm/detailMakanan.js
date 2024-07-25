import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import HeaderDetailMakanan from '../../../components/layout/headerDetailMakanan';
import { getUmkmDetail } from '../../../services/desaDigital.services';
import MapIcon from '../../../components/icon/map';
import WaIcon from '../../../components/icon/waIcon';
import makanan from '../../../../assets/umkm/makanan/makanan.png';  // Pastikan path ini benar

export default function DetailUmkm({ route, navigation }) {
  const { id } = route.params;
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getUmkmDetail(id);
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setDetail(response.data[0]);  // Ambil elemen pertama dari array data
        } else {
          console.error('Error fetching umkm detail:', response.message);
        }
      } catch (error) {
        console.error('Error fetching umkm detail:', error);
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

  if (!detail) {
    return (
      <View style={style.loadingContainer}>
        <Text>Error loading detail</Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <HeaderDetailMakanan navigation={navigation} />
      <Image source={{ uri: detail.gambar || makanan }} style={style.img} />
      <View style={style.content}>
        <View style={style.contentType}>
          <Text style={style.title}>
            IDR {detail.harga}
          </Text>
          <Text style={{ fontWeight: '800',marginBottom:10 }}>{detail.namaProduk}</Text>
          <Text style={{ fontWeight: '600' }}>Deskripsi</Text>
          <Text style={style.deskripsi}>
            {detail.deskripsi}
          </Text>
          <View style={style.contact}>
            <WaIcon />
            <Text style={{ marginLeft: 5, color: '#ffffff' }}>
          {detail.kontak}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
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
    width: '100%',
    height: 203,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#E13A3A'
  },
  categoriBg: {
    backgroundColor: "#03A9F4",
    width: 110,
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
    marginTop: 10,
    alignItems: 'center'
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
  deskripsi: {
    fontSize: 12,
    textAlign: 'justify',
    marginTop: 5
  },
  contact: {
    backgroundColor: '#4AC959',
    display: 'flex',
    flexDirection: 'row',
    padding: 6,
    borderRadius: 7,
    width: 139,
    marginTop:10
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
