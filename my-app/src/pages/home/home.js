import { React, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import HeaderHome from '../../components/layout/headerHome'
import Footer from '../../components/layout/footer'
import { SliderBox } from 'react-native-image-slider-box'

export default function Home({ navigation }) {

     const [images, setImages] = useState([
          "https://source.unsplash.com/1024x768/?nature",
          "https://source.unsplash.com/1024x768/?water",
          "https://source.unsplash.com/1024x768/?girl",
          "https://source.unsplash.com/1024x768/?tree", // Network image
          require('../../../assets/logo.png'),          // Local image
     ]);

     const GoDesa = () => {
          navigation.navigate('profildesa')
     }
     const GoUmkm = () => {
          navigation.navigate('umkm')
     }
     const GoKegiatan = ()=>{
          navigation.navigate('kegiatan')
     }
     const GoWisata = () =>{
          navigation.navigate('wisata')
     }

     return (
          <View style={styles.Container} >
               <HeaderHome />
               <View style={styles.slider}>
                    <SliderBox
                         images={images}
                         sliderBoxHeight={180}
                         onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                         dotColor="#40A752"
                         inactiveDotColor="#90A4AE"
                         dotStyle={{
                              width: 10,
                              height: 10,
                              borderRadius: 15,
                              marginHorizontal: 0,
                              padding: 0,
                              margin: 0,

                         }}
                    />
                    <View style={styles.layananContainer}>
                         <Text style={styles.layanan}>
                              Layanan Untukmu
                         </Text>
                         <View style={styles.ContainerLayanan}>
                              <View style={styles.boxLayanan}>
                                   <TouchableOpacity onPress={GoDesa}>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/profildesa.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Profil Desa
                                             </Text>
                                        </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity onPress={GoUmkm}>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/umkm.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Produk UMKM
                                             </Text>
                                        </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity onPress={GoWisata}>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/wisata.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Objek Wisata
                                             </Text>
                                        </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity onPress={GoKegiatan}>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/kegiatan.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Kegiatan Desa
                                             </Text>
                                        </View>
                                   </TouchableOpacity>


                              </View>
                              <View style={[styles.boxLayanan, { marginTop: 20 }]}>
                                   <TouchableOpacity>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/transportasi.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Transportasi
                                             </Text>
                                        </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/pengumuman.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Pengumuman
                                             </Text>
                                        </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/administrasi.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Administrasi Desa
                                             </Text>
                                        </View>
                                   </TouchableOpacity>
                                   <TouchableOpacity>
                                        <View style={styles.layanan1}>
                                             <Image source={require("../../../assets/layanan/organisasi.png")} />
                                             <Text style={styles.captionLayanan}>
                                                  Organisasi Desa
                                             </Text>
                                        </View>
                                   </TouchableOpacity>


                              </View>

                         </View>
                    </View>
               </View>
               <Footer navigation={navigation} />
          </View>
     )
}

const styles = StyleSheet.create({
     Container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
     },
     slider: {
          top: 100,
          display: 'flex',
          position: 'absolute'

     },
     layanan: {
          color: '#40A752',
          fontSize: 14,
          fontWeight: 'bold',

     },
     layananContainer: {
          padding: 10
     },
     captionLayanan: {
          fontSize: 11,
          color: '#667085',
          fontWeight: '500',
          width: 70,
          textAlign: 'center'
     },
     boxLayanan: {
          flexDirection: 'row',
          justifyContent: 'space-around'
     },
     layanan1: {
          alignItems: 'center'
     },
     ContainerLayanan: {
          marginTop: 30
     }

})
