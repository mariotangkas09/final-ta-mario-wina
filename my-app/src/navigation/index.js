import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/boarding/welcome';
import Home from '../pages/home/home';
import ProfilDesa from '../pages/desa';
import UMKM from '../pages/umkm';
import KegiatanDesa from '../pages/kegiatan desa';
import Wisata from '../pages/wisata';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='profildesa' component={ProfilDesa} options={{headerShown: false}}/>
        <Stack.Screen name='umkm' component={UMKM} options={{headerShown:false}}/>
        <Stack.Screen name='kegiatan' component={KegiatanDesa} options={{headerShown:false}} />
        <Stack.Screen name='wisata' component={Wisata} options={{headerShown:false}}/>
      </Stack.Navigator>  
      <StatusBar backgroundColor="#40A752" style="light" translucent={false}/>
    </NavigationContainer>
  )
}
