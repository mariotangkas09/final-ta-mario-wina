import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import HeaderPendudukUtama from "../../components/layout/headerUtamaPenduduk";
import DusunIcon from "../../components/icon/dusun";
import { getDusun } from "../../services/desaDigital.services";

export default function Penduduk({navigation}) {
     const [dusun, setDusun] = useState([]);

     useEffect(() =>{
          const fetchDusun = async () =>{
               try{
                 const data = await getDusun();
                 setDusun(data)   
               } catch (error) {
                    console.error('Error fetching dusun:', error);
               }
               
          }
          fetchDusun();
     },[])
     
     const goPenduduk = () =>{
          navigation.navigate('detail-penduduk')
     }
     return (
          <View style={styles.container}>
               <HeaderPendudukUtama navigation={navigation} />
               <Image source={require('../../../assets/penduduk.png')} style={styles.img}/>
               <View style={styles.content}>
                    <Text style={styles.bigTitle}>Statistik Data Penduduk Desa Sosor Dolok</Text>
                    <ScrollView>
                         {dusun.map(dusunData=>(
                             <TouchableOpacity key={dusunData.id} style={styles.btn} onPress={() => navigation.navigate('detail-dusun', { id: dusunData.id })}>
                         <View style={styles.boxDusun}>
                              <View style={styles.bgDusun}>
                                   <DusunIcon size={36} />
                              </View>
                              <Text style={styles.namaDusun}>
                                   {dusunData.nama_dusun}
                              </Text>
                         </View>
                         </TouchableOpacity> 
                         ))}
                         
                         <TouchableOpacity onPress={goPenduduk}>
                         <View style={styles.boxDusun}>
                              <View style={styles.bgDusun}>
                                   <DusunIcon size={36} />
                              </View>
                              <Text style={styles.namaDusun}>
                                   Data Penduduk Desa
                              </Text>
                         </View>
                         </TouchableOpacity>
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
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
     },
     bigTitle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: "center",
          marginTop: -50,
          fontSize: 15,
          color: '#ffffff',
          fontWeight: '700',
          marginBottom: 20
     },
     bgDusun: {
          backgroundColor: '#427DD6',
          padding: 15,
          borderRadius:37
     },
     boxDusun: {
          flex:1,
          display: "flex",
          flexDirection: 'row',
          marginTop: 20,
          alignItems:'center',
          borderRadius:37,
          borderColor:'#427DD6',
          borderWidth:3
     },
     namaDusun:{
          marginLeft:20,
          fontSize:18
     },
     img:{
          width:'full'
     }
})
