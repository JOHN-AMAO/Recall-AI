import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Alert,
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
  Target,
  CalendarClock,
  BookOpen,
  ArrowRight,
} from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useRef } from 'react';


const { width } = Dimensions.get('window');
const CARD_PADDING = 20;
const CARD_WIDTH = width * 0.7;

const HomeScreen = () => {
  const scaleValue = useSharedValue(0.95);

  useEffect(() => {
    scaleValue.value = withSpring(1, { damping: 10, stiffness: 100 });
  }, []);
 
  const router = useRouter()
 
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scaleValue.value }],
  }));

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'image/*'],
        copyToCacheDirectory: true
      });

      if (result.assets && result.assets[0]) {
        // Handle the selected file
        console.log('Selected file:', result.assets[0]);
      }
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };

  const handleImagePick = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        // Handle the selected image
        console.log('Selected image:', result.assets[0]);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const handleUpload = () => {
    Alert.alert(
      'Choose Upload Type',
      'What would you like to upload?',
      [
        {
          text: 'PDF',
          onPress: handleFilePick
        },
        {
          text: 'Image',
          onPress: handleImagePick
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    );
  };

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

  const IconRow = () => {
    const iconItems = [
      { icon: Mic, label: 'Record', color: '#9333ea', route: '/record' },
      { icon: Camera, label: 'Snap', color: '#2563eb', route: '/snap' },
      { icon: FileText, label: 'Upload', color: '#059669', action: handleUpload },
      { icon: MessageCircle, label: 'Chat', color: '#facc15', route: '/chat' },
    ];

    const handlePress = (route: string | null, action?: () => void) => {
      if (action) {
        action();
      } else if (route) {
        router.push(route);
      }
    };

    return (
      <View className="flex-row justify-between items-center px-2 mt-4">
        {iconItems.map(({ icon: Icon, label, color, route, action }, index) => (
          <TouchableOpacity
            key={index}
            className="items-center"
            style={{ width: 70 }}
            onPress={() => handlePress(route, action)}
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
  };

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
    <View className="flex p-6">
      <View className="mb-4 items-center">
        <Icon size={60} color="#60a5fa" />
      </View>
      <Text className="text-white text-lg font-bold mb-2">{title}</Text>
      <Text className="text-gray-400 mb-2">
        <Clock size={14} color="#9ca3af" /> {duration}
      </Text>
      <View className="flex-row justify-end mt-4">
        <TouchableOpacity className="bg-green-600 rounded-full p-4">
          <ArrowRight color="#ffff"/>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);


 const TodayLearning = () => (
  <View className="mb-8 mt-8">
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-white text-xl font-semibold">Today's Learning</Text>
      <Link href="/today" asChild>
      <TouchableOpacity className="flex-row items-center space-x-1">
        <Text className="text-purple-400">View All</Text>

        <ChevronRight size={16} color="#a855f7" />
    
      </TouchableOpacity>
      </Link>
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

const Analytics = () => {
  return (
    <View className="mb-8 mt-8">
      <View className="flex-row justify-between items-center mb-4">
        <View>
          <Text className="text-white text-xl font-semibold">Analytics Overview</Text>
          <Text className="text-gray-400 mt-1">Track your learning progress</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-1">
          <Text className="text-purple-400">View Details</Text>
          <ChevronRight size={16} color="#a855f7" />
        </TouchableOpacity>
      </View>

      {/* Stats Row */}
      <View className="flex-row mb-4">
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

      {/* Additional Stats Row */}
      <View className="flex-row">
        <StatCard
          icon={BookOpen}
          label="Lessons Done"
          value="24"
          trend="15"
        />
        <StatCard
          icon={CalendarClock}
          label="Daily Streak"
          value="12 days"
          trend="5"
        />
      </View>
    </View>
  );
};




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

          {/* Analytics */}
          <Analytics/>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
