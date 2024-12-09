import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  Brain,
  Trophy,
  Zap,
  Clock,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Mic,
  Camera,
  FileText,
  MessageCircle,
  ImageIcon,
} from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_PADDING = 20;
const CARD_WIDTH = width * 0.7;

const HomeScreen = () => {
  const scaleValue = useSharedValue(0.95);

  useEffect(() => {
    scaleValue.value = withSpring(1, { damping: 10, stiffness: 100 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
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
        <Text className="text-purple-100 mb-6 px-1 pl-4">
          Keep up the momentum! You're making great progress.
        </Text>
        <View className="flex-row space-x-3 px-1">
          {[...Array(7)].map((_, i) => (
            <View
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < 5 ? 'bg-yellow-200' : 'bg-purple-400/30'
              }`}
            />
          ))}
        </View>
      </LinearGradient>
    </View>
  );

  const IconRow = () => (
    <View className="flex-row  justify-between items-center px-2 mt-4">
      {[
        { icon: Mic, label: 'Record', color: '#9333ea' },
        { icon: Camera, label: 'Snap', color: '#2563eb' },
        { icon: FileText, label: 'Upload', color: '#059669' },
        { icon: MessageCircle, label: 'Chat', color: '#facc15' },
      ].map(({ icon: Icon, label, color }, index) => (
        <TouchableOpacity
          key={index}
          className="items-center"
          style={{ width: 70 }}
        >
          <View
            className="rounded-full p-4"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon size={24} color={color} />
          </View>
          <Text className="text-gray-300 text-sm mt-2">{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

 const TodayLearningCard = ({ title, duration, points, icon: Icon }) => (
  <View
    className="bg-gray-800 rounded-3xl overflow-hidden mr-4"
    style={{ width: CARD_WIDTH }}
  >
    {/* Points Badge */}
    <View
      className="absolute top-0 right-0 bg-purple-600 py-1 px-3 rounded-bl-3xl"
      style={{ zIndex: 10 }}
    >
      <Text className="text-yellow-300 font-bold text-sm">+{points} Points</Text>
    </View>

    {/* Card Content */}
    <View className="p-6">
      <View className="mb-4 items-center">
        <Icon size={60} color="#60a5fa" />
      </View>
      <Text className="text-white text-lg font-bold mb-2">{title}</Text>
      <Text className="text-gray-400 mb-2">
        <Clock size={14} color="#9ca3af" /> {duration}
      </Text>
      <TouchableOpacity className="mt-4 bg-green-600 rounded-xl py-2 px-4 self-start">
        <Text className="text-white font-semibold text-lg">Start</Text>
      </TouchableOpacity>
    </View>
  </View>
);


 const TodayLearning = () => (
  <View className="mb-8 mt-8">
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-white text-xl font-semibold">Today's Learning</Text>
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
      <TodayLearningCard
        title="Introduction to AI"
        duration="12 min"
        points={50}
        icon={Brain}
      />
      <TodayLearningCard
        title="Python Basics"
        duration="15 min"
        points={60}
        icon={Sparkles}
      />
      <TodayLearningCard
        title="Algorithms 101"
        duration="20 min"
        points={75}
        icon={ImageIcon}
      />
    </ScrollView>
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

          {/* Icon Row */}
          <IconRow />

          {/* Today's Learning */}
          <TodayLearning />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
