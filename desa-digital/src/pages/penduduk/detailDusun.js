import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HeaderPenduduk from "../../components/layout/headerPenduduk";
import DoughnutChart from "../../components/ui/diagram";
import { getDusunById, getPenduduk } from "../../services/desaDigital.services";

export default function DusunDetail({ navigation, route }) {
     const { id } = route.params;
     const [dusun, setDusun] = useState({});
     const [penduduk, setPenduduk] = useState([]);
     const [totalLakiLaki, setTotalLakiLaki] = useState(0);
     const [totalPerempuan, setTotalPerempuan] = useState(0);
     const [wnaTotal, setTotalWna] = useState(0);
     const [wniTotal, setTotalWni] = useState(0);
     const [error, setError] = useState(null);

     useEffect(() => {
          const fetchDusun = async () => {
               try {
                    const data = await getDusunById(id);
                    setDusun(data);
               } catch (error) {
                    console.error('Error fetching dusun:', error);
                    setError('Gagal mengambil data dusun. Silakan coba lagi nanti.');
               }
          };

          fetchDusun();
     }, [id]);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const pendudukData = await getPenduduk();
                    setPenduduk(pendudukData);

                    // Filter penduduk berdasarkan id_dusun
                    const filteredPenduduk = pendudukData.filter(p => p.id_dusun === id);

                    // Hitung total jumlah laki-laki dan perempuan
                    let totalLaki = filteredPenduduk.filter(p => p.jenis_kelamin === 'Laki-laki').length;
                    let totalPerempuan = filteredPenduduk.filter(p => p.jenis_kelamin === 'Perempuan').length;

                    let wnaTot = filteredPenduduk.filter(p => p.kewarganegaraan === "WNA").length;
                    let wniTot = filteredPenduduk.filter(p => p.kewarganegaraan === "WNI").length;

                    setTotalLakiLaki(totalLaki);
                    setTotalPerempuan(totalPerempuan);
                    setTotalWna(wnaTot);
                    setTotalWni(wniTot);
               } catch (error) {
                    console.error('Error fetching penduduk:', error);
                    setError('Gagal mengambil data penduduk. Silakan coba lagi nanti.');
               }
          };

          fetchData();
     }, [id]);

     const totalPenduduk = totalLakiLaki + totalPerempuan;
     const totalKewarganegaran = wnaTotal + wniTotal;

     const data = [
          { color: '#D6AC42', percentage: totalPenduduk ? (totalLakiLaki / totalPenduduk) * 100 : 0 },
          { color: '#9A701F', percentage: totalPenduduk ? (totalPerempuan / totalPenduduk) * 100 : 0 },
     ];

     const wn = [
          { color: '#D6AC42', percentage: totalKewarganegaran ? (wnaTotal / totalKewarganegaran) * 100 : 0 },
          { color: '#9A701F', percentage: totalKewarganegaran ? (wniTotal / totalKewarganegaran) * 100 : 0 },
     ];
     const formattedPercentage = (percentage) => {
          return percentage.toFixed(2) + "%";
     };

     const persentaseLakiLaki = formattedPercentage(totalLakiLaki / totalPenduduk * 100);
     const persentasePerempuan = formattedPercentage(totalPerempuan / totalPenduduk * 100);
     const persentaseWna = formattedPercentage(wnaTotal / totalKewarganegaran * 100);
     const persentaseWni = formattedPercentage(wniTotal / totalKewarganegaran * 100);
     const totalPersentase = formattedPercentage((totalLakiLaki / totalPenduduk * 100) + (totalPerempuan / totalPenduduk * 100));
     const wnPersentase = formattedPercentage((wnaTotal / totalKewarganegaran * 100) + (wniTotal / totalKewarganegaran * 100));

     return (
          <View style={styles.container}>
               <HeaderPenduduk navigation={navigation} />


               <View style={styles.content}>
                    <Text style={styles.bigTitle}>{dusun.nama_dusun} </Text>
                    <ScrollView>
                         <View style={styles.boxJK}>
                              <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Jenis Kelamin</Text>
                              <View style={styles.border}>
                                   <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
                                   <View style={{ flexDirection: 'row', flex: 1, borderRadius: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#FFD700', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>Laki-laki</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{ padding: 5, textAlign: 'center' }}>{totalLakiLaki}</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#E6E6FA', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>{persentaseLakiLaki}</Text></View>
                                   </View>
                                   {/* view 2 */}
                                   <View style={{ flexDirection: 'row', flex: 1, borderRadius: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#FFD700', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>Perempuan</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{ padding: 5, textAlign: 'center' }}>{totalPerempuan}</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#E6E6FA', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>{persentasePerempuan}</Text></View>
                                   </View>
                                   {/* view 3 */}
                                   <View style={{ flexDirection: 'row', flex: 1, borderRadius: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#FFD700', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>Total</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{ padding: 5, textAlign: 'center' }}>{totalPenduduk}</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#E6E6FA', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>{totalPersentase}</Text></View>
                                   </View>
                              </View>


                         </View>
                         <View style={styles.boxJK}>
                              <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Kewarganegaraan</Text>

                              <View style={styles.border}>
                                   <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                        <DoughnutChart data={wn} />
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
                                   <View style={{ flexDirection: 'row', flex: 1, borderRadius: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#FFD700', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>WNI</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{ padding: 5, textAlign: 'center' }}>{wniTotal}</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#E6E6FA', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>{persentaseWni}</Text></View>
                                   </View>
                                   {/* view 2 */}
                                   <View style={{ flexDirection: 'row', flex: 1, borderRadius: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#FFD700', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>WNA</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{ padding: 5, textAlign: 'center' }}>{wnaTotal}</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#E6E6FA', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>{persentaseWna}</Text></View>
                                   </View>
                                   {/* view 3 */}
                                   <View style={{ flexDirection: 'row', flex: 1, borderRadius: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1, backgroundColor: '#FFD700', borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>Total</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{ padding: 5, textAlign: 'center' }}>{totalKewarganegaran}</Text></View>
                                        <View style={{ flex: 1, backgroundColor: '#E6E6FA', borderTopRightRadius: 5, borderBottomRightRadius: 5 }} ><Text style={{ padding: 5, textAlign: 'center' }}>{wnPersentase}</Text></View>
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
          marginBottom: 100
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
          marginTop: 10
     },
     boxJK: {
          backgroundColor: '#0369A1',
          padding: 8,
          borderRadius: 5,
          marginTop: 10,
          paddingBottom: 10
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
     border: {
          borderWidth: 1,
          borderColor: '#ffffff',
          padding: 20
     },
     info: {
          width: 1 / 3
     }
})