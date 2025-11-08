import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

export default function UserOnboardingData() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-white text-xl font-semibold">
          User onboarding data screen
        </Text>
        <Text className="text-gray-400 mt-2 text-center">
          Content coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}

