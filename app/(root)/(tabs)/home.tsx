import Sebalist from '@/components/seba/Sebalist';
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';


export default function Home() {



  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar backgroundColor="black" barStyle="light-content" />

      /*------ Header Section ---------*/
      <View className=" items-center px-6 py-8 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-lg shadow-lg">
        <Text className="text-purple-900 text-4xl font-semibold leading-tight text-center">
          Welcome to 
        </Text>
        <Text className='text-center text-3xl font-bold from-neutral-300'>
        Our Sherpur
        </Text>
      </View>

      {/*------- Dashboard Section--------------- */}

      <Sebalist/>
      
    </SafeAreaView>
  );
}
