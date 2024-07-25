import React from 'react'
import HeaderUMKM from '../../../components/layout/headerumkm'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Footer from '../../../components/layout/footer'
import makanan from '../../../../assets/umkm/makanan.png'
import pakian from '../../../../assets/umkm/pakaian.png'
import suvenir from '../../../../assets/umkm/suvenir.png'
export default function UMKM({navigation}) {
     const goMakanan = () =>{
          navigation.navigate('umkm-makanan')
     }
     const goSuvenir = () =>{
          navigation.navigate('umkm-suvenir')
     }
     const goPakaian = () =>{
          navigation.navigate('umkm-pakaian')
     }
     return (
          <View style={style.container}>
               <HeaderUMKM navigation={navigation}/>
               <View style={style.content}>
                    <View style={style.BoxCategory}>
                         <TouchableOpacity style={style.box} onPress={goMakanan}>
                              <Image source={makanan} />
                              <Text style={style.txt}>
                                   Makanan
                              </Text>
                         </TouchableOpacity>
                    </View>
                    <View style={style.BoxCategory}>
                         <TouchableOpacity style={style.box} onPress={goSuvenir}>
                              <Image source={suvenir} />
                              <Text style={style.txt}>
                                   Suvenir
                              </Text>
                         </TouchableOpacity>
                    </View>
                    <View style={style.BoxCategory}>
                         <TouchableOpacity style={style.box} onPress={goPakaian}>
                              <Image source={pakian} />
                              <Text style={style.txt}>
                                   Pakaian
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
               <Footer navigation={navigation}/>
          </View>
     )
}

const style = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
     },
     content: {
          flex: 1,
          marginBottom: 10
     },
     txt: {
          position: 'absolute',
          fontSize: 26,
          color: "#FFFFFF",
          fontWeight: '600'
     },
     box: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
     },
     BoxCategory: {
          marginTop: 20
     }
})