import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import HeaderBerita from "../../components/layout/headernerita";
import { getBeritaById } from "../../services/desaDigital.services";

export default function DetailBerita({ navigation, route }) {
  const { id } = route.params;
  const [berita, setBerita] = useState(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const data = await getBeritaById(id);
        setBerita(data);
      } catch (error) {
        console.error('Error fetching berita:', error);
      }
    };

    fetchBerita();
  }, [id]);

  if (!berita) {
    return (
      <View style={styles.container}>
        <HeaderBerita navigation={navigation} />
        <View style={styles.content}>
          <Text>Loading...</Text>
        </View>
      </View>
    );
  }

  const cleanHTMLTags = (html) => {
    const cleanText = html.replace(/<[^>]+>/g, '');
    return cleanText;
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '';
  };

  const formatDate = (tgl) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(tgl).toLocaleDateString('id-ID', options);
  };

  return (
    <View style={styles.container}>
      <HeaderBerita navigation={navigation} />
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.boxImg}>
            {/* Perbaikan source pada Image */}
            <Image source={{ uri: `https://api-admin.desasosordolok.id/images/cover/${berita.cover}` }} style={styles.img} />
          </View>
          <Text style={styles.title}>{berita.judul_berita}</Text>
          <Text style={styles.deskripsi}>
            {truncateText(cleanHTMLTags(berita.isi_berita))}
          </Text>
        </ScrollView>
      </View>
    </View>
  )
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
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 18
  },
  kategori: {
    fontSize: 12,
    color: 'rgba(103, 106, 108, 0.7)'
  },
  deskripsi: {
    fontSize: 14,
    letterSpacing: 0.3,
    textAlign: "justify",
    marginTop: 10
  },
  boxImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 5
  }
})
