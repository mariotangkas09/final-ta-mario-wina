import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MapIcon from '../../../components/icon/map';
import JamIcon from '../../../components/icon/jam';
import { getKesehatan } from '../../../services/desaDigital.services';
import HeaderKesehatan from '../../../components/layout/headerkesehatan';

export default function Kesehatan({ navigation }) {
    const [homeStay, setHomeStay] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomestay = async () => {
            try {
                const response = await getKesehatan();
                console.log("Response from kesehatan:", response);

                if (response.code === 200) {
                    const homestayArray = Object.keys(response.data).map(key => response.data[key]);
                    setHomeStay(homestayArray);
                    console.log("Homestay data array:", homestayArray);
                } else {
                    console.error('Error fetching fasilitas:', response.message);
                }
            } catch (error) {
                console.error('Error fetching fasilitas:', error);
            } finally {
                setLoading(false);
                console.log("Loading status:", loading);
            }
        };
        fetchHomestay();
    }, []);

    const goDetail = (id) => {
        navigation.navigate('kesehatan-detail', { id });
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.bg} onPress={() => goDetail(item.id)}>
            <Image source={{ uri: item.gambar }} style={styles.img} />
            <Text style={styles.title}>{item.namaFasilitasKesehatan}</Text>
            <View style={styles.jadwal}>
                <JamIcon />
                <Text style={styles.txtJadwal}>{item.waktuOperasi}</Text>
            </View>
            <View style={styles.location}>
                <MapIcon />
                <Text style={styles.txtLocation}>{item.lokasi}</Text>
            </View>
            <Text style={styles.informasi}>{item.deskripsi}</Text>
            <View style={styles.location}>
                <Text style={styles.txtLocation}>{item.kontak}</Text>
            </View>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('kesehatan-detail', { id: item.id })}>
                <Text style={{ color: '#0369A1' }}>Selengkapnya</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <HeaderKesehatan navigation={navigation} />
            <View style={styles.content}>
                <FlatList
                    data={homeStay}
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
    location: {
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
    },
    txtLocation: {
        color: '#1877F2',
        marginLeft: 5,
        marginRight: 17,
        fontSize: 14
    },
    jadwal: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    txtJadwal: {
        paddingLeft: 4,
        fontSize: 14,
        paddingRight: 5
    },
    informasi: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
    },
    bg: {
        flex: 1,
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        margin: 3,
        elevation: 2,
    },
    img: {
        width: '100%',
        height: 136,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    link: {
        marginLeft: 10,
        marginBottom: 4 
    }
});