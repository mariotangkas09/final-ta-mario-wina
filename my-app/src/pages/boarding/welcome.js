import React, { useState } from 'react';
import {
     SafeAreaView,
     StyleSheet,
     View,
     Text,
     Image,
     Button,
     TouchableOpacity
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';

const App = ({ navigation }) => {
     const [showRealApp, setShowRealApp] = useState(false);
     const [currentIndex, setCurrentIndex] = useState(0);

     const GoHome = () => {
          navigation.navigate('home')
     };

     const onSlideChange = (index) => {
          setCurrentIndex(index);
     };

     const onDone = () => {
          setShowRealApp(true);
     };

     const onPrev = () => {
          setCurrentIndex(currentIndex - 1);
     };

     const RenderNextButton = () => {
          return (
               <View style={styles.buttonCircle}>
                    <Icon
                         name="arrow-right"
                         color="#40A752"
                         size={24}
                    />
               </View>
          );
     };
     const RenderPrevButton = () => {
          // hide prevbutton
          if (currentIndex === 0 || currentIndex === slides.length - 1) {
               return null;
          }
          return (
               <TouchableOpacity onPress={onPrev} style={styles.buttonCircle}>
                    <Icon
                         name="arrow-left"
                         color="#40A752"
                         size={24}
                    />
               </TouchableOpacity>
          );
     };

     const RenderDoneButton = () => {
          return (
               <View style={styles.buttonCircle}>
                    <TouchableOpacity onPress={GoHome} style={styles.btn}>
                         <Text style={{ color: "#ffffff" }}>
                              Selamat Datang
                         </Text>
                    </TouchableOpacity>
               </View>
          );
     };

     const RenderItem = ({ item }) => {
          let customStyles = {};

          if (item.key === 's3') {
               // style s3
               customStyles = {
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    marginTop: -100
               };
          } else if (item.key === 's1' || item.key === 's2') {
               // style s1 s2
               customStyles = {
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    paddingBottom: 100,
               };


          }

          return (
               <View style={[styles.slideContainer, customStyles]}>
                    <Text style={styles.introTitleStyle}>
                         {item.textTitle}
                    </Text>
                    <Image
                         style={[styles.introImageStyle, item.key === 's2' && styles.s2image]}
                         source={item.image}
                    />
                    <Text style={[styles.textTitle, item.key === 's3' && styles.s3TextTitle]}>
                         {item.textTitle}
                    </Text>
                    <Text style={styles.introTextStyle}>
                         {item.text}
                    </Text>
               </View>
          );
     };

     return (
          <>
               {showRealApp ? (
                    <SafeAreaView style={styles.container}>
                         <View style={styles.container}>
                              <Text style={styles.titleStyle}>
                                   React Native App Intro Slider using AppIntroSlider
                              </Text>
                              <Text style={styles.paragraphStyle}>
                                   This will be your screen when you click Skip
                                   from any slide or Done button at last
                              </Text>
                              <Button
                                   title="Show Intro Slider again"
                                   onPress={() => setShowRealApp(false)}
                              />
                         </View>
                    </SafeAreaView>
               ) : (
                    <AppIntroSlider
                         data={slides}
                         renderItem={RenderItem}
                         onDone={RenderDoneButton}
                         renderDoneButton={RenderDoneButton}
                         renderNextButton={RenderNextButton}
                         renderPrevButton={RenderPrevButton}
                         showNextButton={true}
                         showPrevButton={true}
                         onSlideChange={onSlideChange}
                         activeDotStyle={{ backgroundColor: '#40A752', width: 10 }}
                         dotStyle={{ backgroundColor: 'gray', width: 10 }}
                    />
               )}
          </>
     );
};



export default App;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          padding: 10,
          justifyContent: 'center',
     },
     paragraphStyle: {
          padding: 20,
          textAlign: 'center',
          fontSize: 16,
     },

     introTextStyle: {
          fontSize: 16,
          color: '#8A94A6',
          textAlign: 'center',
          paddingLeft: 33,
          paddingRight: 33,
          marginTop: -0
     },
     introTitleStyle: {
          fontSize: 25,
          color: 'white',
          textAlign: 'center',
          marginBottom: 16,
          fontWeight: 'bold',
     },
     buttonCircle: {
          width: 40,
          height: 40,
          color: '#40A752',
          justifyContent: 'center',
          alignItems: 'center',
     },
     textTitle: {
          fontSize: 22,
          color: '#667085',
          marginBottom: 20
     },
     btn: {
          backgroundColor: "#40A752",
          width: 200,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          marginRight: 270,
          borderRadius: 8,
          marginTop: -100
     },
     slideContainer: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
     },
     s3TextTitle: {
          padding: 20
     },
     s2image: {
          marginTop: 90
     }
});

const slides = [
     {
          key: 's1',
          text: 'Membangun desa juara di Indonesia? Ayo bergabung bersama kami!',
          textTitle: 'Selamat Datang',
          image: require("../../../assets/ilustrasi.png"),
          backgroundColor: '#ffffff',
     },
     {
          key: 's2',
          textTitle: 'Kegiatan Desa',
          text: 'Menginformasikan kegiatan pelaksanaan kegiatan yang berlangsung di Desa',
          image: require("../../../assets/ilustrasi1.png"),
          backgroundColor: '#ffffff',
     },
     {
          key: 's3',
          textTitle: 'Pesona Desa',
          text: 'Menginformasikan budaya lokal, wisata desa dan produk unggulan dari desa',
          image: require("../../../assets/ilustrasi2.png"),
          backgroundColor: '#FFFFFF',
     },
];
