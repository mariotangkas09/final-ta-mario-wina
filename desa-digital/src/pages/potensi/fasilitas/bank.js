import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MapIcon from '../../../components/icon/map';
import JamIcon from '../../../components/icon/jam';
import { getBank } from '../../../services/desaDigital.services';
import HeaderBank from '../../../components/layout/headerBank';
export default function Bank({ navigation }) {
    const [homeStay, setHomeStay] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomestay = async () => {
            try {
                const response = await getBank();
                console.log("Response from bank:", response);

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
        navigation.navigate('bank-detail', { id });
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={style.bg} onPress={() => goDetail(item.id)}>
            <Image source={{ uri: item.gambar }} style={style.img} />
            <Text style={style.title}>{item.namaBank}</Text>
            <View style={style.jadwal}>
                <JamIcon />
                <Text style={style.txtJadwal}>{item.waktuOperasi}</Text>
            </View>
            <View style={style.location}>
                <MapIcon />
                <Text style={style.txtLocation}>{item.lokasi}</Text>
            </View>
            <Text style={style.deskripsi}>{item.deskripsi}</Text>
            <TouchableOpacity style={style.link} onPress={() => navigation.navigate('bank-detail', { id: item.id })}>
                <Text style={{ color: '#0369A1' }}>Selengkapnya</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={style.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={style.container}>
            <HeaderBank navigation={navigation} />
            <View style={style.content}>
                <FlatList
                    data={homeStay}
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
        paddingLeft: 4,
        fontSize: 14
    },
    jadwal: {
        flexDirection: 'row',
        alignItems: 'top',
        marginTop: 5,
        paddingLeft: 10
    },
    txtJadwal: {
        paddingLeft: 4,
        fontSize: 14,
        paddingRight: 5
    },
    deskripsi: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
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
    link: {
        marginTop: 3,
        marginLeft: 10,
        marginBottom: 4 
    },
});
