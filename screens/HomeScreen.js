import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to Premium IPTV Player</Text>
      <Button title="Go to Player" onPress={() => navigation.navigate('Player')} />
    </View>
  );
}
