import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import HeaderPemerintahan from '../../components/layout/headerPemerintahan';
import { getPemerintah } from '../../services/desaDigital.services';

export default function Pemerintahan({ navigation }) {
  const [pemerintah, setPemerintah] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPemerintah = async () => {
      try {
        const data = await getPemerintah();
        setPemerintah(data); // Set data directly from API without sorting
      } catch (error) {
        console.error('Error fetching pemerintah:', error);
        setError('Failed to fetch pemerintah data. Please try again later.');
      }
    };
    fetchPemerintah();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.bg}>
      <Image source={{ uri: `https://api-admin.desasosordolok.id/images/pemerintah/${item.profil}` }} style={styles.img} />
      <Text style={styles.name}>{item.nama}</Text>
      <Text style={styles.jabatan}>{item.jabatan}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderPemerintahan navigation={navigation} />
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={pemerintah}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center',
    margin: 10,
    paddingBottom: 10,
  },
  bg: {
    backgroundColor: '#ffffff',
    elevation: 2,
    padding: 20,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  img: {
    width: 157,
    height: 172,
    padding: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },
  jabatan: {
    textAlign: 'center',
    color: '#404040',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
});
