import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import { 
  Brain, 
  Trophy, 
  Zap, 
  Clock, 
  TrendingUp,
  BookOpen,
  Target,
  ChevronRight,
  Sparkles
} from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_PADDING = 20;
const CARD_WIDTH = width * 0.7;

const HomeScreen = () => {
  const scaleValue = useSharedValue(0.8);
  const opacityValue = useSharedValue(0);

  useEffect(() => {
    scaleValue.value = withSequence(
      withDelay(300, withSpring(1)),
      withSpring(0.98),
      withSpring(1)
    );
    opacityValue.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
    opacity: opacityValue.value,
  }));

  const StreakCard = () => (
    <View className="rounded-3xl overflow-hidden mb-6">
      <LinearGradient
        colors={['#4c1d95', '#7c3aed']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-6"
      >
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center space-x-3 pl-4 pt-4">
            <Zap size={24} color="#fef08a" strokeWidth={2.5} />
            <Text className="text-yellow-200 font-bold text-lg">12 Day Streak!</Text>
          </View>
          <View className="bg-purple-500/30 rounded-full px-4 py-2">
            <Text className="text-yellow-200 font-medium">+3 Today</Text>
          </View>
        </View>
        <Text className="text-purple-100 mb-6 px-1 pl-4">Keep up the momentum! You're making great progress.</Text>
        <View className="flex-row space-x-3 px-1">
          {[...Array(7)].map((_, i) => (
            <View 
              key={i} 
              className={`h-1.5 flex-1 rounded-full ${i < 5 ? 'bg-yellow-200' : 'bg-purple-400/30'}`}
            />
          ))}
        </View>
      </LinearGradient>
    </View>
  );

  const StudyCard = ({ title, time, progress, icon: Icon, color }) => (
    <TouchableOpacity 
      className="bg-gray-800 rounded-3xl p-5 mb-4"
      style={{
        width: CARD_WIDTH,
        marginRight: 15,
      }}
    >
      <View className="flex-row justify-between items-center mb-3">
        <View className={`bg-${color}/20 p-2 rounded-xl`}>
          <Icon size={24} color={`#${color === 'purple' ? 'a855f7' : '60a5fa'}`} />
        </View>
        <View className="bg-gray-700/50 rounded-full px-3 py-1">
          <Text className="text-gray-300 text-sm">{time}</Text>
        </View>
      </View>
      <Text className="text-white font-semibold text-lg mb-2">{title}</Text>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-2 flex-1 mr-4">
          <View className="h-1.5 flex-1 bg-gray-700 rounded-full">
            <View 
              className={`h-full bg-${color}-500 rounded-full`}
              style={{ width: `${progress}%` }}
            />
          </View>
          <Text className="text-gray-400">{progress}%</Text>
        </View>
        <ChevronRight size={20} color="#9ca3af" />
      </View>
    </TouchableOpacity>
  );

  const StatCard = ({ icon: Icon, label, value, trend }) => (
    <View className="bg-gray-800 rounded-2xl p-4 flex-1 mx-2">
      <View className="flex-row justify-between items-center mb-2">
        <View className="bg-purple-500/20 p-2 rounded-lg">
          <Icon size={20} color="#a855f7" />
        </View>
        <View className="flex-row items-center space-x-1">
          <TrendingUp size={14} color="#4ade80" />
          <Text className="text-green-400 text-xs">{trend}%</Text>
        </View>
      </View>
      <Text className="text-gray-400 text-sm mb-1">{label}</Text>
      <Text className="text-white font-bold text-xl">{value}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="flex-1 mb-24">
        <Animated.View className="p-6" style={animatedStyle}>
          {/* Header */}
          <View className="flex-row justify-between items-center mb-8">
            <View>
              <Text className="text-white text-3xl font-bold">Hi, John 👋</Text>
              <Text className="text-gray-400 mt-1">Ready to learn something new?</Text>
            </View>
            <TouchableOpacity className="bg-gray-800 p-2 rounded-xl">
              <Trophy size={24} color="#a855f7" />
            </TouchableOpacity>
          </View>

          {/* Streak Card */}
          <StreakCard />

          {/* Stats Row */}
          <View className="flex-row mb-8">
            <StatCard
              icon={Clock}
              label="Study Time"
              value="3.5h"
              trend="12"
            />
            <StatCard
              icon={Target}
              label="Goals Met"
              value="8/10"
              trend="8"
            />
          </View>

          {/* Current Studies */}
          <View className="mb-8">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white text-xl font-semibold">Continue Learning</Text>
              <TouchableOpacity className="flex-row items-center space-x-1">
                <Text className="text-purple-400">View All</Text>
                <ChevronRight size={16} color="#a855f7" />
              </TouchableOpacity>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: CARD_PADDING }}
            >
              <StudyCard
                title="Machine Learning Basics"
                time="2h remaining"
                progress={75}
                icon={Brain}
                color="purple"
              />
              <StudyCard
                title="Data Structures"
                time="1.5h remaining"
                progress={45}
                icon={BookOpen}
                color="blue"
              />
            </ScrollView>
          </View>

          {/* Daily Challenge */}
          <TouchableOpacity className="bg-gray-800 rounded-3xl p-5 mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center space-x-3">
                <View className="bg-purple-500/20 p-2 rounded-xl">
                  <Sparkles size={24} color="#a855f7" />
                </View>
                <Text className="text-white font-semibold text-lg">Daily Challenge</Text>
              </View>
              <View className="bg-purple-500/20 rounded-full px-3 py-1">
                <Text className="text-purple-400">+50 XP</Text>
              </View>
            </View>
            <Text className="text-gray-400 mb-3">
              Complete a 30-minute focused study session to earn bonus points!
            </Text>
            <View className="flex-row items-center space-x-2">
              <View className="flex-1 h-2 bg-gray-700 rounded-full">
                <View className="h-full w-1/3 bg-purple-500 rounded-full" />
              </View>
              <Text className="text-gray-400">10/30 min</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;