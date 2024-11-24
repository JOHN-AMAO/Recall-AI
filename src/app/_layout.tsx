import "../global.css";
import { Slot } from "expo-router";
import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false
});

export default function Layout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="onboarding" 
        />
        <Stack.Screen 
          name="auth/signin" 
        />
        <Stack.Screen 
          name="auth/signup" 
        />
        <Stack.Screen 
          name="(main)" 
          options={{ headerShown: false }} 
        />
      </Stack>
    </>
  )
}
