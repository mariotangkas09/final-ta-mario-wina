import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderAgenda from '../../components/layout/headerAgenda';
import { FontAwesome } from '@expo/vector-icons';
import { getAgenda } from '../../services/desaDigital.services';

export default function AgendaDesa({ navigation }) {
    const [agenda, setAgenda] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAgenda = async () => {
            try {
                const data = await getAgenda();
                setAgenda(data);
            } catch (error) {
                console.error('Error fetching agenda:', error);
            }
        };
        fetchAgenda();
    }, []);

    const formatDate = (tgl) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(tgl).toLocaleDateString('id-ID', options);
    };

    const cleanHTMLTags = (html) => {
        const cleanText = html.replace(/<[^>]+>/g, '');
        return cleanText;
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const filteredAgenda = agenda.filter(item =>
        item.nama_kegiatan.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <HeaderAgenda navigation={navigation} />

            <View style={styles.content}>
                {/* text input */}
                <View style={styles.boxSearch}>
                    <TextInput
                        placeholder='Cari'
                        style={styles.textInput}
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                    />
                    <FontAwesome name='check-circle' size={18} color='grey' style={styles.search} />
                </View>
                {/* card agenda */}
                <ScrollView>
                    <View style={styles.boxAgenda}>
                        <View style={{ marginBottom: 10 }}>
                            {filteredAgenda.map((agendaData) => (
                                <View key={agendaData.id} style={styles.cardNews}>
                                    
                                    <View style={styles.contentNews}>
                                        <Text style={styles.judul}>{agendaData.nama_kegiatan}</Text>
                                        <Text style={styles.waktu}>{formatDate(agendaData.tanggal_kegiatan)} </Text>
                                        <Text style={styles.deskripsi}>{truncateText(cleanHTMLTags(agendaData.deskripsi_kegiatan), 100)}</Text>
                                        <View style={styles.boxbtn}>
                                            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('agenda-detail', { id: agendaData.id })}>
                                                <Text style={styles.btnText}>Selengkapnya</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
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
        backgroundColor: '#ffffff',
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
        paddingLeft: 20
    },
    boxSearch: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 15, 
        marginBottom: 5
    },
    search: {
        position: 'absolute',
        right: 25,
        top: 10
    },
    cardNews: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        elevation: 2,
        marginTop: 15,
        marginLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    contentNews: {
        marginLeft: 5,
        width: 'full',
        paddingTop: 7,
        paddingBottom: 7
    },
    judul: {
        fontSize: 12,
        fontWeight: '800',
    },
    waktu: {
        fontSize: 9,
        color: 'rgba(103, 106, 108, 0.7)',
    },
    deskripsi: {
        fontSize: 12,
        textAlign:'justify'
    },
    btn: {
        backgroundColor: '#0890EA',
        width: 100,
        height: 25,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 2
    },
    btnText: {
        color: '#ffffff',
        fontSize: 12,
    },
    boxAgenda: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxbtn:{
        display:'flex',
        flexDirection:"row",
        justifyContent:'flex-end',
        width: '100%',
    }
});
