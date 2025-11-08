import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Share,
} from 'react-native';
import { Users, Trophy, Share2, Crown, Medal, DollarSign } from '@/components/icons';

interface RankingUser {
  id: string;
  name: string;
  xp: number;
  rank: number;
  isCurrentUser: boolean;
}

const dummyUsers: RankingUser[] = [
  { id: '1', name: 'Sarah Chen', xp: 12500, rank: 1, isCurrentUser: false },
  { id: '2', name: 'Alex Kim', xp: 11200, rank: 2, isCurrentUser: true },
  { id: '3', name: 'Maria Garcia', xp: 10800, rank: 3, isCurrentUser: false },
  { id: '4', name: 'James Wilson', xp: 9500, rank: 4, isCurrentUser: false },
  { id: '5', name: 'Priya Patel', xp: 8900, rank: 5, isCurrentUser: false },
];

const RankPage = () => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: 'Join me on Recall AI! Help me earn rewards by using my invite link. Download now: [App Store Link]',
        title: 'Invite Friends to Recall AI',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const RankCard = ({ user }: { user: RankingUser }) => (
    <TouchableOpacity 
      className={`mb-5 p-6 rounded-3xl flex-row items-center justify-between ${
        user.isCurrentUser ? 'bg-purple-500/20' : 'bg-gray-900/80'
      }`}
    >
      <View className="flex-row items-center space-x-5">
        <View className="h-14 w-14 rounded-full bg-purple-500/20 items-center justify-center">
          <Users size={28} color="#A855F7" />
        </View>
        <View className='ml-5'>
          <Text className="text-white text-lg font-semibold mb-1">{user.name}</Text>
          <Text className="text-gray-400 text-base">{user.xp.toLocaleString()} XP</Text>
        </View>
      </View>
      <View className="flex-row items-center space-x-4">
        {user.isCurrentUser && (
          <View className="bg-purple-500/20 px-4 py-2 rounded-full">
            <Text className="text-purple-300 font-medium">You</Text>
          </View>
        )}
        <View className="w-10 items-center">
          {user.rank === 1 && <Crown size={28} color="#FFD700" />}
          {user.rank === 2 && <Medal size={28} color="#C0C0C0" />}
          {user.rank === 3 && <Medal size={28} color="#CD7F32" />}
          {user.rank > 3 && (
            <Text className="text-gray-400 text-lg font-bold">{user.rank}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-950">
      <ScrollView className="flex-1 mb-24" contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Header Section */}
        <View className="px-6 pt-8 pb-6">
          <View className="flex-row items-center justify-between mb-8">
            <View>
              <Text className="text-3xl font-bold text-white mb-3">Rankings</Text>
              <Text className="text-gray-400 text-lg">Compete with friends and earn XP</Text>
            </View>
            <View className="bg-purple-500/20 p-4 rounded-2xl">
              <Trophy size={28} color="#A855F7" />
            </View>
          </View>

          {/* Invite Friends Card */}
          <TouchableOpacity 
            className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl mb-10"
            onPress={handleShare}
          >
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-row items-center space-x-3">
                <Text className="text-white font-semibold text-xl">Invite Friends</Text>
                <View className="bg-yellow-400/20 px-4 py-2 rounded-full flex-row items-center">
                  <DollarSign size={16} color="#FEF08A" />
                  <Text className="text-yellow-200 font-medium ml-2">Earn Rewards</Text>
                </View>
              </View>
              <Share2 size={24} color="#fff" />
            </View>
            <Text className="text-purple-200 text-base mb-4">Challenge your friends and climb the ranks together!</Text>
            <View className="bg-purple-500/20 p-4 rounded-xl">
              <Text className="text-yellow-200 font-medium text-base">
                🎁 Invite 5 friends and earn $1 for every day you top the leaderboard!
              </Text>
            </View>
          </TouchableOpacity>

          {/* Rankings List */}
          <View>
            <Text className="text-2xl font-semibold text-white mb-6">Leaderboard</Text>
            {dummyUsers.map((user) => (
              <RankCard key={user.id} user={user} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RankPage;