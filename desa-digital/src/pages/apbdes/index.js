import React, { useEffect, useState } from "react";
import { View,Text,Image,StyleSheet, ScrollView,TouchableOpacity } from "react-native";
import HeaderAnggaran from "../../components/layout/headerSanggaran";
import RightIcon from '../../components/icon/right'
import { getAnggaran } from "../../services/desaDigital.services";
export default function Anggaran({navigation}){
     const [anggaran, setAnggaran] = useState([]);

     useEffect(() =>{
          const fetchAnggaran = async () =>{
               try{
                 const data = await getAnggaran();
               setAnggaran(data)   
               } catch (error) {
                    console.error('Error fetching anggaran:', error);
               }
               
          }
          fetchAnggaran();
     },[])
   
     return (
          <View style={styles.container}>
               <HeaderAnggaran navigation={navigation}/>
               <View style={styles.content}>
                    <Image source={require('../../../assets/anggaran.png')} style={styles.img}/>
                    <Text style={styles.bigTitle}>Rencana Anggaran Pendapatan dan Belanja Desa (RAPBDes) Tahun 2024</Text>
                    <ScrollView>
                         {anggaran.map(anggaranData => (
                             <TouchableOpacity key={anggaranData.id} style={styles.btn} onPress={() => navigation.navigate('anggaran-detail', { id: anggaranData.id })}>
                            <View style={styles.box}>
                              <Text style={styles.title}>Rencana Anggaran Pendapatan dan Belanja Desa (RAPBDes) Tahun {anggaranData.tahun_anggaran}</Text>
                              <RightIcon/>
                         </View>   
                         </TouchableOpacity> 
                         ))}
                         
                    </ScrollView>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          flexDirection:'column',
          justifyContent:'space-between',
          backgroundColor:'#ffffff'
     },
     content:{
          flex:1,
          marginBottom:10
     },
     bigTitle:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          textAlign:"center",
          marginTop:-50,
          fontSize:15,
          color:'#ffffff',
          fontWeight:'700',
          marginBottom:20

     },
     box:{
        
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          borderColor:'#888888',
          borderWidth:1,
          borderStyle:'solid',
          borderTopWidth:0,
          borderLeftWidth:0,
          borderRightWidth:0,
          marginLeft:18,
          marginRight:18,
          marginBottom:2,
          paddingBottom:5,
          marginTop:26
       
     },
     img:{
          width:'full'
     }
})