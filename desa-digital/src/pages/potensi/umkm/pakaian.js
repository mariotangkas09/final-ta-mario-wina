import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import HeaderPakaian from '../../../components/layout/headerPakaian';
import MapIcon from '../../../components/icon/map';
import { getUmkmPakaian } from '../../../services/desaDigital.services';
import PhoneIcon from '../../../components/icon/phone';
import PersonChekIcon from '../../../components/icon/checkperson';
const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};

export default function UmkmPakaian({ navigation }) {
  const [pakaian, setPakaian] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPakaian = async () => {
      try {
        const response = await getUmkmPakaian();
        if (response.code === 200) {
          setPakaian(response.data || []);
        } else {
          console.error('Error fetching umkm:', response.message);
        }
      } catch (error) {
        console.error('Error fetching umkm:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPakaian();
  }, []);

  const goToDetail = (id) => {
    navigation.navigate('detail-umkm', { id });
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={style.bg} onPress={() => goToDetail(item.id)}>
      <Image source={{ uri: item.gambar || '' }} style={style.img} />
      <Text style={style.title}>{item.namaProduk}</Text>
      <Text style={style.price}>{formatPrice(item.harga)}</Text>
      <View style={style.location}>
        <PhoneIcon />
        <Text style={style.txtLocation}>{item.kontak}</Text>
      </View>
      <View style={style.location}>
        <PersonChekIcon />
        <Text style={style.txtLocation}>{item.namaKontak}</Text>
      </View>
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
      <HeaderPakaian navigation={navigation} />
      <View style={style.content}>
        <FlatList
          data={pakaian}
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
  },
  price: {
    color: '#E13A3A',
    fontSize: 12,
    margin: 3,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
  },
  txtLocation: {
    color: '#1877F2',
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
