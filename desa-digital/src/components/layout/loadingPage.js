import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const LoadingPage = () => {
  const [isConnected, setIsConnected] = useState(true); // Menyimpan status koneksi internet

  useEffect(() => {
    // Subscribing ke perubahan status koneksi internet
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected); // Update status koneksi internet
    });

    // Unsubscribe dari listener saat komponen dilepas
    return () => unsubscribe();
  }, []);

  // Tampilkan loading jika tidak terhubung ke internet
  if (!isConnected) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tidak ada koneksi internet</Text>
      </View>
    );
  }

  // Tampilkan loading jika terhubung ke internet
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingPage;
