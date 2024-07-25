import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import HeaderDesa from '../../components/layout/headerDesa';
import Footer from '../../components/layout/footer';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfilDesa({navigation}) {
     
     return (
          <View style={styles.container}>
               <HeaderDesa navigation={navigation} />
               <ScrollView style={styles.scrollView}>
                    <View style={styles.desaInfo}>
                         <Image source={require('../../../assets/desa.png')} style={{ flex: 0 }} />
                         <View style={styles.containerInfo}>
                              <View style={styles.box}>
                                   <Text style={styles.textInfo}>
                                        Lorem ipsum dolor sit amet consectetur. Fringilla blandit tristique tincidunt id gravida malesuada risus feugiat tristique. Pretium nulla id diam mi ut id id elementum convallis. In phasellus ut ridiculus arcu fermentum. Et habitant porta faucibus non eget aliquet ultrices eu sed. Vel feugiat vitae nibh et tortor faucibus neque diam amet. A nec egestas eget imperdiet amet urna mattis tristique nulla. Amet praesent nulla elit commodo. Velit at mattis tortor vitae sit. Molestie a diam non sagittis egestas turpis at elit commodo. Porta sed ut pellentesque volutpat neque massa dolor molestie. Ipsum vel sed vel feugiat pretium ut nunc. Gravida euismod faucibus dolor donec sagittis posuere diam. Iaculis pulvinar pellentesque massa in mauris ac.
                                   </Text>
                                   <Text style={{ color: '#464C5E', fontWeight: 'bold' }}>Informasi Desa</Text>
                                   <View style={styles.contact}>
                                        <FontAwesome name="windows" size={15} color="#667085" />
                                        <Text style={styles.textContact}>Kode Wilayah 32.12.14.2024</Text>
                                   </View>
                                   <View style={styles.contact}>
                                        <FontAwesome name="home" size={18} color="#667085" />
                                        <Text style={styles.textContact}>Desa Tomok</Text>
                                   </View>
                                   <View style={styles.contact}>
                                        <FontAwesome name="phone" size={18} color="#667085" />
                                        <Text style={styles.textContact}>08154378979</Text>
                                   </View>
                                   <View style={styles.contact}>
                                        <FontAwesome name="inbox" size={18} color="#667085" />
                                        <Text style={styles.textContact}>@desatomok.mail.com</Text>
                                   </View>
                                   <View style={styles.contact}>
                                        <FontAwesome name="map" size={16} color="#667085" />
                                        <Text style={styles.textContact}>Desa Tomok</Text>
                                   </View>
                                   <Text style={{ color: '#464C5E', fontWeight: 'bold', marginTop: 10 }}>Pemimpin Desa</Text>
                                   <View style={styles.containerTable}>
                                        <View style={styles.row}>
                                             <Text style={[styles.cell,{fontWeight:'bold'}]}>No</Text>
                                             <Text style={[styles.cell,{fontWeight:'bold'}]}>Tahun Menjabat</Text>
                                             <Text style={[styles.cell,{fontWeight:'bold'}]}>Nama Kepala Desa</Text>
                                        </View>
                                        <View style={styles.row}>
                                             <Text style={styles.cell}>1</Text>
                                             <Text style={styles.cell}>2011-2016</Text>
                                             <Text style={styles.cell}>Budi</Text>
                                        </View>
                                        <View style={styles.row}>
                                             <Text style={styles.cell}>2</Text>
                                             <Text style={styles.cell}>20216-2021</Text>
                                             <Text style={styles.cell}>DImas</Text>
                                        </View>
                                   </View>
                              </View>
                         </View>
                    </View>
               </ScrollView>
               <Footer navigation={navigation}/>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
     },
     scrollView: {
          flex: 1,
     },
     desaInfo: {
          display: 'flex',
     },
     containerInfo: {
          backgroundColor: '#ffffff',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          flex: 1,
          flexGrow: 1,
          marginTop: -35
     },
     textInfo: {
          fontSize: 12,
          textAlign: 'justify',
          lineHeight: 15,
     },
     box: {
          padding: 20,
     },
     contact: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
     },
     textContact: {
          color: '#667085',
          marginLeft: 20,
     },
     containerTable: {
          marginTop: 20,
          borderColor: '#ccc',
     },
     row: {
          flexDirection: 'row',
          borderColor: '#ccc',
     },
     cell: {
          flex: 1,
          padding: 10,
          textAlign: 'center',
     },

     scrollView: {
          flex: 1,
     },
});
