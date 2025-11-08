import "../global.css";
import { Slot } from "expo-router";
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

import { tokenCache } from '../../lib/auth';
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#7c3aed" barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="onboarding"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="onboarding-flow/userOnboardingData"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="(auth)"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="(main)"
          options={{ headerShown: false }}
        />
      </Stack>
    </GestureHandlerRootView>
  )
}
