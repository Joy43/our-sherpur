import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useNavigation } from 'expo-router';

const Sebalist = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const allSebaList = [
    { id: 1, name: 'Bus', icon: require('@/assets/icon/bus.png'), path: '/Seba/Bus/Busslist' },
    { id: 2, name: 'Ambulance', icon: require('@/assets/icon/ambolance.png'), path: '/Allseba/Ambolance/Ambolance' },
    { id: 3, name: 'Online-seba', icon: require('@/assets/icon/Digitalseba.png'), path: '/Allseba/OnlineSeba/OnlineSeba' },
    { id: 4, name: 'Hospital', icon: require('@/assets/icon/medical.png'), path: '/Allseba/Hospital/Hospital' },
    { id: 5, name: 'Doctor', icon: require('@/assets/icon/doctor.png'), path: '/Seba/Doctor' },
    { id: 6, name: 'Fire service', icon: require('@/assets/icon/fire.png'), path: 'Allseba/Fireservice/FireserviceList' },
    { id: 7, name: 'Blood Donation', icon: require('@/assets/icon/blooddonate.png'), path: '/Allseba/Blood/Blood' },
    { id: 8, name: 'Tourist place', icon: require('@/assets/icon/tourism.png'), path: '/Seba/Trainseba' },
    { id: 9, name: 'Flight', icon: require('@/assets/icon/airplane.png'), path: '/Seba/Flightseba' },
  ];

  const RenderItem = ({ item }: { item: typeof allSebaList[0] }) => (
    <TouchableOpacity
      onPress={() => router.push(item.path as any)}
      style={styles.card}
    >
      <Image source={item.icon} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allSebaList}
        numColumns={3}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 8,
    padding: 16,
    width: '30%',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  text: {
    color: '#4a5568',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Sebalist;
