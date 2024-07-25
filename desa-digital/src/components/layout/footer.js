import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HomeIcon from '../icon/home';
import WisataIcon from '../icon/wisata';
import FasilitasIcon from '../icon/fasilitas';
import UmkmIcon from '../icon/umkm';
import ProfilIcon from '../icon/profil';

export default function Footer({ navigation }) {
     const GoHome = () => {
          navigation.navigate('home')
     }
     const GoProfilDesa = () => {
          navigation.navigate('profile')
     }
     const GoUMKM = () =>{
          navigation.navigate('umkm')
     }
     const GoWisata = () =>{
          navigation.navigate('wisata');
     }
     const GoFasilitas = () =>{
          navigation.navigate('fasilitas');
     }
     return (
          <View style={styles.Container}>
               <TouchableOpacity onPress={GoHome}>
                    <View style={styles.menuContainer}>
                         <HomeIcon size={27}/>
                         <Text style={styles.captionMenu}>
                              Beranda
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoWisata}>
                    <View style={styles.menuContainer}>
                         <WisataIcon size={27}/>
                         <Text style={styles.captionMenu}>
                              Objek Wisata
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoFasilitas}>
                    <View style={styles.menuContainer}>
                         <FasilitasIcon size={27}/>
                         <Text style={styles.captionMenu}>
                              Fasilitas
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoUMKM}>
                    <View style={styles.menuContainer}>
                         <UmkmIcon size={27} />
                         <Text style={styles.captionMenu}>
                              UMKM
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoProfilDesa}>
                    <View style={styles.menuContainer}>
                         <ProfilIcon size={27} />
                         <Text style={styles.captionMenu}>
                              Profil Desa
                         </Text>
                    </View>
                   
               </TouchableOpacity>

          </View>
     );
}

const styles = StyleSheet.create({
     Container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#ffffff'
     },
     menuContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10
     },
     captionMenu: {
          fontSize: 11,
          color: '#667085'
     },
     
});
