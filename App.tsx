import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Segment from 'expo-analytics-segment';

Segment.initialize({
  androidWriteKey: 'any-key',
  iosWriteKey: 'any-key',
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
