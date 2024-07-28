import React, { useEffect, useState } from 'react';
import Footer from '../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import profile from '../../../assets/profile.png';
import HeaderProfile from '../../components/layout/headerProfile';
import MapIcon from '../../components/icon/map';
import { getProfil } from '../../services/desaDigital.services';

export default function Profile({ navigation }) {
    const [profil, setProfil] = useState([]);

    useEffect(() => {
        const fetchProfil = async () => {
            try {
                const data = await getProfil();
                setProfil(data[0]);
            } catch (error) {
                console.error('Error fetching profil:', error);
                setError('Failed to fetch profile data. Please try again later.');
            }
        };
        fetchProfil();
    }, []);

    const goPemerintahan = () => {
        navigation.navigate('pemerintahan');
    };

    const cleanHTMLTags = (html) => {
        if (!html) return '';
        const cleanText = html.replace(/<[^>]+>/g, '');
        return cleanText;
    };

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <View style={styles.container}>
            <HeaderProfile navigation={navigation} />
            <View style={styles.content}>
                <ScrollView>
                    <Image source={{ uri: `https://api-admin.desasosordolok.id/api/gambardesa/${profil.gambar_desa}` }} style={styles.profileImage} />
                    <Text style={styles.DesaName}>
                        Desa {profil.nama_desa}
                    </Text>
                    <View style={styles.mapContainer}>
                        <MapIcon />
                        <Text style={styles.alamat}>
                            {profil.alamat_kantor}, Kecamatan {profil.kecamatan}
                        </Text>
                    </View>
                    <Text style={styles.profileText}>
                        {truncateText(cleanHTMLTags(profil.profil_singkat))}
                    </Text>

                    <Text style={styles.visiTitle}>
                        Visi
                    </Text>
                    <Text style={styles.visicontainer}>
                        "{truncateText(cleanHTMLTags(profil.visi_desa))}"
                    </Text>
                    <Text style={styles.misiTitle}>
                        Misi
                    </Text>
                    <Text style={styles.misicontainer}>
                        {truncateText(cleanHTMLTags(profil.misi_desa))}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={goPemerintahan}>
                            <Text style={styles.buttonText}>
                                Struktur Pemerintahan
                            </Text>
                        </TouchableOpacity>
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
        marginBottom: 10,
    },
    profileImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    DesaName: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 20,
    },
    mapContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    alamat: {
        fontSize: 12,
        color: '#676A6C',
    },
    profileText: {
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'justify',
    },
    visiTitle: {
        textAlign: 'center',
        color: '#0890EA',
        fontSize: 16,
        fontWeight: '700',
        margin: 5,
    },
    visicontainer: {
        backgroundColor: '#0890EA',
        color: '#ffffff',
        textAlign: 'center',
        marginLeft: 18,
        marginRight: 18,
        borderRadius: 5,
        fontSize: 12,
        padding: 15,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    misiTitle: {
        textAlign: 'center',
        color: '#0D9276',
        fontSize: 16,
        fontWeight: '700',
        margin: 5,
    },
    misicontainer: {
        backgroundColor: '#0D9276',
        color: '#ffffff',
        marginLeft: 18,
        textAlign: 'justify',
        marginRight: 18,
        borderRadius: 5,
        fontSize: 12,
        padding: 15,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 21,
        marginBottom: 10,
        shadowColor: '#000',
    },
    button: {
        backgroundColor: '#0890EA',
        borderRadius: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        padding: 14,
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#ffffff',
        letterSpacing: 0.014,
    },
});
