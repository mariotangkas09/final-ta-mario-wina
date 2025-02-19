import React, { useEffect, useState } from 'react';
import Footer from '../../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getRumahMakanDetail } from '../../../services/desaDigital.services';
import MapIcon from '../../../components/icon/map';
import HeaderRumahMakan from '../../../components/layout/headerrumahmakan';
export default function DetailRumahMakan({ navigation, route }) {
    const { id } = route.params;
    const [homestayDetail, setHomestayDetail] = useState(null); // default to null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const detail = await getRumahMakanDetail(id);
                console.log("Fetched detail:", detail);

                if (detail && detail.data) {
                    // Extract the first property of detail.data
                    const detailData = Object.values(detail.data)[0];
                    setHomestayDetail(detailData);
                } else {
                    console.error('Invalid data format:', detail);
                }
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
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!homestayDetail) {
        return (
            <View style={styles.container}>
                <Text>No details available</Text>
            </View>
        );
    }

    const goHomestay = () => {
        navigation.navigate('homestay');
    };

    return (
        <View style={styles.container}>
            <HeaderRumahMakan navigation={navigation} />
            <View style={styles.content}>
                <ScrollView>
                    <Image source={{uri: homestayDetail.gambar}} style={styles.img} />
                    <Text style={styles.title}>
                        {homestayDetail.namaRumahMakan}
                    </Text>
                    <Text style={styles.des}>
                        {homestayDetail.deskripsi}
                    </Text>
                    <Text style={styles.lokasi}>
                     <MapIcon/> {homestayDetail.lokasi}
                    </Text>
                    <Text style={styles.subtitle}>
                       Waktu Beroperasi
                    </Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.priseR}>Pukul {homestayDetail.jamBuka} - {homestayDetail.jamTutup} / {homestayDetail.waktuOperasi}</Text>
                    </View>
                    <Text style={styles.subtitle}>
                        For More Information
                    </Text>
                    <Text style={styles.des}>
                       {homestayDetail.isiKonten}
                    </Text>
                </ScrollView>
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
        margin: 18,
    },
    img: {
        width: '100%',
        height: 180,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    des: {
        textAlign: 'center',
    },
    lokasi:{
          display:'flex', 
          flexDirection:"row",
          alignItems:"center",
          marginTop:10
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 10,
    },
    priceBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    prise: {
        color: '#E13A3A',
    },
    priseR: {
        marginLeft: 5,
    },
    ket: {
        marginLeft: 10,
    },
});
