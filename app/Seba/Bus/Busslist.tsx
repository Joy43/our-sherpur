import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Sample route data
const routeData = {
  SherpurToDhaka: [
    { id: '1', busName: 'Sherpur Express', departureTime: '06:00 AM' },
    { id: '2', busName: 'Sherpur City Bus', departureTime: '08:30 AM' },
    { id: '3', busName: 'Sherpur Rapid', departureTime: '10:30 AM' },
  ],
  DhakaToSherpur: [
    { id: '1', busName: 'Dhaka Express', departureTime: '07:00 AM' },
    { id: '2', busName: 'Dhaka City Bus', departureTime: '09:00 AM' },
    { id: '3', busName: 'Dhaka Rapid', departureTime: '11:00 AM' },
  ],
  ChittagongDivision: [
    { id: '1', busName: 'Chittagong Express', departureTime: '05:30 AM' },
    { id: '2', busName: 'Chittagong City Bus', departureTime: '07:00 AM' },
    { id: '3', busName: 'Chittagong Rapid', departureTime: '09:00 AM' },
  ],
  KhulnaDivision: [
    { id: '1', busName: 'Khulna Express', departureTime: '06:00 AM' },
    { id: '2', busName: 'Khulna City Bus', departureTime: '08:00 AM' },
    { id: '3', busName: 'Khulna Rapid', departureTime: '10:00 AM' },
  ],
  SylhetDivision: [
    { id: '1', busName: 'Sylhet Express', departureTime: '07:30 AM' },
    { id: '2', busName: 'Sylhet City Bus', departureTime: '09:00 AM' },
    { id: '3', busName: 'Sylhet Rapid', departureTime: '11:00 AM' },
  ],
  MymensinghDivision: [
    { id: '1', busName: 'Mymensingh Express', departureTime: '06:30 AM' },
    { id: '2', busName: 'Mymensingh City Bus', departureTime: '08:30 AM' },
    { id: '3', busName: 'Mymensingh Rapid', departureTime: '10:30 AM' },
  ],
};




export default function Busslist() {
  const routes = Object.keys(routeData);

  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl font-bold text-center mb-4">Routes</Text>
      <FlatList
        data={routes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View className="bg-gray-200 p-3 rounded-lg my-2">
            <Text className="text-lg text-center">{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
