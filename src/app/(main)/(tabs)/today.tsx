import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Dimensions, Animated } from 'react-native';
import { Clock, BookOpen, Brain, User, Calendar, Search, Layout, CheckCheck, ArrowRight } from 'lucide-react-native';
import { format, addDays, subDays } from 'date-fns';
import { Link, router, useNavigation } from 'expo-router';

const { width, height } = Dimensions.get('window');

const TodayStudyPlan = () => {
  const currentProgress = 70;
  const today = new Date();
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      scaleAnim.setValue(0);
    });

    return unsubscribe;
  }, [navigation]);

  const days = [...Array(5)].map((_, i) => {
    const date = addDays(today, i - 2);
    return {
      day: format(date, 'EEE'),
      date: format(date, 'd'),
      active: i === 2,
      fullDate: date
    };
  });

  const studyTasks = [
    {
      title: "Business Fundamentals",
      duration: "12 min", 
      icon: (props) => <Brain {...props} />,
      bgColor: 'bg-purple-600',
      points: 50
    },
    {
      title: "Python Basics",
      duration: "20 min",
      icon: (props) => <BookOpen {...props} />,
      bgColor: 'bg-blue-600',
      points: 75
    },
    {
      title: "Data Structures",
      duration: "30 min",
      icon: (props) => <Brain {...props} />,
      bgColor: 'bg-pink-600',
      points: 100
    }
  ];

  const handleNavigate = (buttonPosition) => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      router.push('/slider');
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <ScrollView 
        className="flex-1 mb-24" 
        contentContainerStyle={{ padding: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-gray-400 text-base">Keep learning, John</Text>
            <Text className="text-white text-3xl font-bold mt-1">For you</Text>
          </View>
          <View className="w-16 h-16 rounded-full items-center justify-center bg-purple-600">
            <Text className="text-white  text-xl font-bold">{currentProgress}%</Text>
          </View>
        </View>

        {/* Date Selector */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-8 -mx-4"
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {days.map((day, index) => (
            <TouchableOpacity
              key={index}
              className={`items-center rounded-full py-2 px-4 mx-2 border-2 border-b-4 ${
                day.active ? 'bg-purple-600 border-purple-400 border-b-purple-800' : 'bg-gray-800/50 border-gray-700 border-b-gray-600'
              }`}
            >
              <Text className={`${day.active ? 'text-white' : 'text-gray-400'} text-sm`}>
                {day.day}
              </Text>
              <Text className={`${day.active ? 'text-white' : 'text-gray-300'} text-xl font-bold mt-1`}>
                {day.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Quiz Prompt Card */}
        <View className="bg-gray-800 border border-gray-400 rounded-3xl overflow-hidden mb-8 shadow-lg relative">
          <View className="p-8">
            <View className="flex-row items-center mb-6">
              <View className="bg-green-500/20 p-2 rounded-2xl mr-4">
                <CheckCheck size={32} color="#4CAF50" />
              </View>
              <Text className="text-white text-md flex-1">
                Take a quick 3 min quiz to test your knowledge
              </Text>
            </View>
            <TouchableOpacity 
              className="bg-green-500 rounded-3xl py-4 px-6 items-center"
            >
              <Text className="text-gray-900 font-bold text-lg">Start Practice</Text>
            </TouchableOpacity>
          </View>
          <View className="absolute bottom-0 left-0 right-0 h-1 bg-gray-400" />
        </View>

        {/* Study Tasks */}
        <View className="flex space-y-6 gap-6 ">
          <Text className="text-white text-2xl font-bold">Jump in</Text>
          {studyTasks.map((task, index) => (
            <View
              key={index}
              className={`bg-gray-800 rounded-3xl overflow-hidden my-4 shadow-lg`}
            >
              {/* Points Badge */}
              <View
              className="absolute top-0 right-0 bg-purple-600 py-1 px-3 rounded-bl-3xl"
              style={{ zIndex: 10 }}
              >
              <Text className="text-yellow-300 font-bold text-sm">+{task.points} Points</Text>
              </View>

              {/* Card Content */}
              <View className="p-8">
                <View className="mb-6 items-center">
                  {task.icon({ size: 48, color: "#60a5fa" })}
                </View>
                <Text className="text-white text-xl font-bold mb-3">{task.title}</Text>
                <View className="flex-row items-center">
                  <Clock size={16} color="#60a5fa" />
                  <Text className="text-white/90 ml-2 text-base">{task.duration}</Text>
                </View>
                <View className="flex-row justify-end mt-4">
                  <TouchableOpacity 
                    className="bg-green-600 rounded-full p-4"
                    onPress={handleNavigate}
                  >
                    <ArrowRight color="#ffff"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 1,
          height: 2,
          backgroundColor: '#030712',
          borderRadius: 0.5,
          opacity: scaleAnim,
          transform: [
            {
              scale: scaleAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, Math.max(width, height) * 2]
              })
            }
          ]
        }}
      />
    </SafeAreaView>
  );
};

export default TodayStudyPlan;