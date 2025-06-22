import React from 'react'
import { Linking } from 'react-native'


import { TouchableOpacity, View, Text } from 'react-native'



const GoogleOAuth = () => {
  return (
    <>
    <TouchableOpacity >
        <View className="w-6 h-6 items-center justify-center">
            <View className="w-5 h-5 bg-white rounded-full overflow-hidden items-center justify-center">
                <Text className="text-sm font-bold text-blue-500">G</Text>
            </View>
        </View>
    </TouchableOpacity>
    </>
  )
}

export default GoogleOAuth
