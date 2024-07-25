import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import HeaderWisata from '../../../components/layout/headerwisata';
import Footer from '../../../components/layout/footer';
import { getWisata } from '../../../services/desaDigital.services';

export default function Wisata({ navigation }) {
    const [wisata, setWisata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWisata = async () => {
            try {
                const response = await getWisata();
                console.log("Response from getWisata:", response); // Debug log to check response data

                if (response.code === 200) {
                    // Convert object data to array
                    const wisataArray = Object.values(response.data);
                    setWisata(wisataArray);
                    console.log("Wisata data array:", wisataArray); // Debug log to check converted data
                } else {
                    console.error('Error fetching wisata:', response.message);
                }
            } catch (error) {
                console.error('Error fetching wisata:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWisata();
    }, []);

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('detail-wisata', { id: item.id })}>
            <Image source={{ uri: item.gambar }} style={styles.img} />
            <Text style={styles.title}>{item.namaObjekWisata}</Text>
            <Text style={styles.deskripsi}>{truncateText(item.deskripsi, 40)}</Text>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('detail-wisata', { id: item.id })}>
                <Text style={{ color: '#0369A1' }}>Selengkapnya</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <HeaderWisata navigation={navigation} />
            <View style={styles.content}>
                <FlatList
                    data={wisata}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2} // Mengatur jumlah kolom menjadi 2
                />
            </View>
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
    },
    content: {
        flex: 1,
        marginBottom: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        elevation: 2,
    },
    img: {
        width: '100%',
        height: 122,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    deskripsi: {
        fontSize: 14,
    },
    link: {
        marginTop: 10,
    }
});
