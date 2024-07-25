import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from '../components/layout/loadingPage';
import Home from '../pages/home';
import Welcome from '../pages/onboarding';
import AgendaDesa from '../pages/agenda';
import AgendaDetail from '../pages/agenda/detail';
import Organisasi from '../pages/organisasi';
import DetailOrganisasi from '../pages/organisasi/detail';
import Pengumuman from '../pages/pengumuman';
import DetailPengumuman from '../pages/pengumuman/detail';
import Anggaran from '../pages/apbdes';
import DetailApbdes from '../pages/apbdes/detail';
import Berita from '../pages/berita';
import DetailBerita from '../pages/berita/detailBerita';
import Penduduk from '../pages/penduduk';
import DusunDetail from '../pages/penduduk/detailDusun';
import PendudukDetail from '../pages/penduduk/detailPenduduk';
import Wisata from '../pages/potensi/wisata';
import DetailWisata from '../pages/potensi/wisata/detail';
import UMKM from '../pages/potensi/umkm';
import UmkmMakanan from '../pages/potensi/umkm/makanan';
import UmkmSuvenir from '../pages/potensi/umkm/suvenir';
import UmkmPakaian from '../pages/potensi/umkm/pakaian';
import Fasilitas from '../pages/potensi/fasilitas';
import Homestay from '../pages/potensi/fasilitas/homestay';
import DetailHomestay from '../pages/potensi/fasilitas/detailHomestay';
import Ibadah from '../pages/potensi/fasilitas/ibadah';
import DetailIbadah from '../pages/potensi/fasilitas/detailIbadah';
import Profile from '../pages/desa/profile';
import Pemerintahan from '../pages/desa/pemerintahan';
import DetailUmkm from '../pages/potensi/umkm/detailMakanan';
import Kesehatan from '../pages/potensi/fasilitas/kesehatan';
import DetailKesehatan from '../pages/potensi/fasilitas/detailKesehatan';
import RumahMakan from '../pages/potensi/fasilitas/rumahmakan';
import DetailRumahMakan from '../pages/potensi/fasilitas/detailrumahmakan';
import Bank from '../pages/potensi/fasilitas/bank';
import DetailBank from '../pages/potensi/fasilitas/detailBank';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        {/* <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} /> */}
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='agenda' component={AgendaDesa} options={{ headerShown: false }} />
        <Stack.Screen name='agenda-detail' component={AgendaDetail} options={{ headerShown: false }} />
        <Stack.Screen name='organisasi' component={Organisasi} options={{ headerShown: false }} />
        <Stack.Screen name='organisasi-detail' component={DetailOrganisasi} options={{ headerShown: false }} />
        <Stack.Screen name='detail-pengumuman' component={DetailPengumuman} options={{ headerShown: false }} />
        <Stack.Screen name='pengumuman' component={Pengumuman} options={{ headerShown: false }} />
        <Stack.Screen name='anggaran' component={Anggaran} options={{ headerShown: false }} />
        <Stack.Screen name='anggaran-detail' component={DetailApbdes} options={{ headerShown: false }} />
        <Stack.Screen name='berita' component={Berita} options={{ headerShown: false }} />
        <Stack.Screen name='detail-berita' component={DetailBerita} options={{ headerShown: false }} />
        <Stack.Screen name='penduduk' component={Penduduk} options={{ headerShown: false }} />
        <Stack.Screen name='detail-dusun' component={DusunDetail} options={{ headerShown: false }} />
        <Stack.Screen name='detail-penduduk' component={PendudukDetail} options={{ headerShown: false }} />
        <Stack.Screen name='wisata' component={Wisata} options={{headerShown:false}} />
        <Stack.Screen name='detail-wisata' component={DetailWisata} options={{headerShown:false}} />
        <Stack.Screen name='umkm' component={UMKM} options={{headerShown:false}} />
        <Stack.Screen name='umkm-makanan' component={UmkmMakanan} options={{headerShown:false}} />
        <Stack.Screen name='detail-umkm' component={DetailUmkm} options={{headerShown:false}} />
        <Stack.Screen name='umkm-suvenir' component={UmkmSuvenir} options={{headerShown:false}} />
        <Stack.Screen name='umkm-pakaian' component={UmkmPakaian} options={{headerShown:false}} />
        <Stack.Screen name='fasilitas' component={Fasilitas} options={{headerShown:false}} />
        <Stack.Screen name='homestay' component={Homestay} options={{headerShown:false}} />
        <Stack.Screen name='detail-homestay' component={DetailHomestay} options={{headerShown:false}} />
        <Stack.Screen name='ibadah' component={Ibadah} options={{headerShown:false}} />
        <Stack.Screen name='detail-ibadah' component={DetailIbadah} options={{headerShown:false}} />
        <Stack.Screen name='profile' component={Profile} options={{headerShown:false}} />
        <Stack.Screen name='pemerintahan' component={Pemerintahan} options={{headerShown:false}} />
        <Stack.Screen name='kesehatan' component={Kesehatan} options={{headerShown:false}} />
        <Stack.Screen name='bank' component={Bank} options={{headerShown:false}} />
        <Stack.Screen name='rumah-makan' component={RumahMakan} options={{headerShown:false}} />
        <Stack.Screen name='kesehatan-detail' component={DetailKesehatan} options={{headerShown:false}} />
        <Stack.Screen name='bank-detail' component={DetailBank} options={{headerShown:false}} />
        <Stack.Screen name='rumah-makan-detail' component={DetailRumahMakan} options={{headerShown:false}} />
      </Stack.Navigator>
      <StatusBar backgroundColor='#ffffff' style='dark' translucent={false} />
    </NavigationContainer>
  );
}
