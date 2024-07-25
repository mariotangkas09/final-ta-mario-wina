import React from 'react';
import Footer from '../../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import HeaderFasilitas from '../../../components/layout/headerFasilitas';
import kesehatan from '../../../../assets/fasilitas/kesehatan.png'
import ibadah from '../../../../assets/fasilitas/ibadah.png'
import homestay from '../../../../assets/fasilitas/homestay.png'
import makan from '../../../../assets/fasilitas/makan.png'
import bank from '../../../../assets/fasilitas/bak.png'
export default function Fasilitas({ navigation }) {
     const goHomestay = () => {
          navigation.navigate('homestay')
     }
     const goIbadah = () => {
          navigation.navigate('ibadah')
     }
     const goKesehatan = () => {
          navigation.navigate('kesehatan')
     }
     const goMakanan = () => {
          navigation.navigate('rumah-makan')
     }
     const goBank = () => {
          navigation.navigate('bank')
     }
     return (
          <View style={styles.container}>
               <HeaderFasilitas navigation={navigation} />
               <View style={styles.content}>
                   <ScrollView>
                   <View style={styles.box}>
                         <View>
                              <TouchableOpacity onPress={goKesehatan}>
                                    <Image source={kesehatan} />
                              <Text style={styles.txt}>Kesehatan</Text>
                              </TouchableOpacity>
                             
                         </View>
                         <View>
                              <TouchableOpacity onPress={goIbadah}>
                              <Image source={ibadah}/>
                              <Text style={styles.txt}>Rumah Ibadah</Text>
                              </TouchableOpacity>
                         </View>
                    </View>
                    <View>
                         <TouchableOpacity onPress={goHomestay}>
                               <Image source={homestay} />
                         <Text style={styles.txtH}>
                              Homestay
                         </Text>
                         </TouchableOpacity>
                        
                    </View>
                    <View style={styles.box}>
                         <View>
                              <TouchableOpacity onPress={goMakanan}>
                                 <Image source={makan} />
                              <Text style={styles.txt}>Rumah Makan</Text>  
                              </TouchableOpacity>
                              
                         </View>
                         <View>
                              <TouchableOpacity onPress={goBank}>
                              <Image source={bank}/>
                              <Text style={styles.txt}>Bank</Text>
                              </TouchableOpacity>
                              
                         </View>
                    </View>
                   </ScrollView>
               </View>
               <Footer navigation={navigation} />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
     },
     content: {
          flex: 1,
          margin: 18,

     },
     box:{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:10,
          marginBottom:10
     },
     txtH:{
          position:'absolute',
          marginTop:150,
          marginLeft:9,
          fontSize:16,
          color:'#FFFFFF',
          fontWeight:'900'
     },
     txt:{
          position:'absolute',
          marginTop:180,
          marginLeft:9,
          fontSize:16,
          color:'#FFFFFF',
          fontWeight:'900'
     }

});
