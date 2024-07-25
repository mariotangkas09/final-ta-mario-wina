import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,ScrollView  } from "react-native";
import HeaderAnggaran from "../../components/layout/headerdetailapbdes";
import { getAnggaranById } from "../../services/desaDigital.services";
export default function DetailApbdes({navigation,route}){
     const { id } = route.params;

     const [anggaran, setAnggaran] = useState([]);

     useEffect(() => {
          const fetchAnggaran = async () => {
               try {
                    const data = await getAnggaranById(id);
                    setAnggaran(data);
               } catch (error) {
                    console.error('Error fetching anggaran:', error);
                    setError('Gagal mengambil data anggaran. Silakan coba lagi nanti.');
               }
          };

          fetchAnggaran();
     }, [id]);



     return(
          <View style={styles.container}>
               <HeaderAnggaran navigation={navigation}/>
               <View style={styles.content}>
                    <ScrollView>
                          <View>
                         <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',marginTop:15}}>
                         Transparansi Anggaran 
                         
                         </Text>
                         <View style={styles.boxAnggaran}>
                              <Text style={styles.titleAnggaran}>APB Desa {anggaran.tahun_anggaran} Pelaksanaan</Text>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                         </View>

                         <View style={styles.boxAnggaran}>
                              <Text style={styles.titleAnggaran}>APB Desa {anggaran.tahun_anggaran} Pelaksanaan</Text>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                         </View>

                         <View style={styles.boxAnggaran}>
                              <Text style={styles.titleAnggaran}>APB Desa {anggaran.tahun_anggaran} Pelaksanaan</Text>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                              <View style={{marginTop:5,padding:5}}>
                                   <Text style={styles.subtitle}>
                                        Pendapatan Desa
                                   </Text>
                                   <View style={styles.grupAnggaran}>
                                        <Text style={styles.anggaran}>Rp.124.000</Text>
                                        <Text style={styles.anggaran1}>Realisasi | Anggaran</Text>
                                        <Text style={styles.anggaran}>Rp.124.000.000</Text>
                                   </View>
                              </View>
                         </View>
                    </View>
                    </ScrollView>
                   
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          flexDirection:'column',
          backgroundColor:'#ffffff'
     },
     content:{
          flex:1,
          marginBottom:10,
          display:'flex',
          justifyContent:'center',
          marginRight:17,
          marginLeft:17,

        
     },
     boxAnggaran:{
          marginTop:15,
          borderWidth:2,
          borderColor:'#676A6C',
          borderRadius:5

     },
     titleAnggaran:{
          textAlign:'center',
          color:'white',
          backgroundColor:'#40A2E3',
          padding:11
     },
     subtitle:{
          fontSize:14,
          fontWeight:"bold"
     },
     grupAnggaran:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
     },
     anggaran:{
          fontSize:11,
          fontWeight:"600",
          marginTop:4,
          width:110,
     },
     anggaran1:{
          fontSize:11,
          fontWeight:"600",
          marginTop:4,
          width:110,
          color:'#676A6C'
     }
})