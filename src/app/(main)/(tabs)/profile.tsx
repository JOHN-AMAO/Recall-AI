import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { User, Mail, Phone, MapPin, Edit2, LogOut, BookOpen, Trophy } from "lucide-react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1 mb-24">
        {/* Header with Avatar */}
        <LinearGradient
          colors={['#4c1d95', '#7c3aed']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="pt-12 pb-24 rounded-b-[40px]"
        >
          <View className="items-center">
            <View className="w-36 h-36 bg-gray-800 rounded-full items-center justify-center border-4 border-purple-400/30 shadow-2xl">
              <User color="#e9d5ff" size={88} />
            </View>
            <Text className="text-white text-3xl font-bold mt-6">John Doe</Text>
            <View className="bg-purple-500/20 rounded-full px-4 py-1.5 mt-2">
              <Text className="text-purple-100 text-base font-medium">Advanced Learner</Text>
            </View>
            
            <View className="flex-row mt-8 space-x-8">
              <View className="bg-purple-500/20 px-6 py-4 rounded-2xl items-center">
                <View className="bg-purple-400/20 p-3 rounded-xl mb-2">
                  <BookOpen color="#e9d5ff" size={28} />
                </View>
                <Text className="text-purple-100 font-bold text-xl">24</Text>
                <Text className="text-purple-200 text-sm">Courses</Text>
              </View>
              <View className="bg-purple-500/20 px-6 py-4 rounded-2xl items-center">
                <View className="bg-purple-400/20 p-3 rounded-xl mb-2">
                  <Trophy color="#e9d5ff" size={28} />
                </View>
                <Text className="text-purple-100 font-bold text-xl">1.2k</Text>
                <Text className="text-purple-200 text-sm">XP Points</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Profile Details */}
        <View className="px-6 mt-5">
          <View className="bg-gray-800 rounded-3xl shadow-xl p-6 mb-6">
            <View className="flex-row items-center mb-6">
              <View className="bg-purple-500/20 p-2 rounded-xl mr-4">
                <Mail color="#a855f7" size={20} />
              </View>
              <Text className="text-gray-300 flex-1">john.doe@example.com</Text>
            </View>
            <View className="flex-row items-center mb-6">
              <View className="bg-purple-500/20 p-2 rounded-xl mr-4">
                <Phone color="#a855f7" size={20} />
              </View>
              <Text className="text-gray-300 flex-1">+1 234 567 8900</Text>
            </View>
            <View className="flex-row items-center">
              <View className="bg-purple-500/20 p-2 rounded-xl mr-4">
                <MapPin color="#a855f7" size={20} />
              </View>
              <Text className="text-gray-300 flex-1">New York, USA</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity className="bg-purple-600 rounded-2xl py-4 mb-4 flex-row justify-center items-center shadow-lg">
            <Edit2 color="#ffffff" size={20} className="mr-2" />
            <Text className="text-white text-center font-semibold text-lg">Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-gray-800 rounded-2xl py-4 flex-row justify-center items-center mb-6">
            <LogOut color="#ef4444" size={20} className="mr-2" />
            <Text className="text-red-500 text-center font-semibold text-lg">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
