import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import HeaderHomestay from '../../../components/layout/headerHomestay';
import MapIcon from '../../../components/icon/map';
import PhoneIcon from '../../../components/icon/phone';
import JamIcon from '../../../components/icon/jam';
import { getHomestay } from '../../../services/desaDigital.services';

export default function Homestay({ navigation }) {
    const [homeStay, setHomeStay] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomestay = async () => {
            try {
                const response = await getHomestay();
                console.log("Response from getHomestay:", response); 

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
        navigation.navigate('detail-homestay', { id });
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={style.bg} onPress={() => goDetail(item.id)}>
            <Image source={{ uri: item.gambar1 }} style={style.img} />
            <Text style={style.title}>{item.namaPenginapan}</Text>
            <View style={style.jadwal}>
                <JamIcon />
                <Text style={style.txtJadwal}>{item.contactPerson}</Text>
            </View>
            <View style={style.location}>
                <MapIcon />
                <Text style={style.txtLocation}>{item.lokasi}</Text>
            </View>
            <View style={style.location}>
                <PhoneIcon />
                <Text style={style.txtLocation}>{item.kontak}</Text>
            </View>
            <Text style={style.deskripsi}>{item.deskripsi}</Text>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('detail-ibadah', { id: item.id })}>
                                <Text style={style.btnText}>Selengkapnya</Text>
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
            <HeaderHomestay navigation={navigation} />
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
        fontWeight: '800',
    },
    jadwal: {
        flexDirection: 'row',
        alignItems: 'top',
        alignItems:'center',
        paddingLeft: 10,
     
    },
    txtJadwal: {
        paddingLeft: 4,
    },
    deskripsi: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
    },
    location: {
        paddingLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
    },
    txtLocation: {
        color: '#1877F2',
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
});