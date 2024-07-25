import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Footer from '../../components/layout/footer';
import HeaderHome from '../../components/layout/headerHome';
import UserIcon from '../../components/icon/user';
import Underline from '../../components/icon/underline';
import AgendaIcon from '../../components/icon/agenda';
import OrganisasiIcon from '../../components/icon/organisasi';
import PengumumanIcon from '../../components/icon/pengumuman';
import ApbdesIcon from '../../components/icon/apbdes';
import PendudukIcon from '../../components/icon/penduduk';
import BeritaIcon from '../../components/icon/berita';
import { fetchDusun, getBerita, getPengumuman, getPenduduk } from '../../services/desaDigital.services';

export default function Home({ navigation }) {
     const [numColumns, setNumColumns] = useState(3);
     const [userList, setUserList] = useState([]);
     const [pengumuman, setPengumuman] = useState([]);
     const [berita, setBerita] = useState([]);
     const [penduduk, setPenduduk] = useState({ total: 0, laki: 0, perempuan: 0 });

     useEffect(() => {
          const fetchBerita = async () => {
               try {
                    const allBerita = await getBerita();
                    const latestBerita = allBerita.slice(0, 3);
                    setBerita(latestBerita);
               } catch (error) {
                    console.error('Error fetching berita list:', error);
               }
          };
          fetchBerita();
     }, []);

     useEffect(() => {
          const fetchPengumuman = async () => {
               try {
                    const data = await getPengumuman();
                    const latestData = data.slice(0, 3);
                    setPengumuman(latestData);
               } catch (error) {
                    console.error('Error fetching Pengumuman:', error);
               }
          };
          fetchPengumuman();
     }, []);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const data = await fetchDusun();
                    setUserList(data);
               } catch (error) {
                    console.error('Error fetching dusun list:', error);
               }
          };
          fetchData();
     }, []);

     useEffect(() => {
          const fetchPendudukData = async () => {
              try {
                  const data = await getPenduduk();
                  const total = data.length;
                  const laki = data.filter(item => item.jenis_kelamin === 'Laki-laki').length;
                  const perempuan = data.filter(item => item.jenis_kelamin === 'Perempuan').length;
                  setPenduduk({ total, laki, perempuan });
              } catch (error) {
                  console.error('Error fetching penduduk data:', error);
              }
          };
          fetchPendudukData();
      }, []);
  

     const menu = [
          { key: 1, icon: <AgendaIcon />, namaMenu: 'Agenda Desa', route: 'agenda' },
          { key: 2, icon: <OrganisasiIcon />, namaMenu: 'Organisasi Desa', route: 'organisasi' },
          { key: 3, icon: <PengumumanIcon />, namaMenu: 'Pengumuman', route: 'pengumuman' },
          { key: 4, icon: <PendudukIcon />, namaMenu: 'Data Penduduk', route: 'penduduk' },
          { key: 5, icon: <ApbdesIcon />, namaMenu: 'ABDes', route: 'anggaran' },
          { key: 6, icon: <BeritaIcon />, namaMenu: 'Berita Desa', route: 'berita' }
     ];

     const handleMenu = (route) => {
          navigation.navigate(route);
     };

     const renderMenu = ({ item }) => (
          <TouchableOpacity style={styles.menuItem} onPress={() => handleMenu(item.route)}>
               <View style={styles.menuItemContent}>
                    {item.icon}
                    <Text style={{ textAlign: 'center', fontSize: 11 }}>
                         {item.namaMenu}
                    </Text>
               </View>
          </TouchableOpacity>
     );

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

     const data = [
          { key: 'menu', type: 'menu' },
          { key: 'beritaTitle', type: 'title', title: 'Berita Desa terbaru' },
          ...berita.map(beritaData => ({ key: `berita-${beritaData.id}`, type: 'berita', data: beritaData })),
          { key: 'pengumumanTitle', type: 'title', title: 'Pengumuman terbaru' },
          ...pengumuman.map(pengumumanData => ({ key: `pengumuman-${pengumumanData.id}`, type: 'pengumuman', data: pengumumanData }))
     ];

     const renderItem = ({ item }) => {
          if (item.type === 'menu') {
               return (
                    <FlatList
                         data={menu}
                         renderItem={renderMenu}
                         numColumns={numColumns}
                         keyExtractor={(item) => item.key.toString()}
                         scrollEnabled={false}
                    />
               );
          } else if (item.type === 'title') {
               return (
                    <View style={styles.titleNews}>
                         <Text style={styles.textTitleNews}>{item.title}</Text>
                    </View>
               );
          } else if (item.type === 'berita') {
               const beritaData = item.data;
               return (
                    <View style={styles.cardNews} key={beritaData.id}>
                         <View style={{ paddingLeft: 16, paddingTop: 7, paddingBottom: 7 }}>
                              <Image source={{ uri: `https://api-admin.desasosordolok.id/images/cover/${beritaData.cover}` }} style={{ width: 95, height: 95, borderRadius: 5 }} />
                         </View>
                         <View style={styles.contentNews}>
                              <Text style={styles.judul}>{beritaData.judul_berita}</Text>
                              <Text style={styles.waktu}>{formatDate(beritaData.tgl_publikasi)}</Text>
                              <Text style={styles.deskripsi}>{truncateText(cleanHTMLTags(beritaData.isi_berita), 32)}</Text>
                              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: 195 }}>
                                   <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('detail-berita', { id: beritaData.id })}>
                                        <Text style={styles.btnText}>Selengkapnya</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
               );
          } else if (item.type === 'pengumuman') {
               const pengumumanData = item.data;
               return (
                    <View style={styles.cardNews} key={pengumumanData.id}>
                         <View style={{ paddingLeft: 16, paddingTop: 7, paddingBottom: 7, width:100  }}>
                         <Image source={{ uri: `https://api-admin.desasosordolok.id/api/pengumuman_cover/${pengumumanData.file_pengumuman}` }} width={85} height={85} borderRadius={5} />
                         </View>
                         <View style={styles.contentNews}>
                              <Text style={styles.judul}>{pengumumanData.judul_pengumuman}</Text>
                              <Text style={styles.waktu}>{formatDate(pengumumanData.tgl_publikasi)}</Text>
                              <Text style={styles.deskripsi}>{truncateText(cleanHTMLTags(pengumumanData.deskripsi_pengumuman), 32)}</Text>
                              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: 195 }}>
                                   <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('detail-pengumuman', { id: pengumumanData.id })}>
                                        <Text style={styles.btnText}>Selengkapnya</Text>
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
               );
          }
          return null;
     };

     return (
          <View style={styles.container}>
               <HeaderHome />
               <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                    ListHeaderComponent={
                         <View style={styles.content}>
                              <View style={styles.dataStatistik}>
                                   <View style={styles.dataPenduduk}>
                                        <View style={styles.box}>
                                             <Text style={styles.title}>Total Penduduk</Text>
                                             <View style={styles.countP}>
                                                  <UserIcon color='#ffffff' />
                                                  <Text style={styles.count}>{penduduk.total} Jiwa</Text>
                                             </View>
                                        </View>
                                   </View>
                                   <View style={styles.dataPenduduk}>
                                        <View style={styles.box}>
                                             <Text style={styles.title}>Statistik Penduduk</Text>
                                             <View style={styles.countLP}>
                                                  <Text style={{ fontSize: 12, color: '#ffffff', width: 62 }}>{penduduk.perempuan} Jiwa  Perempuan</Text>
                                                  <Text style={{ fontSize: 40, color: '#ffffff', }}>|</Text>
                                                  <Text style={{ fontSize: 12, color: '#ffffff', width: 62 }}>{penduduk.laki} Jiwa Laki-laki</Text>
                                             </View>
                                        </View>
                                   </View>
                              </View>
                              <View style={styles.Underline}>
                                   <Underline />
                              </View>
                              <Text style={{ fontSize: 18, fontWeight: '700', paddingLeft: 20, marginTop: 15 }}>Informasi Desa</Text>
                         </View>
                    }
               />
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
          marginBottom: 10
     },
     dataPenduduk: {
          backgroundColor: '#0D9276',
          width: 143,
          height: 90,
          borderRadius: 8,
     },
     title: {
          color: '#ffffff',
          fontSize: 14
     },
     count: {
          color: "#ffffff",
          fontSize: 20,
          fontWeight: "900"
     },
     countLP: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 10
     },
     countP: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25
     },
     box: {
          padding: 5
     },
     dataStatistik: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          paddingLeft: 20,
          paddingRight: 20
     },
     Underline: {
          marginTop: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
     },
     menuItemContent: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
     },
     menuItem: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
     },
     titleNews: {
          backgroundColor: 'rgba(13, 146, 118, 0.09)',
          width: 160,
          borderRadius: 15,
          height: 23,
          marginLeft: 15,
          marginTop: 15
     },
     textTitleNews: {
          textAlign: 'center',
          color: '#0D9276',
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
          width: 195
     },
     btn: {
          backgroundColor: '#0890EA',
          width: 100,
          height: 25,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
     },
     btnText: {
          color: '#ffffff',
          fontSize: 12,
     },
     cardNews: {
          width: 365,
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
          width: 195,
          paddingRight: 16,
          paddingTop: 7,
          paddingBottom: 7
     },
     boxCard: {
          flex: 1,
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
     }
});
