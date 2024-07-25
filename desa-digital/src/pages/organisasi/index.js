import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import HeaderOrganisasi from "../../components/layout/headerorganisasi";
import { FontAwesome } from '@expo/vector-icons';
import { getOrganisasi } from "../../services/desaDigital.services";

export default function Organisasi({ navigation }) {
  const [numColumns, setNumColumns] = useState(2);
  const [organisasi, setOrganisasi] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchOrganisasi = async () => {
      try {
        const data = await getOrganisasi();
        setOrganisasi(data);
      } catch (error) {
        console.error('Error fetching organisasi list:', error);
      }
    }
    fetchOrganisasi();
  }, [])

  const handleMenu = (id) => {
    navigation.navigate('organisasi-detail', { id }); 
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const filteredOrganisasi = organisasi.filter(item => 
    item.nama_lembaga && item.nama_lembaga.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderList = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenu(item.id)}>
      <View style={styles.menuItemContent}>
        <Image source={{ uri: `https://api-admin.desasosordolok.id/images/organisasi/${item.logo_organisasi}` }} style={styles.img} />
        <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: '700', marginTop: 5, marginBottom: 18 }}>{item.nama_lembaga}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <HeaderOrganisasi navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.boxSearch}>
          <TextInput 
            placeholder='Cari' 
            style={styles.textInput} 
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <FontAwesome name='search' size={18} color='grey' style={styles.search} />
        </View>
        <FlatList
          data={filteredOrganisasi}
          renderItem={renderList}
          keyExtractor={item => item.id.toString()}
          numColumns={numColumns}
        />
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
    marginBottom: 10
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
  menuItemContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding: 5
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2
  },
  img: {
    width: 130,
    height: 130
  }
})
