import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Camera, RotateCcw, Zap, ZapOff, X } from 'lucide-react-native';
import { router } from 'expo-router';

const CameraScreen = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [flash, setFlash] = useState<'off' | 'on'>('off');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleFlash = () => {
    setFlash(current => (current === 'off' ? 'on' : 'off'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        
        // Here you can handle the photo (save, upload, etc.)
        console.log('Photo taken:', photo.uri);
        Alert.alert('Photo Captured!', 'Photo saved successfully');
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'Failed to take picture');
      }
    }
  };

  const handleClose = () => {
    router.back();
  };

  if (!permission) {
    return (
      <SafeAreaView className="bg-gray-900 flex-1 justify-center items-center">
        <Text className="text-white text-lg">Requesting camera permissions...</Text>
      </SafeAreaView>
    );
  }

  if (!permission.granted) {
    return (
      <SafeAreaView className="bg-gray-900 flex-1 justify-center items-center px-6">
        <View className="items-center">
          <Camera size={64} color="#ffffff" className="mb-4" />
          <Text className="text-white text-xl font-semibold mb-2 text-center">
            Camera Access Required
          </Text>
          <Text className="text-gray-300 text-base mb-6 text-center">
            We need camera permissions to take photos and videos
          </Text>
          <TouchableOpacity
            className="bg-blue-600 px-6 py-3 rounded-lg"
            onPress={requestPermission}
          >
            <Text className="text-white font-semibold">Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-black flex-1">
      <CameraView
        ref={cameraRef}
        style={StyleSheet.absoluteFillObject}
        facing={facing}
        flash={flash}
      >
        {/* Header Controls */}
        <View className="flex-row justify-between items-center p-4 pt-6">
          <TouchableOpacity
            onPress={handleClose}
            className="bg-black/30 p-3 rounded-full"
          >
            <X size={24} color="#ffffff" />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={toggleFlash}
            className="bg-black/30 p-3 rounded-full"
          >
            {flash === 'on' ? (
              <Zap size={24} color="#ffffff" />
            ) : (
              <ZapOff size={24} color="#ffffff" />
            )}
          </TouchableOpacity>
        </View>

        {/* Bottom Controls */}
        <View className="absolute bottom-0 left-0 right-0 p-6 pb-8">
          <View className="flex-row justify-around items-center">
            {/* Gallery Button */}
            <View className="w-16 h-16" />
            
            {/* Capture Button */}
            <TouchableOpacity
              onPress={takePicture}
              className="w-20 h-20 bg-white rounded-full border-4 border-gray-300 justify-center items-center"
            >
              <View className="w-16 h-16 bg-white rounded-full" />
            </TouchableOpacity>
            
            {/* Flip Camera Button */}
            <TouchableOpacity
              onPress={toggleCameraFacing}
              className="w-16 h-16 bg-black/30 rounded-full justify-center items-center"
            >
              <RotateCcw size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </SafeAreaView>
  );
};

export default CameraScreen;