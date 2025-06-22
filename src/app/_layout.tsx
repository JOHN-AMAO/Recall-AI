import "../global.css";
import { Slot } from "expo-router";
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

import { tokenCache } from '../../lib/auth';
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false
});

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#7c3aed" barStyle="light-content" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="onboarding"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="signin"
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="signup"
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
