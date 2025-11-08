import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Animated, { 
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  interpolate,
  Extrapolate,
  runOnJS,
  withSpring
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { snapPoint } from 'react-native-redash';
import { Home, Share2 } from '@/components/icons';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
const SNAP_POINTS = [-width, 0, width];

export default function StudySlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const slidePosition = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotateZ = useSharedValue(0);
  const offset = useSharedValue({ x: 0, y: 0 });

  const pages = [
    {
      title: "How to Build a Successful Business",
      skill: "Introduction", 
      content: "Learn the essential steps to create and grow a thriving business in today's market"
    },
    {
      title: "Market Research",
      skill: "Research",
      content: "Understand your market, competitors, and identify opportunities for your business"
    },
    {
      title: "Business Plan Development",
      skill: "Planning",
      content: "Create a comprehensive business plan that will guide your venture to success"
    },
    {
      title: "Financial Planning",
      skill: "Finance",
      content: "Master the basics of business finance, budgeting, and funding strategies"
    },
    {
      title: "Legal Requirements",
      skill: "Legal",
      content: "Navigate legal requirements, licenses, and regulations for your business"
    },
    {
      title: "Building Your Team",
      skill: "HR",
      content: "Learn how to hire, manage, and develop an effective team"
    },
    {
      title: "Marketing Strategy",
      skill: "Marketing",
      content: "Develop a marketing plan to reach and engage your target audience"
    },
    {
      title: "Operations Management",
      skill: "Operations",
      content: "Set up efficient business operations and management systems"
    },
    {
      title: "Growth Strategies",
      skill: "Growth",
      content: "Implement strategies for scaling and expanding your business"
    },
    {
      title: "Measuring Success",
      skill: "Analytics",
      content: "Track key metrics and adjust your strategy for long-term success"
    }
  ];

  const updatePage = (dest: number) => {
    if (dest < 0 && currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
    } else if (dest > 0 && currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
    } else {
      translateX.value = withTiming(0);
      translateY.value = withTiming(0);
    }
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      offset.value = { x: translateX.value, y: translateY.value };
      rotateZ.value = withTiming(0);
      scale.value = withTiming(1.1);
    })
    .onUpdate(({ translationX, translationY }) => {
      translateX.value = offset.value.x + translationX;
      translateY.value = offset.value.y + translationY;
    })
    .onEnd(({ velocityX, velocityY }) => {
      const dest = snapPoint(translateX.value, velocityX, SNAP_POINTS);
      translateX.value = withSpring(dest, { velocity: velocityX });
      translateY.value = withSpring(0, { velocity: velocityY });
      scale.value = withTiming(1, {}, () => {
        if (dest !== 0) {
          runOnJS(updatePage)(dest);
        }
      });
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1500 },
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotateZ: `${rotateZ.value}deg` },
        { scale: scale.value }
      ] as const
    };
  });

  const nextCardStyle = useAnimatedStyle(() => {
    const translateYValue = interpolate(
      slidePosition.value,
      [0, 1],
      [height * 0.1, 0],
      Extrapolate.CLAMP
    );

    return {
      transform: [
        { translateY: translateYValue },
        { scale: 0.95 }
      ] as const
    };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1f2937' }}>
      <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Home color="white" size={24} />
        </TouchableOpacity>
        
        <View style={{ flex: 1, height: 4, backgroundColor: '#4b5563', borderRadius: 2, marginHorizontal: 16 }}>
          <View 
            style={{
              width: `${(currentPage + 1) / pages.length * 100}%`,
              height: '100%',
              backgroundColor: '#a855f7',
              borderRadius: 2
            }}
          />
        </View>

        <TouchableOpacity>
          <Share2 color="white" size={24} />
        </TouchableOpacity>
      </View>
      
      <View style={{ flex: 1, position: 'relative' }}>
        {currentPage < pages.length - 1 && (
          <Animated.View style={[{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#374151',
            margin: 20,
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }, nextCardStyle]}>
            <View style={{ 
              width: 120, 
              height: 120, 
              backgroundColor: '#3b82f6',
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24
            }} />
            
            <Text style={{ 
              fontSize: 24,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              marginBottom: 32
            }}>
              {pages[currentPage + 1]?.title}
            </Text>
          </Animated.View>
        )}

        <GestureDetector gesture={gesture}>
          <Animated.View style={[{
            backgroundColor: '#374151',
            margin: 20,
            borderRadius: 16,
            padding: 24,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }, animatedStyle]}>
            <View style={{ 
              width: 120, 
              height: 120, 
              backgroundColor: '#3b82f6',
              borderRadius: 60,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24
            }} />
            
            <Text style={{ 
              fontSize: 24,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
              marginBottom: 32
            }}>
              {pages[currentPage].title}
            </Text>

            <Text style={{ 
              fontSize: 24,
              textAlign: 'center',
              color: '#d1d5db',
              marginBottom: 16
            }}>
              {pages[currentPage].content}
            </Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </SafeAreaView>
  );
}