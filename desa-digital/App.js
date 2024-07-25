// App.js
import React from 'react';
import AppNavigation from './src/navigation/index';
import { enableScreens } from 'react-native-screens';

enableScreens(); 
export default function App() {
  return (
    <>
      <AppNavigation />
    </>
  );
}
