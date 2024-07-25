import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import DetailAgenda from "../../components/layout/headerdetailagenda";
import MapIcon from '../../components/icon/map';
import PersonCheckIcon from '../../components/icon/checkperson';
import { getAgendaById, getLaporan } from "../../services/desaDigital.services";

export default function AgendaDetail({ navigation, route }) {
    const { id } = route.params;
    const [agenda, setAgenda] = useState(null);
    const [laporan, setLaporan] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAgenda = async () => {
            try {
                const data = await getAgendaById(id);
                setAgenda(data);
            } catch (error) {
                console.error('Error fetching agenda:', error);
                setError('Gagal mengambil data agenda. Silakan coba lagi nanti.');
            }
        };

        fetchAgenda();
    }, [id]);

    useEffect(() => {
        const fetchLaporan = async () => {
            try {
                const data = await getLaporan();
                const filteredLaporan = data.filter(item => item.id_agenda === id);
                setLaporan(filteredLaporan);
            } catch (error) {
                console.error('Error fetching laporan:', error);
                setError('Gagal mengambil data laporan. Silakan coba lagi nanti.');
            }
        };

        fetchLaporan();
    }, [id]);

    const formatDate = (tgl) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(tgl).toLocaleDateString('id-ID', options);
    };

    return (
        <View style={styles.container}>
            <DetailAgenda navigation={navigation} />

            <View style={styles.content}>
                <ScrollView>
                    {error ? (
                        <Text style={styles.errorText}>{error}</Text>
                    ) : agenda ? (
                        <View style={styles.boxContent}>
                            <Text style={styles.title}>{agenda.nama_kegiatan}</Text>
                            <Text style={styles.waktu}> {formatDate(agenda.tanggal_kegiatan)} </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MapIcon />
                                    <Text style={{ marginLeft: 5 }}>{agenda.lokasi}</Text>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                                    <PersonCheckIcon />
                                    <Text style={{ marginLeft: 5 }}>{laporan.length > 0 && laporan[0].koordinator}</Text>
                                </View>
                            </View>
                            <Text style={styles.tujuan}>Tujuan: {agenda.tujuan_kegiatan}</Text>
                            <Text style={styles.deskripsi}>{agenda.deskripsi_kegiatan}</Text>

                            <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 21, marginBottom: 9 }}>Dokumentasi Kegiatan</Text>
                        
                            {laporan.length > 0 && laporan[0].dokumentasi ? (
                                <Image
                                    source={{ uri: `https://api-admin.desasosordolok.id/api/dokumentasi/${laporan[0].dokumentasi}` }}
                                    style={styles.img}
                                />
                            ) : (
                                <Text>Tidak ada dokumentasi</Text>
                            )}

                            <View style={styles.peserta}>
                                <View>
                                    <Text style={{ fontSize: 16, fontWeight: '700', textAlign: 'center' }}>Total Peserta</Text>
                                    <View style={styles.boxPeserta}>
                                        <Text style={{ textAlign: 'center', padding: 15, color: '#ffffff' }}>{laporan.length > 0 && laporan[0].jumlah_peserta} Peserta</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.boxAnggaran1}>
                                <View style={styles.anggaran}>
                                    <View style={styles.box}>
                                        <Text style={{ color: '#ffffff', fontSize: 14, textAlign: 'center', marginBottom: 5 }}>Anggaran Desa</Text>
                                        <View style={styles.boxAnggaran}>
                                            <Text style={{ padding: 5, textAlign: 'center' }}>Rp {laporan.length > 0 && laporan[0].anggaran_desa}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.box}>
                                        <Text style={{ color: '#ffffff', fontSize: 14, textAlign: 'center', marginBottom: 5 }}>Donasi</Text>
                                        <View style={styles.boxAnggaran}>
                                            <Text style={{ padding: 5, textAlign: 'center' }}>Rp {laporan.length > 0 && laporan[0].donasi}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <Text>Memuat data...</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
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
    boxContent: {
        margin: 16
    },
    title: {
        fontSize: 17,
        fontWeight: '700'
    },
    waktu: {
        fontSize: 12,
        color: 'rgba(103,106,108, 0.7)'
    },
    tujuan: {
        marginTop: 15,
        fontWeight: '700'
    },
    deskripsi: {
        textAlign: 'justify',
        letterSpacing: 0.1,
        fontSize: 14,
        marginTop: 15
    },
    peserta: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 21
    },
    boxPeserta: {
        backgroundColor: '#0890EA',
        borderRadius: 5,
        marginTop: 3
    },
    anggaran: {
        backgroundColor: '#0890EA',
        borderRadius: 5,
        width: 329,
        marginTop: 21,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    boxAnggaran: {
        backgroundColor: '#ffffff',
        width: 112,
        borderRadius: 5
    },
    box: {
        marginTop: 21,
        marginBottom: 21
    },
    img: {
        width: 350,
        height: 200,
        margin: 2
    },
    boxAnggaran1: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        margin: 10
    }
});
