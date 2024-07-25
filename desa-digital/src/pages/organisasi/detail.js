import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderOrganisasiDetail from "../../components/layout/headerdetailorganisasi";
import { getOrganisasiById } from "../../services/desaDigital.services";

export default function DetailOrganisasi({ navigation, route }) {
  const { id } = route.params;
  const [organisasi, setOrganisasi] = useState(null);

  useEffect(() => {
    const fetchOrganisasi = async () => {
      try {
        const data = await getOrganisasiById(id);
        setOrganisasi(data);
      } catch (error) {
        console.error('Error fetching organisasi:', error);
      }
    }
    fetchOrganisasi();
  }, [id]);

  if (!organisasi) {
    return (
      <View style={styles.container}>
        <HeaderOrganisasiDetail navigation={navigation} />
        <View style={styles.content}>
          <Text>Loading...</Text>
        </View>
      </View>
    );
  }

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

  const formatDate = (tgl) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(tgl).toLocaleDateString('id-ID', options);
  };

  return (
    <View style={styles.container}>
      <HeaderOrganisasiDetail navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.logo}>
          <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Image
              source={{ uri: `https://api-admin.desasosordolok.id/images/organisasi/${organisasi.logo_organisasi}` }}
              style={styles.logoImage}
            />
            <Text style={styles.nama}>{organisasi.nama_lembaga}</Text>
            <Text style={styles.alamat}>{organisasi.alamat_organisasi}</Text>
          </View>
        </View>
        <Text style={styles.deskripsi}>
          {truncateText(cleanHTMLTags(organisasi.deskripsi), 200)}
        </Text>
        <View style={styles.mainTable}>
          <View style={styles.table}>
            <Text style={{ color: 'white' }}>Tahun berdiri</Text>
            <Text style={{ color: 'white' }}>{formatDate(organisasi.tahun_berdiri)}</Text>
          </View>
          <View style={styles.tablew}>
            <Text style={{ color: 'black' }}>Ketua</Text>
            <Text style={{ color: 'black' }}>{organisasi.ketua}</Text>
          </View>
          <View style={styles.table}>
            <Text style={{ color: 'white' }}>Wakil Ketua</Text>
            <Text style={{ color: 'white' }}>{organisasi.wakil_ketua}</Text>
          </View>
          <View style={styles.tablew}>
            <Text style={{ color: 'black' }}>Sekretaris</Text>
            <Text style={{ color: 'black' }}>{organisasi.sekretaris}</Text>
          </View>
          <View style={styles.table}>
            <Text style={{ color: 'white' }}>Bendahara</Text>
            <Text style={{ color: 'white' }}>{organisasi.bendahara}</Text>
          </View>
          <View style={styles.tablew}>
            <Text style={{ color: 'black' }}>Jumlah Anggota</Text>
            <Text style={{ color: 'black' }}>{organisasi.jumlah_anggota} Orang</Text>
          </View>
        </View>
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
    marginBottom: 10,
    marginLeft: 22,
    marginRight: 22
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    marginBottom: 10
  },
  nama: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700'
  },
  alamat: {
    textAlign: 'center',
    color: '#676A6C'
  },
  deskripsi: {
    fontSize: 14,
    textAlign: 'justify',
    letterSpacing: 0.1,
    marginTop: 35
  },
  mainTable: {
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
    marginTop: 40
  },
  table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#40A2E3',
    padding: 5
  },
  tablew: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 5
  }
});
