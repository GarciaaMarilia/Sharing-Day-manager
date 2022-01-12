import React from 'react';
import { StatusBar } from 'react-native';

import { AuthRoutes } from './src/routes/auth.routes';

import {
  useFonts,
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { SharingsProvider } from './src/Providers/SharingsProvider';


export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Inter_400Regular,
    Rajdhani_700Bold,
    Inter_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <SharingsProvider>
      <StatusBar
        backgroundColor='transparent'
        barStyle='light-content'
        translucent
      />
      <AuthRoutes />
    </SharingsProvider>
  );
}
