import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      {/* Screen Header */}
      <Stack.Screen options={{ title: 'Oops!' }} />

      {/* Error Message */}
      <Text style={styles.title}>This screen doesn't exist.</Text>

      {/* Link to Home */}
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for a better look
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Darker text color for readability
    marginBottom: 15,
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff', // Blue background for the link
    borderRadius: 5,
  },
  linkText: {
    color: '#fff', // White text for contrast
    fontSize: 16,
    fontWeight: '600',
  },
});
