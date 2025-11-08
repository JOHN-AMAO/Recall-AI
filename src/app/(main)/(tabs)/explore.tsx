import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import { Search, Filter, Star, Clock, Users, BookOpen } from '@/components/icons';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';

const StudyPlanCard = ({ title, author, rating, duration, students, topics }) => (
    <TouchableOpacity className="bg-gray-800 rounded-2xl p-4 mb-4">
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1">
          <Text className="text-white font-bold text-lg mb-1">{title}</Text>
          <Text className="text-gray-400">by {author}</Text>
        </View>
        <View className="bg-purple-500/20 rounded-xl px-3 py-1 flex-row items-center">
          <Star size={16} color="#a855f7" className="mr-1" />
          <Text className="text-purple-400">{rating}</Text>
        </View>
      </View>
      
      <View className="flex-row space-x-4 mb-3">
        <View className="flex-row items-center">
          <Clock size={16} color="#94a3b8" className="mr-1" />
          <Text className="text-gray-400">{duration}</Text>
        </View>
        <View className="flex-row items-center">
          <Users size={16} color="#94a3b8" className="mr-1" />
          <Text className="text-gray-400">{students} students</Text>
        </View>
      </View>

      <View className="flex-row flex-wrap">
        {topics.map((topic, index) => (
          <View key={index} className="bg-gray-700/50 rounded-full px-3 py-1 mr-2 mb-2">
            <Text className="text-gray-300 text-sm">{topic}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

export default function ExploreScreen() {
  const scaleValue = useSharedValue(0.9);
  const opacityValue = useSharedValue(0);

  useEffect(() => {
    scaleValue.value = withSpring(1);
    opacityValue.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
    opacity: opacityValue.value,
  }));

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <Animated.View className="flex-1 p-6 mb-24" style={animatedStyle}>
        <Text className="text-white text-2xl font-bold mb-6">Explore Study Plans</Text>
        
        <View className="flex-row space-x-4 mb-6">
          <View className="flex-1 flex-row items-center bg-gray-800 rounded-xl px-4 py-3">
            <Search size={20} color="#94a3b8" />
            <TextInput
              placeholder="Search study plans..."
              placeholderTextColor="#94a3b8"
              className="flex-1 ml-3 text-white"
            />
          </View>
          <TouchableOpacity className="bg-purple-600 rounded-xl p-3">
            <Filter size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View className="flex-row mb-6">
          {['Popular', 'Recent', 'Trending'].map((filter, index) => (
            <TouchableOpacity
              key={index}
              className={`mr-4 px-4 py-2 rounded-full ${
                index === 0 ? 'bg-purple-600' : 'bg-gray-800'
              }`}
            >
              <Text className={`${
                index === 0 ? 'text-white' : 'text-gray-400'
              } font-medium`}>
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <StudyPlanCard
            title="Complete Web Development"
            author="Sarah Johnson"
            rating="4.9"
            duration="8 weeks"
            students="2.3k"
            topics={['HTML', 'CSS', 'JavaScript', 'React']}
          />
          <StudyPlanCard
            title="Machine Learning Fundamentals"
            author="Alex Chen"
            rating="4.8"
            duration="12 weeks"
            students="1.8k"
            topics={['Python', 'TensorFlow', 'Neural Networks']}
          />
          <StudyPlanCard
            title="Mobile App Development"
            author="Mike Peters"
            rating="4.7"
            duration="10 weeks"
            students="1.5k"
            topics={['React Native', 'iOS', 'Android']}
          />
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}
