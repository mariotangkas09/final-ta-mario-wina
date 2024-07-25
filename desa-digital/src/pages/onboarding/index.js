import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Welcome = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AsyncStorage.getItem('onboardingDone').then(value => {
      if (value !== null) {
        navigation.replace('home'); // Langsung arahkan ke halaman home jika onboarding sudah selesai
      } else {
        setShowRealApp(true);
      }
    });
  }, []);

  const GoHome = () => {
    AsyncStorage.setItem('onboardingDone', 'true').then(() => {
      navigation.navigate('home');
    });
  };

  const onSlideChange = index => {
    setCurrentIndex(index);
  };

  const onDone = () => {
    setShowRealApp(false);
  };

  const onPrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const RenderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-right" color="#0890EA" size={24} />
      </View>
    );
  };

  const RenderPrevButton = () => {
    if (currentIndex === 0 || currentIndex === slides.length - 1) {
      return null;
    }
    return (
      <TouchableOpacity onPress={onPrev} style={styles.buttonCircle}>
        <Icon name="arrow-left" color="#0890EA" size={24} />
      </TouchableOpacity>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <TouchableOpacity onPress={GoHome} style={styles.btn}>
          <Text style={{ color: '#ffffff' }}>Selamat Datang</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const RenderItem = ({ item }) => {
    let customStyles = {};

    if (item.key === 's3') {
      customStyles = {
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: -100,
      };
    } else if (item.key === 's1' || item.key === 's2') {
      customStyles = {
        flex: 1,
        backgroundColor: item.backgroundColor,
        alignItems: 'center',
        paddingBottom: 100,
      };
    }

    return (
      <View style={[styles.slideContainer, customStyles]}>
        <Text style={styles.introTitleStyle}>{item.textTitle}</Text>
        <Image
          style={[
            styles.introImageStyle,
            item.key === 's2' && styles.s2image,
          ]}
          source={item.image}
        />
        <Text
          style={[styles.textTitle, item.key === 's3' && styles.s3TextTitle]}
        >
          {item.textTitle}
        </Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          renderDoneButton={RenderDoneButton}
          renderNextButton={RenderNextButton}
          renderPrevButton={RenderPrevButton}
          showNextButton={true}
          showPrevButton={true}
          onSlideChange={onSlideChange}
          activeDotStyle={{ backgroundColor: '#0890EA', width: 10 }}
          dotStyle={{ backgroundColor: 'gray', width: 10 }}
        />
      ) : null}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  // Styles definition...
});

const slides = [
  {
    key: 's1',
    text: 'Membangun desa juara di Indonesia? Ayo bergabung bersama kami!',
    textTitle: 'Selamat Datang',
    image: require('../../../assets/ilustrasi.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 's2',
    textTitle: 'Kegiatan Desa',
    text:
      'Menginformasikan kegiatan pelaksanaan kegiatan yang berlangsung di Desa',
    image: require('../../../assets/ilustrasi1.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 's3',
    textTitle: 'Pesona Desa',
    text:
      'Menginformasikan budaya lokal, wisata desa dan produk unggulan dari desa',
    image: require('../../../assets/ilustrasi2.png'),
    backgroundColor: '#FFFFFF',
  },
];
