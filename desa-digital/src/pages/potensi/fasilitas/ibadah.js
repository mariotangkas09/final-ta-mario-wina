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
        <TouchableOpacity style={styles.bg} onPress={() => goDetail(item.id)}>
            <Image source={{ uri: item.gambar }} style={styles.img} />
            <Text style={styles.title}>{item.namaRumahIbadah}</Text>
            <View style={styles.jadwal}>
                <JamIcon />
                <Text style={styles.txtJadwal}>{item.jadwalIbadah}</Text>
            </View>
            <View style={styles.location}>
                <MapIcon />
                <Text style={styles.txtLocation}>{item.lokasi}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('detail-ibadah', { id: item.id })}>
                                <Text style={styles.btnText}>Selengkapnya</Text>
            </TouchableOpacity>
           
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <HeaderIbadah navigation={navigation} />
            <View style={styles.content}>
                <FlatList
                    data={ibadah}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
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
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center', 
    },
    listContainer: {
   justifyContent: 'center',
    },
    title: {
          fontSize: 20,
          paddingTop: 5,
          paddingLeft: 5,
          margin: 3,
          fontWeight: '800'
    },
    jadwal: {
          flexDirection: 'row',
          alignItems: 'top',
          marginTop: 5,
          paddingLeft: 10
     },
     txtJadwal: {
        paddingLeft: 10,
        fontSize: 14,
        paddingRight: 5
     },
    location: {
        flexDirection: 'row',
        alignItems: 'top',
        marginTop: 10, 
        paddingLeft: 10
    },
    txtLocation: {
     paddingLeft: 10,
     fontSize: 14,
     marginRight: 30, 
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
    btn: {
        backgroundColor: '#0890EA',
        width: 100,
        height: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: 5,
        marginBottom: 10,
        marginRight: 10,
    },
    btnText: {
        color: '#ffffff',
        fontSize: 12,
 }
});
