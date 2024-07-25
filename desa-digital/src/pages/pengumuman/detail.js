import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,ScrollView,Image } from "react-native";
import HeaderPengumuman from "../../components/layout/headerDetailPengumuman";
import { getPengumumanById } from "../../services/desaDigital.services";
import { Link } from "@react-navigation/native";

export default function DetailPengumuman({ navigation, route }) {
     const { id } = route.params;
     const [pengumuman, setPengumuman] = useState(null);
   
     useEffect(() => {
       const fetchPengumuman = async () => {
         try {
           const data = await getPengumumanById(id);
           setPengumuman(data);
         } catch (error) {
           console.error('Error fetching pengumuman:', error);
         }
       };
   
       fetchPengumuman();
     }, [id]);
   
     if (!pengumuman) {
       return (
         <View style={styles.container}>
           <HeaderPengumuman navigation={navigation} />
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
         <HeaderPengumuman navigation={navigation} />
         <View style={styles.content}>
           <ScrollView>
           <Image source={{ uri: `https://api-admin.desasosordolok.id/api/pengumuman_cover/${pengumuman.file_pengumuman}` }} width={400} height={150} borderRadius={5} style={{marginTop:10}} />
             <Text style={styles.title}>{pengumuman.judul_pengumuman}</Text>
             <Text style={styles.waktu}>{formatDate(pengumuman.tgl_publikasi)}</Text>
             <Text style={styles.deskripsi}>
             {truncateText(cleanHTMLTags(pengumuman.deskripsi_pengumuman))}
             </Text>
             <Text style={styles.file}>File</Text>
             <View style={styles.boxfile}>
               <Text>
               </Text>
             </View>
           </ScrollView>
         </View>
       </View>
     );
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
          marginBottom:10,
          marginLeft:20,
          marginRight:20
     },
     title:{
          fontSize:16,
          fontWeight:'700',
          marginTop:18
     },
     waktu:{
          fontSize:12,
          color:'rgba(103, 106, 108, 0.7)'
     },
     deskripsi:{
          fontSize:14,
          letterSpacing:0.3,
          textAlign:"justify",
          marginTop:10
     },
     file:{
          fontSize:16,
          fontWeight:'700',
          marginTop:18
     },
     boxfile:{
          backgroundColor:'rgba(103, 106, 108, 0.2)',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'column',
          padding:10,
          borderRadius:5,
          marginTop:10
     }
})