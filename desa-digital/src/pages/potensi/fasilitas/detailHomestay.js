import React, { useEffect, useState } from 'react';
import Footer from '../../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import h1 from '../../../../assets/fasilitas/h1.png';
import HeaderDetailHomestay from '../../../components/layout/headerDetailHomstay';
import WifIcon from '../../../components/icon/wifiIcon';
import ToiIcon from '../../../components/icon/toiletIcon';
import CsIcon from '../../../components/icon/csIcon';
import CpIcon from '../../../components/icon/cpIcon';
import AcIcon from '../../../components/icon/acIcon';
import BfIcon from '../../../components/icon/bfIcon';
import PhoneIcon from '../../../components/icon/phone';
import MailIcon from '../../../components/icon/mail';
import { getHomestayDetail } from '../../../services/desaDigital.services';

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};

export default function DetailHomestay({ navigation, route }) {
    const { id } = route.params;
    const [homestayDetail, setHomestayDetail] = useState(null); // default to null
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const detail = await getHomestayDetail(id);
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

    return (
        <View style={styles.container}>
            <HeaderDetailHomestay navigation={navigation} />
            <View style={styles.content}>
                <ScrollView>
                    <Image source={{uri:homestayDetail.gambar3}} style={styles.img} />
                    <Text style={styles.title}>
                        {homestayDetail.namaPenginapan}
                    </Text>
                    <Text style={styles.des}>
                        {homestayDetail.deskripsi}
                    </Text>
                    <Text style={styles.subtitle}>
                        Mulai Dari
                    </Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.prise}>{formatPrice(homestayDetail.harga)}</Text>
                        <Text style={styles.priseR}>kamar/malam</Text>
                    </View>
                    <Text style={styles.subtitle}>
                        Fasilitas
                    </Text>
                    <View style={styles.boxF}>
                        <WifIcon />
                        <Text style={styles.ket}>
                            {homestayDetail.wifi}
                        </Text>
                    </View>
                    <View style={styles.boxF}>
                        <ToiIcon />
                        <Text style={styles.ket}>
                            {homestayDetail.toilet}
                        </Text>
                    </View>
                    <View style={styles.boxF}>
                        <CsIcon />
                        <Text style={styles.ket}>
                            {homestayDetail.contactPerson}
                        </Text>
                    </View>
                    <View style={styles.boxF}>
                        <CpIcon />
                        <Text style={styles.ket}>
                            {homestayDetail.cleaningService}
                        </Text>
                    </View>
                    <View style={styles.boxF}>
                        <AcIcon />
                        <Text style={styles.ket}>
                            {homestayDetail.ac}
                        </Text>
                    </View>
                    <View style={styles.boxF}>
                        <BfIcon />
                        <Text style={styles.ket}>
                            {homestayDetail.breakfast}
                        </Text>
                    </View>
                    <Text style={styles.subtitle}>
                        For More Information
                    </Text>
                    <Text style={styles.des}>
                        Jika anda pertanyaan seputar Homestay Silahkan hubungi kontak dibawah ini:
                    </Text>
                    <View style={styles.boxF}>
                        <PhoneIcon size={21} />
                        <Text style={styles.ket}>
                            {homestayDetail.kontak}
                        </Text>
                    </View>
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
        textAlign: 'justify',
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
    boxF: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    ket: {
        marginLeft: 10,
    },
});
