import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { User, Mail, Phone, MapPin, Edit2, LogOut, BookOpen, Trophy, Settings, Star, Award } from "@/components/icons";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <ScrollView className="flex-1 mb-24" showsVerticalScrollIndicator={false}>
        {/* Header with Avatar */}
        <LinearGradient
          colors={['#1e1b4b', '#4c1d95', '#7c3aed']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="pt-16 pb-20 rounded-b-[50px] relative"
        >
          {/* Background Pattern */}
          <View className="absolute inset-0 opacity-10">
            <View className="absolute top-10 right-10 w-20 h-20 bg-white rounded-full" />
            <View className="absolute top-32 left-8 w-12 h-12 bg-white rounded-full" />
            <View className="absolute bottom-20 right-16 w-8 h-8 bg-white rounded-full" />
          </View>
          
          <View className="items-center relative z-10 px-6">
            {/* Avatar with glow effect */}
            <View className="relative mb-6 mt-6">
              <View className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-30" />
              <View className="w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full items-center justify-center border-4 border-purple-400/40 shadow-2xl relative">
                <User color="#e9d5ff" size={96} strokeWidth={1.5} />
                {/* Online indicator */}
                <View className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
              </View>
            </View>
            
            <Text className="text-white text-4xl font-bold mb-3 tracking-wide text-center">John Amao</Text>
            {/* Stats Cards */}
            <View className="flex flex-row gap-4 mb-4 w-full justify-center">
              <View className="bg-white/10 backdrop-blur-sm px-6 py-6 rounded-3xl items-center border border-white/20 shadow-xl flex-1 max-w-[140px]">
                <View className="bg-gradient-to-br from-purple-400/30 to-purple-600/30 p-4 rounded-2xl mb-3">
                  <BookOpen color="#e9d5ff" size={28} strokeWidth={1.5} />
                </View>
                <Text className="text-white font-bold text-2xl">24</Text>
                <Text className="text-purple-200 text-sm font-medium">Courses</Text>
              </View>
              <View className="bg-white/10 backdrop-blur-sm px-6 py-6 rounded-3xl items-center border border-white/20 shadow-xl flex-1 max-w-[140px]">
                <View className="bg-gradient-to-br from-yellow-400/30 to-orange-500/30 p-4 rounded-2xl mb-3">
                  <Trophy color="#fbbf24" size={28} strokeWidth={1.5} />
                </View>
                <Text className="text-white font-bold text-2xl">1.2k</Text>
                <Text className="text-yellow-200 text-sm font-medium">XP Points</Text>
              </View>
            </View>
          </View>
        </LinearGradient>



        {/* Profile Details */}
        <View className="px-6 mt-6">
          <Text className="text-white text-2xl font-bold mb-6">Profile Information</Text>
          
          <View className="bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-8 border border-gray-700/50">
            <View className="flex-row items-center mb-8">
              <View className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-3 rounded-2xl mr-5">
                <Mail color="#60a5fa" size={24} strokeWidth={1.5} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-400 text-sm font-medium mb-1">Email</Text>
                <Text className="text-white text-lg">amaojohn767@gmail.com</Text>
              </View>
            </View>
          
            
            <View className="flex-row items-center">
              <View className="bg-gradient-to-br from-red-500/20 to-red-600/20 p-3 rounded-2xl mr-5">
                <MapPin color="#f87171" size={24} strokeWidth={1.5} />
              </View>
              <View className="flex-1">
                <Text className="text-gray-400 text-sm font-medium mb-1">Location</Text>
                <Text className="text-white text-lg">New York, USA</Text>
              </View>
            </View>
          </View>

          {/* Action Buttons - Properly spaced */}
          <View className="flex flex-col gap-4 pb-8">
            <TouchableOpacity className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl py-5 px-6 flex-row justify-center items-center shadow-xl border border-purple-500/30">
              <Edit2 color="#ffffff" size={24} strokeWidth={1.5} />
              <Text className="text-white text-center font-bold text-lg ml-3">Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-800/80 backdrop-blur-sm rounded-3xl py-5 px-6 flex-row justify-center items-center border border-gray-700/50">
              <Settings color="#9ca3af" size={24} strokeWidth={1.5} />
              <Text className="text-gray-300 text-center font-semibold text-lg ml-3">Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-800/50 rounded-3xl py-5 px-6 flex-row justify-center items-center border border-red-500/20">
              <LogOut color="#ef4444" size={24} strokeWidth={1.5} />
              <Text className="text-red-400 text-center font-semibold text-lg ml-3">Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
