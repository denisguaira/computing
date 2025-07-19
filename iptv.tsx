import { View, Text, TextInput, Button } from 'react-native';

export default function IPTVScreen() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>IPTV Login</Text>

      <Text>Server URL</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Username</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Password</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10, marginBottom: 20 }} secureTextEntry />

      <Button title="Connect" onPress={() => {}} />
    </View>
  );
}
