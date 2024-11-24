import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import {
  Calendar as CalendarIcon,
  Clock,
  FileUp,
  Brain,
  ChevronRight,
  Bell,
  Sparkles,
  CalendarClock,
  BookOpen,
} from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import * as DocumentPicker from 'expo-document-picker';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [subject, setSubject] = useState('');

  const handleFilePicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
      
      if (result) {
        // Handle the selected PDF
        console.log('Selected file:', result);
      }
    } catch (err) {
      console.log('DocumentPicker Error:', err);
    }
  };

  const GenerateCard = ({ icon: Icon, title, description, action, highlight }) => (
    <TouchableOpacity 
      className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-5 mb-4"
      style={{
        shadowColor: '#9333EA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 3,
      }}
      onPress={action}
    >
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center space-x-3">
          <View className="bg-purple-500/20 p-3 rounded-2xl">
            <Icon size={24} color="#A855F7" strokeWidth={2} />
          </View>
          <Text className="text-lg font-semibold text-white">{title}</Text>
        </View>
        <ChevronRight size={20} color="#A855F7" />
      </View>
      <Text className="text-gray-300 mb-3 leading-5">{description}</Text>
      {highlight && (
        <View className="bg-purple-500/10 rounded-xl p-3 flex-row items-center space-x-2">
          <Sparkles size={16} color="#A855F7" />
          <Text className="text-purple-300 font-medium">{highlight}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <ScrollView className="flex-1 mb-24">
        {/* Header */}
        <View className="px-6 pt-6 pb-4">
          <Text className="text-3xl font-bold text-white">Schedule</Text>
          <Text className="text-gray-300 mt-1">Plan your study sessions effectively</Text>
        </View>

        {/* Quick Actions */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="px-4 mb-6"
        >
          {[
            { icon: CalendarClock, label: 'Today', count: '3 Sessions' },
            { icon: Brain, label: 'Focus Time', count: '2.5 Hours' },
            { icon: BookOpen, label: 'Materials', count: '5 PDFs' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="mx-2 bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 w-40"
              style={{
                shadowColor: '#9333EA',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 3,
              }}
            >
              <View className="bg-purple-500/20 p-2 rounded-xl w-10 h-10 items-center justify-center mb-3">
                <item.icon size={20} color="#A855F7" />
              </View>
              <Text className="text-white font-semibold">{item.label}</Text>
              <Text className="text-gray-300 text-sm mt-1">{item.count}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Generate Section */}
        <View className="px-6">
          <Text className="text-xl font-semibold text-white mb-4">Generate Study Plan</Text>
          
          <GenerateCard
            icon={Clock}
            title="Schedule Learning"
            description="Set your availability and preferences for an AI-optimized study schedule"
            highlight="Smart time blocking based on your peak hours"
            action={() => {}}
          />

          <GenerateCard
            icon={FileUp}
            title="Upload Materials"
            description="Upload your study materials and let AI create a personalized learning path"
            highlight="Supports PDF, images, and notes"
            action={handleFilePicker}
          />

          <GenerateCard
            icon={Bell}
            title="Smart Notifications"
            description="Get reminded at the optimal times for maximum retention"
            highlight="Uses AI to predict best study times"
            action={() => {}}
          />
        </View>

        {/* Recent Activity */}
        <View className="px-6 mt-6">
          <Text className="text-xl font-semibold text-white mb-4">Recent Activity</Text>
          <View className="bg-gray-900/80 backdrop-blur-lg rounded-3xl p-5">
            <View className="border-l-2 border-purple-400 pl-4 mb-4">
              <Text className="text-white font-medium">Machine Learning Basics</Text>
              <Text className="text-gray-300 text-sm">Today, 2:00 PM - 4:00 PM</Text>
            </View>
            <View className="border-l-2 border-gray-600 pl-4">
              <Text className="text-white font-medium">Data Structures</Text>
              <Text className="text-gray-300 text-sm">Tomorrow, 10:00 AM - 12:00 PM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;