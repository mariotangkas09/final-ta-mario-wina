import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import HeaderPenduduk from "../../components/layout/headerPenduduk";
import DoughnutChart from "../../components/ui/diagram";
import { getPenduduk, getProfil } from "../../services/desaDigital.services";

export default function PendudukDetail({navigation}) {
     const [penduduk, setPenduduk] = useState([]);
     const [totalLakiLaki, setTotalLakiLaki] = useState(0);
     const [totalPerempuan, setTotalPerempuan] = useState(0);
     const [totalWna, setTotalWna] = useState(0);
     const [totalWni, setTotalWni] = useState(0);
     const [error, setError] = useState(null);
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
 
     useEffect(() => {
         const fetchData = async () => {
             try {
                 const pendudukData = await getPenduduk();
                 setPenduduk(pendudukData);
 
                 // Hitung jumlah laki-laki dan perempuan dari semua penduduk
                 let countLakiLaki = 0;
                 let countPerempuan = 0;
                 let countWna = 0;
                 let countWni = 0;
 
                 pendudukData.forEach((penduduk) => {
                     if (penduduk.jenis_kelamin === 'Laki-laki') {
                         countLakiLaki++;
                     } else if (penduduk.jenis_kelamin === 'Perempuan') {
                         countPerempuan++;
                     }

                     if (penduduk.kewarganegaraan === 'WNA') {
                         countWna++;
                     } else if (penduduk.kewarganegaraan === 'WNI') {
                         countWni++;
                     }
                 });
                 // Simpan jumlah laki-laki dan perempuan dalam state
                 setTotalLakiLaki(countLakiLaki);
                 setTotalPerempuan(countPerempuan);
                 setTotalWna(countWna);
                 setTotalWni(countWni);
             } catch (error) {
                 console.error('Error fetching penduduk:', error);
                 setError('Gagal mengambil data penduduk. Silakan coba lagi nanti.');
             }
         };
 
         fetchData();
     }, []);

     const data = [
          { color: '#D6AC42', percentage: (totalLakiLaki / (totalLakiLaki + totalPerempuan)) * 100 },
          { color: '#9A701F', percentage: (totalPerempuan / (totalLakiLaki + totalPerempuan)) * 100 },
      ];
      const wa = [
          { color: '#D6AC42', percentage: (totalWna / (totalWna + totalWni)) * 100 },
          { color: '#9A701F', percentage: (totalWni / (totalWna + totalWni)) * 100 },
      ];
      const totalPenduduk = totalLakiLaki + totalPerempuan;
      const totalKewarganegaran = totalWna + totalWni;

      const formattedPercentage = (percentage) => {
          return percentage.toFixed(2) + "%";
     };

     const persentaseLakiLaki = formattedPercentage(totalLakiLaki / totalPenduduk * 100);
     const persentasePerempuan = formattedPercentage(totalPerempuan / totalPenduduk * 100);
     const persentaseWna = formattedPercentage(totalWna / totalKewarganegaran * 100);
     const persentaseWni = formattedPercentage(totalWni / totalKewarganegaran * 100);
     const totalPersentase = formattedPercentage((totalLakiLaki / totalPenduduk * 100) + (totalPerempuan / totalPenduduk * 100));
     const wnPersentase = formattedPercentage((totalWna / totalKewarganegaran * 100) + (totalWni / totalKewarganegaran * 100));
 
     return (
          <View style={styles.container}>
               <HeaderPenduduk navigation={navigation} />
               <View style={styles.content}>
                    <Text style={styles.bigTitle}>{profil.nama_desa}</Text>
                    <ScrollView>
                         <View style={styles.boxJK}>
                              <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Jenis Kelamin</Text>
                                   <View style={styles.border}>
                                        <View style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <DoughnutChart data={data} />
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Laki-laki</Text>
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak2}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Perempuan</Text>
                                        </View>
                                        {/* view 1 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Laki-laki</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>{totalLakiLaki}</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>{persentaseLakiLaki}</Text></View>
                                        </View>
                                        {/* view 2 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Perempuan</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>{totalPerempuan}</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>{persentasePerempuan}</Text></View>
                                        </View>
                                        {/* view 3 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Total</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>{totalPenduduk}</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>{totalPersentase}</Text></View>
                                        </View>
                                   </View>

                             
                         </View>
                         <View style={styles.boxJK}>
                              <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Kewarganegaraan</Text>
                           
                                   <View style={styles.border}>
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                        <DoughnutChart data={wa} />
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Warga negara indonesia</Text>
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak2}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Warga negara asing</Text>
                                        </View>
                                        {/* view 1 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>WNI</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>{totalWni}</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>{persentaseWni}</Text></View>
                                        </View>
                                        {/* view 2 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>WNA</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>{totalWna}</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>{persentaseWna}</Text></View>
                                        </View>
                                        {/* view 3 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Total</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>{totalKewarganegaran}</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>{wnPersentase}</Text></View>
                                        </View>
                                   </View>

                             
                         </View>
                    </ScrollView>

               </View>
          </View>
     )
}



const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
     },
     content: {
          marginLeft: 22,
          marginRight: 22,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom:100
     },
     bigTitle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: "center",
          fontSize: 15,
          color: '#481111',
          fontWeight: '700',
          marginBottom: 20,
          marginTop:10
     },
     boxJK: {
          backgroundColor: '#0369A1',
          padding:8,
          borderRadius:5,
          marginTop:10,
          paddingBottom:10
     },
     kotak: {
          backgroundColor: '#9A701F',
          width: 20,
          height: 20
     },
     kotak2: {
          backgroundColor: '#D6AC42',
          width: 20,
          height: 20
     },
     boxInfo: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10

     },
     border:{
          borderWidth:1,
          borderColor:'#ffffff',
          padding:20
     },
     info:{
          width:1/3
     }
})